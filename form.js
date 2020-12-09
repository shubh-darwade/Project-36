class Form
{
    constructor()
    {

    }

    display()
    {
       var title = createElement('h1');
       title.html("Virtual Pet -2");
       title.position(730,35);

       var button = createButton('Give food');
       button.position(950,70);

       var button2 = createButton('Add food');
       button2.position(650,70);
       
      
      
       button.mousePressed(
           function ()
           {
              
            writeStock(foodS);
            Dog2.addImage(HappyDog); 
            
           }

       )
         button2.mousePressed(
            function ()
            {
               
               
                  database.ref('/').set(
                    {
                      Food:foodS+1
                    }
                  )
                
             
            }
          
       )
       
    }
}
