$(document).bind('keydown', 'space', function(e) {
	$('#bandname').toggle();
});

$(document).bind('keydown', '1', function(e) {
	Spectrum.gain = 1;
});

$(document).bind('keydown', '2', function(e) {
	Spectrum.gain = 1.5;
});

$(document).bind('keydown', '3', function(e) {
	Spectrum.gain = 2;
});

$(document).bind('keydown', '4', function(e) {
	Spectrum.gain = 2.5;
});

$(document).bind('keydown', '5', function(e) {
	Spectrum.gain = 3;
});

$(document).bind('keydown', '6', function(e) {
	Spectrum.gain = 5;
});

$(document).bind('keydown', '7', function(e) {
	Spectrum.gain = 0;
});

$(document).bind('keydown', '8', function(e) {
	Mode.isWireframe = !Mode.isWireframe
});

$(document).bind('keydown', '9', function(e) {
	Mode.blackAndWhite = true
});

$(document).bind('keyup', '9', function(e) {
	Mode.blackAndWhite = false
});


$(document).bind('keydown', 'o', function(e) {
	Spectrum.gainTweak -= .05;
});

$(document).bind('keydown', 'p', function(e) {
	console.log(Spectrum.gainTweak);
	Spectrum.gainTweak += 0.05;
});




// Camera position
$(document).bind('keydown', 'w', function(e) {
	camera.translateY(10);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'shift+w', function(e) {
	camera.translateY(100);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 's', function(e) {
	camera.translateY(-10);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'shift+s', function(e) {
	camera.translateY(-100);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'a', function(e) {
	camera.translateX(-10);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'shift+a', function(e) {
	camera.translateY(-100);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'd', function(e) {
	camera.translateX(10);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'shift+d', function(e) {
	camera.translateX(100);
	camera.lookAt({x:0,y:0,z:0});
});

$(document).bind('keydown', 'z', function(e) {
	Mode.colorSetNumber ++
	Mode.colorSetNumber = Mode.colorSetNumber % COLORSETS.length
	console.log("Mode.colorSetNumber = " + Mode.colorSetNumber)
	//if (Mode.colorSetNumber > COLORSETS.length - 1) { colorSetNumber.colorSetNumber = 0 }
})


$(document).bind('keydown', 'x', function(e) {
	Mode.rotating = !Mode.rotating
})
