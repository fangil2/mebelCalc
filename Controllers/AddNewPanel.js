define([
    'Views/Show',
    'Models/verKant',
    'Models/horKant',
    'Controllers/OgrankaTB'
], function(Show,verKant,horKant,OgrankaTB){

    function add(orientacia, XY, parent){
        var obj, x, y,W, H,procent;

        var name="PPP111"
        var bort =OgrankaTB.bort(parent);

        console.log(  "  bort = ",bort  );

        if(orientacia=="горизонт"){
            procent = (XY - bort.Y)/(bort.H-Tree.static.thickness)*100;
            obj = horKant.creat(bort.X,bort.Y,bort.W,bort.H,procent,name);
        }
        if(orientacia=="вертикаль"){
            console.log(  "  @вертикаль"  );
            procent = (XY - bort.X)/(bort.W-Tree.static.thickness)*100;
           // obj = verKant.add(bort.X,bort.Y,bort.W,bort.H,procent,name);
            obj = verKant.creat(bort.X,bort.Y,bort.W,bort.H,procent,name);
        }

        console.log(  "  All = "+ All  );

        All[name] = obj;
        Show.newPanel(obj.group);


    }
    return{
        add:add
    }
})