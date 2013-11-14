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





/* Gamepad binding */

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