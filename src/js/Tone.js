import * as Tone from 'tone';

export class ToneSynth {
	constructor(harmonicity, modulationIndex, release) {
		this.synth = new Tone.PolySynth(Tone.FMSynth,{
			harmonicity: harmonicity,
			modulationIndex: modulationIndex,
			oscillator: {
				type: "sine"
			},
			envelope: {
				attack: 0.01,
				decay: 0.01,
				sustain: 1,
				release: release
			},
			modulation: {
				type: "square"
			},
			modulationEnvelope: {
				attack: 0.5,
				decay: 0.3,
				sustain: 1,
				release: 50
			}
		}).toDestination();
		this.freeverb = new Tone.Freeverb({roomSize: 0.7});
		this.volume = new Tone.Volume(0).chain(this.freeverb, Tone.getDestination());
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
	
	setRoomSize(value) {
		this.freeverb.set({ roomSize: value });
	}
	
	setRelease(value) {
		this.synth.set({ envelope: { release: value } });
	}
	
	play(note, duration) {
		this.synth.triggerAttackRelease(note, duration);
	}
	
	mapRange(value, in_min, in_max, out_min, out_max) {
		return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}
	
	sigmoid(x) {
		return 1 / (1 + Math.exp(-x));
	}
}
