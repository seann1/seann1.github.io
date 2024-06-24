import * as Tone from 'tone';
import { ToneSynth } from "./Tone";

// make a class ToneSynth2 that extends ToneSynth

export class ToneSynth2 {
	constructor(harmonicity, modulationIndex, release) {
		this.synth = new Tone.GrainPlayer({
			url: "../audio/pad1.wav",
			loop: false,
			detune: harmonicity * 100,
			grainSize: modulationIndex,
			playbackRate: modulationIndex,
			overlap: 0.05,
		}).toDestination();
		this.volume = new Tone.Volume(0).chain(Tone.getDestination());
		this.synth.connect(this.volume);
		this.now = Tone.now();
	}
	
	async startup() {
		return await Tone.start();
	}
	
	setVolume(value) {
		this.volume.volume.value = Tone.gainToDb(value);
	}
	
	setHarmonicity(value) {
		this.synth.set({ harmonicity: value });
	}
	
	setModulationIndex(value) {
		this.synth.set({ modulationIndex: value });
	}
	
	setRelease(value) {
		this.synth.set({ envelope: { release: value } });
	}
	
	play() {
		this.synth.start();
		
		setTimeout(() => {
			this.synth.stop();
		}, 1000); // Stop after 5 seconds
	}
}
