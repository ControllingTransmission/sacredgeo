
Spectrum = {
	timeStep: function() 
	{
	    if (!this._analyserContext) 
		{
	        var canvas = document.getElementById("analyser");
	        this._canvasWidth = canvas.width;
	        this._canvasHeight = canvas.height;
	        this._analyserContext = canvas.getContext('2d');
	    }

	    // analyzer draw code here
	    {
	        var SPACING = 3;
	        var BAR_WIDTH = 1;
	        var numBars = Math.round(this._canvasWidth / SPACING);
	        var freqByteData = new Uint8Array(analyserNode.frequencyBinCount);

	        analyserNode.getByteFrequencyData(freqByteData); 

	        this._analyserContext.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
	        this._analyserContext.fillStyle = '#F6D565';
	        this._analyserContext.lineCap = 'round';
	        var multiplier = analyserNode.frequencyBinCount / numBars;

	        // Draw rectangle for each frequency bin.
	        for (var i = 0; i < numBars; ++i) 
			{
	            var magnitude = 0;
	            var offset = Math.floor( i * multiplier );
	            // gotta sum/average the block, or we miss narrow-bandwidth spikes
	            for (var j = 0; j< multiplier; j++)
				{
	                magnitude += freqByteData[offset + j];
				}
	            magnitude = magnitude / multiplier;
	            var magnitude2 = freqByteData[i * multiplier];
	            this._analyserContext.fillStyle = "hsl( " + Math.round((i*360)/numBars) + ", 100%, 50%)";
	            this._analyserContext.fillRect(i * SPACING, this._canvasHeight, BAR_WIDTH+3, -magnitude);
	        }
	    }
    

	    this._rafID = window.webkitRequestAnimationFrame( function (time) { 
			Spectrum.timeStep(time) 
		} );
	},

	gotStream: function(stream) 
	{
	    this._inputPoint = this._audioContext.createGain();

	    // Create an AudioNode from the stream.
	    this._realAudioInput = this._audioContext.createMediaStreamSource(stream);
	    this._audioInput = this._realAudioInput;
	    this._audioInput.connect(this._inputPoint);

	    analyserNode = this._audioContext.createAnalyser();
	    analyserNode.fftSize = 2048;
	    this._inputPoint.connect( analyserNode );

	    zeroGain = this._audioContext.createGain();
	    zeroGain.gain.value = 0.0;
	    this._inputPoint.connect( zeroGain );
	    zeroGain.connect( this._audioContext.destination );
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
		this._rafID = null;
		this._analyserContext = null;
		this._canvasWidth = null
		this._canvasHeight = null
		
		window.addEventListener('load', function () { Spectrum.initAudio() } );		
	}
}

Spectrum.setup()


window.onload = function ()
{
	canvas = document.getElementById("analyser");
	canvas.width = document.body.clientWidth; //document.width is obsolete
	canvas.height = document.body.clientHeight; //document.height is obsolete
	console.log("canvas.width = " + canvas.width)
	console.log("canvas.height = " + canvas.height)
}
