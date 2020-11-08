class Block{
    constructor(x, y, width, height){
        var options = {
            restitution : 0.4
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.visibility = 255;
        World.add(world,this.body);     
      }

    display()
    {
        if(this.body.speed<3)
        {
            push()
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop()
        }
        else {
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-.5;
            tint(255,this.visibility);
            rectMode(CENTER);
            rect(this.body,this.body.position.x,this.body.position.y,this.width,this.height);
            //rect(this.body, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
            }
            /*World.remove(world,this.body);
            push();
            var i=200;
            this.visibility=this.visibility-.5;
            tint(255,this.visibility);
            rectMode(CENTER);
            
            console.log("i= ",i);
            pop();*/
        }
    }