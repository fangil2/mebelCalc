define( ['Controllers/Sensor.js'],function(Sensor){

    function creat(X,Y,W, moveH, procent,name){
       // console.log(  "  (X,Y,W, moveH, procent,name) = ",X,Y,W, moveH, procent,name  );
        procent=parseFloat(procent);
        if(isNaN(procent)) console.log(  "!!!Ошибка!  procent = "+procent  );
        var DDD={};
        DDD.X=X;
        DDD.Y=+((moveH-Tree.static.thickness)*procent/100).toFixed(1)+Y;
        DDD.W=W;
        DDD.H=moveH;
        DDD.vid = "hor";

        DDD._top = 0;
        DDD._bottom = 0; // для ограничения потом будем использовать



        var group = new Kinetic.Group({
            x:X,
            y:DDD.Y,
            draggable: true,
            dragBoundFunc: function(pos) {
                var y= pos.y-Y;
                if(y<DDD._top)y=DDD._top;
                if(y>moveH-Tree.static.thickness-DDD._bottom)y=moveH-Tree.static.thickness-DDD._bottom;
                DDD.Y=y;
                return {x:  this.getAbsolutePosition().x,y:y+Y}
            }
        });


        var kant = new Kinetic.Rect({
            width: parseInt(W),
            height: Tree.static.thickness,
            fill: Tree.static.fill,
            stroke: Tree.static.stroke
        });

        var hand = new Kinetic.Rect({
            y:-4,
            width: parseInt(W),
            height: Tree.static.thickness+8,
            fill: "#ff9",
            opacity:0.5
        });

        hand.on('mousedown', function() {
            window.arrPeretaskival=name;
        });
        hand.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            if(window.MOUSEDOWN){
//               try{
//                   Sensor.countPeresekal(name)
//               } catch (e){}
                window.arrPeresekal.push(name)
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
      //  DDD.name = Tree.R[N].name
        return DDD
    }
    return {creat:creat}

})