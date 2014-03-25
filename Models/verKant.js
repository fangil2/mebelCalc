define( ['Controllers/Sensor.js'],function(Sensor){

    function creat(X,Y,moveW, H, procent,name){
        procent=parseFloat(procent);
        if(isNaN(procent)) console.log(  "!!!Ошибка! procent = "+procent  );

        var DDD={};
        DDD.X=+((moveW-Tree.static.thickness)*procent/100).toFixed(1)+X;
        DDD.Y=Y;
        DDD.W=moveW;
        DDD.H=H;
        DDD.vid = "ver";
        DDD.dlina = H;

               var group = new Kinetic.Group({
            x:DDD.X,
            y:Y,
            draggable: true,
            dragBoundFunc: function(pos) {
                var x= pos.x-X;
                if(x<0)x=0;
                if(x>moveW-Tree.static.thickness)x=moveW-Tree.static.thickness;
                DDD.X = x;
                return {x: x+X,y: this.getAbsolutePosition().y}
            }
        });


        var kant = new Kinetic.Rect({

            width: Tree.static.thickness,
            height: parseInt(H),
            fill: Tree.static.fill,
            stroke: Tree.static.stroke
        });

        var hand = new Kinetic.Rect({
            x:-4,
            width: Tree.static.thickness+8,
            height: parseInt(H),
            fill: "#ff9",
            opacity:0.5
        });
        hand.on('mousedown', function() {
            window.arrPeretaskival=name;
        });
        hand.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            if(window.MOUSEDOWN){
                //Sensor.countPeresekal(name)
                window.arrPeresekal.push(name);
            }
            if(window.CTRL){
                console.log(  "  name = "+ name);
            }

        });
        hand.on('mouseout', function() {
            document.body.style.cursor = 'default';
        });

        group.add(kant)
        group.add(hand)

        DDD.group=group
        return DDD
    }
    return {creat:creat}

})