import p5 from 'p5';

let webcam;
let webcamBuffer;
let outputImg;
let zoff;

function chooseBuffer(val) {

}
new p5((p) => {
	p.setup = () => {
		p.createCanvas(600, 600);
		p.frameRate(2);
		
		// Setup webcam
		webcam = p.createCapture(p.VIDEO);
		webcam.size(600, 600);
		webcam.hide();
		zoff = 0.0;
		// Create an offscreen buffer and an output image
		webcamBuffer = p.createGraphics(600, 600);
		outputImg = p.createImage(600, 600);
	};
	
	p.draw = () => {
		if (!webcam) return;
		
		// Draw webcam to buffer
		webcamBuffer.image(webcam, 0, 0, 600, 600);
		
		// Copy to output image
		outputImg.copy(webcamBuffer, 0, 0, 600, 600, 0, 0, 600, 600);
		const sine1 = p.map(Math.sin(p.frameCount * 0.5), 1, -1, 0, 1);
		const sine2 = p.map(Math.sin(p.frameCount * 0.3), 1, -1, 0, 1);
		const sine3 = p.map(Math.sin(p.frameCount * 0.2), 1, -1, 0, 1);

		outputImg.loadPixels();
		webcamBuffer.loadPixels();
		
		for (let i = 0; i < outputImg.pixels.length; i += 4) {
			let x = ((i / 4) % p.width) * 0.01;
			let y = (Math.floor((i / 4) / p.width)) * 0.01;
			let noiseValue = p.noise(x, y, zoff);
			if (outputImg.pixels[i] < (250*noiseValue * sine1)+100) {
				for (let j = 0; j < 100*noiseValue; j++) {
					let idx = i - j * p.width * 4;
					outputImg.pixels[idx] = (j*(sine3*10)) + (noiseValue > 0.7 ? webcamBuffer.pixels[i] : 0) * noiseValue;       // R
					outputImg.pixels[idx + 1] = (j*(sine1*10)) + (noiseValue > 0.5 ? webcamBuffer.pixels[i+1] : 0) * (1-noiseValue)*sine1; // G
					outputImg.pixels[idx + 2] = (j*(sine2*7)) + (noiseValue > 0.3 ? webcamBuffer.pixels[i+2] : 0)* (0.8-noiseValue)* (1 - sine1); // B
				}
			}
			else {
				outputImg.pixels[i] = 0;
				outputImg.pixels[i+ 1] = 0;
				outputImg.pixels[i+2] = 0;
			}
			// Alpha stays the same
		}
		outputImg.updatePixels();
		
		// Display the result
		p.image(outputImg, 0, 0, 800, 800);
		zoff += 0.02;
	};
});
