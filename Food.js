class Food{
    constructor(){
        this.foodStock1 = 20
        this.image = loadImage('Milk.png')
    }
    getFoodStock(){
      var foodStock1 = database.ref('foodStock')
       foodStock1.on('value',function(data){
        foodStock1 = data.val();
        })
    }
updateFoodStock(count){
    database.ref('/').update({
        foodStock:count
    });
}
deductFood(count){
    database.ref('/').update({
        foodStock:count
    })
}
display(){
    var x=200,y=400;

    imageMode(CENTER);
    image(this.image,200,400,70,70);
    if(this.foodStock1!=0){
        for(var i=0;i<this.foodStock1;i++){
            if(i%10===0){
            x=80;
            y=y+50
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}
bedroom(){
    background(Bedroomimg,550,500);
}
garden(){
    background(Gardenimg,550,500);
}
washroom(){
    background(Washroomimg,550,500);
}
}