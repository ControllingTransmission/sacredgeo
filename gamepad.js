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