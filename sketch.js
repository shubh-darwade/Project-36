// To create variables here.
var Dog,Dog2,HappyDog,database,foodS,foodStock,form,milkImg,milk;
var Milks = [];
var AmorPm;

var hour;

function preload()
{
  //To load Images.
  Dog = loadImage("images/dogImg.png");
  HappyDog = loadImage("images/dogImg1.png");
  milkImg = loadImage("images/Milk.png");
	
}

function setup() {

//To create datatbase, canvas, sprites etc.

  createCanvas(800, 700);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  Dog2= createSprite(300,300,20,20);
  Dog2.addImage(Dog);
  Dog2.scale=0.2;

  form = new Form();
}


function draw() {  
  //to give colour to background.
   background(46, 139, 87);
   
   for (i = 20; i < 30 * foodS ; i=i+30)
   {
     Milks.push(createSprite(i,100,10,20));
   }

   for (i = 0; i < foodS;i++)
   {
      Milks[i].addImage(milkImg);
      Milks[i].scale =0.1;
   }
   
/*
  for (i = 20; i < 30 * foodS ; i=i+30)
  {
    Milks.push(new Milk());
  }

  for (i = 0; i < foodS;i++)
  {
    Milks[i].display();
  }
  */
   //To draw sprites
  drawSprites();

  GetTime();

  form.display();

  textSize(25);
  fill("blue");
  text("Last Feed: "+ hour + AmorPm,50,35);
 
// If condition to refill the food. 
if(foodS < 1)
{
  database.ref('/').set(
    {
      Food:20
    }
  )
}


}

function writeStock(varname)
{
  //For updating realtime database.
  varname =varname -1;

  database.ref('/').set(
    {
      Food:varname
    }
    
  )

  
}

function readStock(data)
{
  //To get values from real time database.
  foodS = data.val();
}

async function GetTime()
{
  var time = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
  var timeJSON = await time.json();

var dt = timeJSON.datetime;

 hour = dt.slice(11,13);



if(hour >=00 && hour <=12)
{
  AmorPm = "a.m.";
}
else
{
  AmorPm ="p.m.";
}

console.log(hour);



}
