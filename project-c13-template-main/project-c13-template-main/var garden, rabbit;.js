var garden, rabbit;
var gardenImg, rabbitImg;
var apple, orangeLeaf, redImage;
var appleImg, orangeImg, redImg;

function preload() {
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png");
orangeImg = loadImage("orangeLeaf.png");
redImg = loadImage("redImage.png");
}

function setup() {
createCanvas(400, 400);

// Mover o fundo
garden = createSprite(200, 200);
garden.addImage(gardenImg);

// Criar sprite do coelho
rabbit = createSprite(180, 340, 30, 30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
background(0);

edges = createEdgeSprites();
rabbit.collide(edges);

drawSprites();

// Adicione o código para criar maçãs aleatoriamente
if (frameCount % 80 === 0) {
var rand = Math.round(random(1, 3));
switch (rand) {
case 1:
createApples();
break;
case 2:
createOrangeLeaves();
break;
case 3:
createRedImage();
break;
default:
break;
}
}
}

// Crie maçãs
function createApples() {
apple = createSprite(random(50, 350), 40, 10, 10);
apple.addImage(appleImg);
apple.scale = 0.05;
apple.velocityY = 3;
apple.lifetime = 150;
}

// Crie folhas laranjas
function createOrangeLeaves() {
orangeLeaf = createSprite(random(50, 350), 40, 10, 10);
orangeLeaf.addImage(orangeImg);
orangeLeaf.scale = 0.05;
orangeLeaf.velocityY = 3;
orangeLeaf.lifetime = 150;
}

// Crie imagens vermelhas
function createRedImage() {
redImage = createSprite(random(50, 350), 40, 10, 10);
redImage.addImage(redImg);
redImage.scale = 0.05;
redImage.velocityY = 3;
redImage.lifetime = 150;
}