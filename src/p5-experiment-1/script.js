import p5 from 'p5';

let img;
let sortedImg;
let lastFetchTime = 0;
let interval = 23000;
let alterLimit = 0;

new p5((p) => {
	
	p.setup = () => {
		p.createCanvas(800, 600);
		p.frameRate(10);
		loadNewImage(p);
	};
	
	p.draw = () => {
		p.background(0);
		if (img && sortedImg) {
			let alteredImg = p.createImage(800, 800);
			alteredImg.loadPixels();
			img.loadPixels();
			sortedImg.loadPixels();
			
			for (let i = 0; i < img.pixels.length; i += 4) {
				let b = img.pixels[i + 2];
				if (b < alterLimit) {
					for (let j = 1; j < 40; j++) {
						let index = i - (800 * j * 4);
						if (index >= 0 && index < alteredImg.pixels.length) {
							alteredImg.pixels[index] = sortedImg.pixels[i];
							alteredImg.pixels[index + 1] = sortedImg.pixels[i + 1];
							alteredImg.pixels[index + 2] = sortedImg.pixels[i + 2];
							alteredImg.pixels[index + 3] = 255;
						}
					}
				}
			}
			
			alteredImg.updatePixels();
			p.image(alteredImg, 0, 0, p.width, p.height);
		}
		
		if (p.millis() - lastFetchTime > interval) {
			loadNewImage(p);
		}
		
		alterLimit += 1;
	};
});

function loadNewImage(p) {
	lastFetchTime = p.millis();
	p.loadImage("https://picsum.photos/800/800.jpg", (loadedImage) => {
		img = loadedImage;
		sortedImg = sortImage(loadedImage, p);
		alterLimit = 0;
	}, () => {
		console.log("Failed to load image.");
	});
}

function sortImage(image, p) {
	let sorted = p.createImage(image.width, image.height);
	image.loadPixels();
	let pixelData = [];
	
	for (let i = 0; i < image.pixels.length; i += 4) {
		pixelData.push({
			r: image.pixels[i],
			g: image.pixels[i + 1],
			b: image.pixels[i + 2],
			a: image.pixels[i + 3],
		});
	}
	
	pixelData.sort((a, b) => a.b - b.b);
	
	sorted.loadPixels();
	for (let i = 0; i < pixelData.length; i++) {
		sorted.pixels[i * 4] = pixelData[i].r;
		sorted.pixels[i * 4 + 1] = pixelData[i].g;
		sorted.pixels[i * 4 + 2] = pixelData[i].b;
		sorted.pixels[i * 4 + 3] = pixelData[i].a;
	}
	sorted.updatePixels();
	return sorted;
}
