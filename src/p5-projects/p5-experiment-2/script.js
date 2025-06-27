import p5 from 'p5';
let webcam;
let webcamScaled;
let photo;
let maximum = 10;
let zoff = 0.0;
let previousFrames = [];
let currentFrameIndex = 0;
let fallSpeed = 1;
let webcamBufffer;
new p5((p) => {
	
	p.setup = () => {
		p.createCanvas(800, 800, p.P2D, document.getElementById("imageCanvas"));
		p.frameRate(10);
		// photo.resize(p.width, p.height);
		maximum = p.width * p.height;
		
		// for (let i = 0; i < 10; i++) {
		// 	previousFrames.push(p.createImage(p.width, p.height));
		// }
		
		webcam = p.createCapture(p.VIDEO);
		webcam.size(800, 800);
		webcam.hide();
		// document.getElementById("imageCanvas")
		webcamBufffer = p.createGraphics(800, 800);
		webcamScaled = p.createImage(800, 800);
	};
	
	function chooseColor(inputColor, inputDecider, output1, output2, output3) {
		if (p.blue(inputColor) > inputDecider) {
			return output1;
		} else if (p.green(inputColor) > inputDecider) {
			return output2;
		} else if (p.red(inputColor) > inputDecider) {
			return output3;
		} else {
			return p.color(
				p.red(output1),
				p.green(output2),
				p.blue(output3)
			);
		}
	}
	
	p.draw = () => {
		// let oscillator = p.int(p.map(p.sin(p.frameCount * 0.005) * 500, -500, 500, 1, 500));
		let oscillator2 = p.int(p.map(p.sin(p.frameCount * 0.07) * 255, -255, 255, 1, 255));
		let oscillator3 = p.int(p.map(p.sin(p.frameCount * 0.08) * 255, -255, 255, 1, 255));
		// console.log(webcam);
		// filter(INVERT);
		webcamBufffer.image(webcam, 0, 0, 800, 800);
		webcamScaled.copy(webcamBufffer, 0, 0, 800, 800, 0, 0, 800, 800);
		// if (webcam && webcam.loadedmetadata && webcam.width && webcam.height) {
		// 	webcamScaled.copy(webcam, 0, 0, webcam.width, webcam.height, 0, 0, 800, 800);
		// }
		p.loadPixels();
		webcamScaled.loadPixels();
		// previousFrames[0].loadPixels();
		//
		for (let i = 0; i < webcamScaled.pixels.length; i++) {
			p.pixels[i] = webcamScaled.pixels[i];
		}

		for (let i = 0; i < maximum * 4; i += 4) {
			let x = ((i / 4) % p.width) * 0.01;
			let y = (Math.floor((i / 4) / p.width)) * 0.01;
			// let noiseValue = p.noise(x, y, zoff);

			let original = [
				p.pixels[i],
				p.pixels[i + 1],
				p.pixels[i + 2],
				p.pixels[i + 3]
			];
			let originalColor = p.color(original[0], original[1], original[2]);

			let inverted = p.color(
				255 - original[0],
				255 - original[1],
				255 - original[2]
			);

			// let pinkGreen = p.lerpColor(
			// 	p.color(
			// 		p.constrain(original[0] + oscillator2 / 3, 1, 255),
			// 		p.constrain(original[2] + oscillator2 / 4, 1, 255),
			// 		p.constrain(original[1] + oscillator2 / 2, 1, 255)
			// 	),
			// 	p.color(webcamScaled.pixels[i], webcamScaled.pixels[i + 1], webcamScaled.pixels[i + 2]),
			// 	p.map(p.sin(p.frameCount * 0.05 * (i * 0.001)), -1, 1, 0.0, 1.0)
			// );

			let webcamColor = p.color(webcamScaled.pixels[i], webcamScaled.pixels[i + 1], webcamScaled.pixels[i + 2]);
			console.log(webcamScaled.pixels[i]);
			if (
				p.blue(webcamColor) > 100
				// p.blue(webcamColor) > p.map(oscillator, 1, 500, 0, 200) &&
				// p.green(webcamColor) - 100 < p.map(oscillator, 1, 500, 50, 255)
			) {
				// noiseValue *
				for (let j = 1; j < (1.0 / oscillator2 + 1.0) * (200.0); j++) {
					const indexA = Math.max(i - 800 * j * 4, 0);
					// const indexB = Math.max((i % (800 * j * 4)), 0);
					// const indexC = Math.max(i - ((800 % j) * 4), 0);
					// const indexD = Math.max(i - ((300 % j) * 4), 0);

					const c = chooseColor(
						p.color(webcamScaled.pixels[i], webcamScaled.pixels[i + 1], webcamScaled.pixels[i + 2]),
						oscillator3,
						inverted,
						p.color(0,0,0,0),
						// pinkGreen,
						webcamColor
					);

					p.pixels[indexA] = p.red(c);
					p.pixels[indexA + 1] = p.green(c);
					p.pixels[indexA + 2] = p.blue(c);
					p.pixels[indexA + 3] = 255;

					// p.pixels[indexB] = p.red(c);
					// p.pixels[indexB + 1] = p.green(c);
					// p.pixels[indexB + 2] = p.blue(c);
					// p.pixels[indexB + 3] = 255;
					//
					// p.pixels[indexC] = p.red(c);
					// p.pixels[indexC + 1] = p.green(c);
					// p.pixels[indexC + 2] = p.blue(c);
					// p.pixels[indexC + 3] = 255;

					// p.pixels[indexD] = previousFrames[0].pixels[i];
				}
			}
			// else {
			// 	if (p.random(100) > 97.0) {
			// 		p.pixels[i] = 0;
			// 		p.pixels[i + 1] = 0;
			// 		p.pixels[i + 2] = 0;
			// 	}
			//
			// 	p.pixels[i] = previousFrames[0].pixels[i];
			// 	p.pixels[i + 1] = previousFrames[0].pixels[i + 1];
			// 	p.pixels[i + 2] = previousFrames[0].pixels[i + 2];
			// 	p.pixels[i + 3] = 255;
			// }
		}

		p.updatePixels();
		// previousFrames[currentFrameIndex].copy(p.get(), 0, 0, p.width, p.height, 0, 0, p.width, p.height);
		// currentFrameIndex = (currentFrameIndex + 1) % previousFrames.length;
		// p.image(p, 0, 0, p.width, p.height);
		// zoff += 0.02;
	};
});
