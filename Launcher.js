class Launcher {
    constructor(FirstBody,pointB){
        var options= {
    bodyA: FirstBody,
    pointB: pointB,
    length:30,
    stiffness:1
    }
    this.slingshot= Matter.Constraint.create(options)
    this.pointB= pointB
    World.add(world,this.slingshot)
    
    }
    display(){
        if(this.slingshot.bodyA) {
        var pointA = this.slingshot.bodyA.position
       // var pointB= this.slingshot.bodyB.position
    line( pointA.x, pointA.y, this.pointB.x, this.pointB.y  )
        }
    
    }
    
    fly() {
    
    this.slingshot.bodyA = null
    
    }
    
    }
    
    