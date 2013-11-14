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
	Spectrum.gainFactor -= .05;
});

$(document).bind('keydown', 'p', function(e) {
	console.log(Spectrum.gainFactor);
	Spectrum.gainFactor += 0.05;
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

$(document).bind('keydown', 'c', function(e) {
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 1500;
	resetCameraRot()
	camera.lookAt({x:0,y:0,z:0});
})

$(document).bind('keydown', 'v', function(e) {
	camera.position.x = 1500;
	camera.position.y = 1500;
	camera.position.z = 1000;
	resetCameraRot()
	camera.lookAt({x:0,y:0,z:0});
})

$(document).bind('keydown', 'b', function(e) {
	camera.position.x = -1500;
	camera.position.y = -1500;
	camera.position.z = 1000;
	resetCameraRot()
	camera.lookAt({x:0,y:0,z:0});
})


$(document).bind('keydown', 'n', function(e) {
	camera.position.x = 2500;
	camera.position.y = 0;
	camera.position.z = -1000;
	resetCameraRot()
	camera.lookAt({x:0,y:0,z:0});
})


$(document).bind('keydown', 'm', function(e) {
	Mode.rotateCamera = !Mode.rotateCamera
	if (!Mode.rotateCamera) { resetCameraRot() }
})

$(document).bind('keydown', 'k', function(e) {
	Mode.alternateWireframe = !Mode.alternateWireframe
})

resetCameraRot = function()
{
	camera.rotation.x = 0;
	camera.rotation.y = 0;
	camera.rotation.z = 0;
}
