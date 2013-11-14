$(document).bind('keydown', 'space', function(e) {
	$('#bandname').toggle();
});

$(document).bind('keydown', '1', function(e) {
	Spectrum.gain = 1;
});

$(document).bind('keydown', '2', function(e) {
	Spectrum.gain = 2;
});

$(document).bind('keydown', '3', function(e) {
	Spectrum.gain = 3;
});

$(document).bind('keydown', '4', function(e) {
	Spectrum.gain = 4;
});

$(document).bind('keydown', '5', function(e) {
	Spectrum.gain = 5;
});

$(document).bind('keydown', '6', function(e) {
	Spectrum.gain = 10;
});

$(document).bind('keydown', '7', function(e) {
	Spectrum.gain = 20;
});

$(document).bind('keydown', '-', function(e) {
	Spectrum.gainFactor -= .05;
});

$(document).bind('keydown', '+', function(e) {
	console.log(Spectrum.gainFactor);
	Spectrum.gainFactor += .05;
});


// Camera position
