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




/* Gamepad binding */

var gamepad = new Gamepad();

console.log('binding down');
gamepad.bind(Gamepad.Event.BUTTON_DOWN, function(e) {
  switch(e.control){
    case 'Y':
      game.BARS.toggleWireframe();
      break;
    case 'X':
      game.BARS.toggleWireframe();
      break;
    case 'B':
      console.log('color shift');
      game.BARS.colorset.push(game.BARS.colorset.shift());
      for(var xpos = 0; xpos < 12; xpos++ ){
        game.BARS.objects[xpos].material =  new THREE.MeshBasicMaterial( { color: game.BARS.colorset[xpos], wireframe: false, wireframeLinewidth: 3, overdraw: true } );
      }
      break;
    case 'BACK':
      window.location = window.location;
      break;
  }
});

gamepad.bind(Gamepad.Event.BUTTON_UP, function(e) {
  switch(e.control){
    case 'X':
      game.BARS.toggleWireframe();
      break;
    case 'RB':
      for(b in game.BARS.objects) {
        game.BARS.objects[b].rotation.x += b/game.BARS.objects.length;
      }
      break;
    case 'LB':
      for(b in game.BARS.objects) {
        game.BARS.objects[b].rotation.x -= b/game.BARS.objects.length;
      }
      break;
    case 'DPAD_UP':
      game.BARS.rotation.speed += 0.01;
      break;
    case 'DPAD_DOWN':
      game.BARS.rotation.speed -= 0.01;
      break;
    case 'DPAD_RIGHT':
      camera.orbit.speed += 10;
      break;
    case 'DPAD_LEFT':
      camera.orbit.speed -= 10;
      break;
  }
});
