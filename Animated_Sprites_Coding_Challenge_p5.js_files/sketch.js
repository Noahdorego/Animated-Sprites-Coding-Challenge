//From Daniel Shiffman's "Animated Sprites" coding challenge
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

//Spritesheet from https://www.codeandweb.com/free-sprite-sheet-packer
//*Had to rearrange sprite order to loop smoother

let spritesheet;
let spritedata;

let animation = [];

let runningPersons = [];

function preload() {
  spritedata = loadJSON('spritesheet.json');
  spritesheet = loadImage('spritesheet.png');
}

function setup() {
  createCanvas(400, 400);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].frame;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  console.log(animation);
  console.log(spritedata.frames);

  for (let i = 0; i < 4; i++) {
    runningPersons[i] = new Sprite(animation, 0, i * 100 - 20, random(0.1, 0.3));
  }

}

function draw() {
  background(0);

  for (let runningPerson of runningPersons) {
    runningPerson.show();
    runningPerson.animate();
  }


  // image(animation[framecount % animation.length], 0, 0);
}