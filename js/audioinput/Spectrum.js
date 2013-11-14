
Spectrum = {
	_maxValue: 0,
	_bins: null,
	_reducedBinCount: 1024, //256,
	
	timeStep: function() 
	{
		console.log("timeStep")
		if (this._analyserNode == null) { return }
		
        var freqByteData = new Uint8Array(this._analyserNode.frequencyBinCount);
        this._analyserNode.getByteFrequencyData(freqByteData); 
		
		this._bins = []
		var maxV = 0
		for (var i = 0; i < this._analyserNode.frequencyBinCount; i ++)
		{
			var v = freqByteData[i]/255
			this._bins.push(v)
		}
	
		this.calcReduced()
		return this._reducedBins
	},

	reducedBins: function()
	{
		return this._reducedBins
	},
	
	diffBins: function()
	{
		return this._diffBins
	},
	
	calcReduced: function()
	{
		if (this._bins == null) { return null }
		

		var reducedBins = []
		
		for (var i = 0; i < this._reducedBinCount; i ++)
		{
			reducedBins.push(0)
		}
		
		var size = this._bins.length
		for (var i = 0; i < size; i ++)
		{
			var v = this._bins[i]
			var ri = Math.floor(this._reducedBinCount*i/size)
			reducedBins[ri] += v*(this._reducedBinCount/size)
		}

			
		this._lastReducedBins = this._reducedBins
		this._reducedBins = reducedBins
		
		if (this._diffBins == null)
		{
			this._diffBins = reducedBins
			this._inflectionBins = reducedBins
		}
		else
		{
			if (this._lastReducedBins)
			{
				for (var i = 0; i < this._reducedBinCount; i ++)
				{
					var nd = this._lastReducedBins[i] - this._reducedBins[0]
					this._diffBins[i] = nd
					
					//this._inflectionBins
				}
			}			
		}
	},

	gotStream: function(stream) 
	{
	    this._inputPoint = this._audioContext.createGain();

	    // Create an AudioNode from the stream.
	    this._realAudioInput = this._audioContext.createMediaStreamSource(stream);
	    this._audioInput = this._realAudioInput;
	    this._audioInput.connect(this._inputPoint);

	    this._analyserNode = this._audioContext.createAnalyser();
		
	    this._analyserNode.fftSize = 2048;
		//this._analyserNode.smoothingTimeConstant = .3
		this._analyserNode.smoothingTimeConstant = .25
	    this._inputPoint.connect(this._analyserNode);

	    zeroGain = this._audioContext.createGain();
	    zeroGain.gain.value = 0.0;
	    this._inputPoint.connect(zeroGain);
	    zeroGain.connect(this._audioContext.destination);
	    this.timeStep();
	},

	initAudio: function() 
	{
	    if (!navigator.getUserMedia)
		{
	        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		}
		
	    navigator.getUserMedia({ audio:true }, function (s) { Spectrum.gotStream(s) }, function(e) {
	            alert('Error getting audio');
	            console.log(e);
	        });
	},
	
	setup: function()
	{
		this._audioContext = new AudioContext();
		this._audioInput = null
		this._realAudioInput = null
		this._inputPoint = null;
		this._analyserContext = null;
		
		window.addEventListener('load', function () { Spectrum.initAudio() } );		
	}
}

Spectrum.setup()
