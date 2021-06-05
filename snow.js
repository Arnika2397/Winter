class snow{
    constructor(x,y,r){
        var options = {
            'friction':0,
             'restituion':1,
             'density':5,
             'AirFriction':5
        }
        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        this.img=loadImage("snow4.webp");
        World.add(world,this.body)
    }
    display(){
        if(this.body.position.y>800){
            Matter.Body.setPosition(this.body,{x:random(10,1500),y:random(10,300)})
        }
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, 80,80);
        pop();
    }
}