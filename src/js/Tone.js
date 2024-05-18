import * as Tone from 'tone';

export class ToneSynth {
	constructor(harmonicity, modulationIndex) {
		this.synth = new Tone.FMSynth({
			harmonicity: harmonicity,
			modulationIndex: modulationIndex,
			oscillator: {
				type: "sine"
			},
			envelope: {
				attack: 0.01,
				decay: 0.01,
				sustain: 1,
				release: 0.5
			},
			modulation: {
				type: "square"
			},
			modulationEnvelope: {
				attack: 0.5,
				decay: 0,
				sustain: 1,
				release: 0.5
			}
		}).toDestination();
		this.volume = new Tone.Volume(0).toDestination();
		this.synth.connect(this.volume);
		this.now = Tone.now();
	}
	
	async start() {
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
	
	play(note, duration) {
		this.synth.triggerAttackRelease(note, duration);
	}
	
	mapRange(value, in_min, in_max, out_min, out_max) {
		return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}
}
