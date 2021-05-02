class Dustbin{

    constructor(x,y,width,height){

        var op={
            isStatic:true,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        this.img=loadImage("dustbin.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.width,this.height);
    }
}