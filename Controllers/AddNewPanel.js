define([
    'Views/Show',
    'Models/verKant.js',
    'Models/horKant',
    'Controllers/Ogranka'
], function(Show,verKant,horKant,Ogranka){

    function add(orientacia, XY, parent){
        var obj, x, y,W, H,procent;


    for(var i=1; All["p"+i]!=undefined; i++){} // генерируем новое имя
    var name="p"+i;

    var bort =Ogranka.bort(parent);


    if(orientacia=="горизонт"){
        procent = (XY - bort.Y)/(bort.H-Tree.static.thickness)*100;
        obj = horKant.creat(bort.X,bort.Y,bort.W,bort.H,procent,name);
    }
    if(orientacia=="вертикаль"){
        procent = (XY - bort.X)/(bort.W-Tree.static.thickness)*100;
        obj = verKant.creat(bort.X,bort.Y,bort.W,bort.H,procent,name);
    }

    // добавим ветки дереву
    Tree.R.push(
        {
        "name":name,
        "horPanel": procent.toFixed(0)+"%",
        "parent":parent.join("|")
        }
    )



    All[name] = obj;
    Show.newPanel(obj.group);


    }
    return{
        add:add
    }
})