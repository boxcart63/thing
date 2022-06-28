class BALL{
    constructor(x,y){
        this.x=x
        this.y=y
        this.radius=25
    }

    cratee(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.radius)
    }
    movee(vx,vy){
        
        if(this.x<this.radius) {
        this.x=this.radius
             vx=-vx
        }
        if(this.x>400-this.radius){
            this.x=400-this.radius
            vx=-vx  

        }
        if(this.y<this.radius){
            this.y=this.radius
            vy=-vy
        }
        if (this.y>400-this.radius){
            this.y=400-this.radius
            vy=-vy
        }
        this.x+=vx
        this.y+=vy
      
    }
}