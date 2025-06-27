import p5 from 'p5';

let webcam;
let webcamBuffer;
let outputImg;
let zoff = 0.0;

new p5((p) => {
	p.setup = () => {
		p.createCanvas(800, 800);
		p.frameRate(10);
		
		// Setup webcam
		webcam = p.createCapture(p.VIDEO);
		webcam.size(800, 800);
		webcam.hide();
		
		// Create an offscreen buffer and an output image
		webcamBuffer = p.createGraphics(800, 800);
		outputImg = p.createImage(800, 800);
	};
	
	p.draw = () => {
		if (!webcam) return;
		
		// Draw webcam to buffer
		webcamBuffer.image(webcam, 0, 0, 800, 800);
		
		// Copy to output image
		outputImg.copy(webcamBuffer, 0, 0, 800, 800, 0, 0, 800, 800);
		
		// Invert colors
		outputImg.loadPixels();
		for (let i = 0; i < outputImg.pixels.length; i += 4) {
			let x = ((i / 4) % p.width) * 0.01;
			let y = (Math.floor((i / 4) / p.width)) * 0.01;
			let noiseValue = p.noise(x, y, zoff);
			outputImg.pixels[i] = 255 - outputImg.pixels[i] * noiseValue;       // R
			outputImg.pixels[i + 1] = 255 - outputImg.pixels[i + 1] * noiseValue; // G
			outputImg.pixels[i + 2] = 255 - outputImg.pixels[i + 2] * noiseValue; // B
			// Alpha stays the same
		}
		outputImg.updatePixels();
		
		// Display the result
		p.image(outputImg, 0, 0, 800, 800);
		zoff += 0.02;
	};
});
