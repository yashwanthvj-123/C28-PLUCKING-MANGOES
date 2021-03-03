
class rope {

    constructor(a,b) {

        var options={
            bodyA:a, 
            pointB:b,
            length:15,
            stiffness:0.04

        }

        this.chain=Matter.Constraint.create(options);
        this.point=b;
        World.add(world,this.chain);

    }

    display() {

        if (this.chain.bodyA ) {
    
        var posa=this.chain.bodyA.position;
        var posb=this.point;
        push ();
        strokeWeight(5);
        stroke("black")
        line (posa.x,posa.y,posb.x,posb.y);
        pop ();

        }
    }

fly () {

    this.chain.bodyA=null;

}

attach (a) {

    this.chain.bodyA = a;

}

}
