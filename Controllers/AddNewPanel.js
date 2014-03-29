define([
    'Models/verKant.js',
    'Models/horKant.js',
    'Controllers/Ogranka'
], function(verKant,horKant,Ogranka){

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




    All[name] = obj;



    // добавим ветки дереву
    var d = Tree.R.push(
        {
            "name":name,
            // "horPanel": procent.toFixed(0)+"%",
            "parent":parent.join("|")
        }
    )
    if(All[name].vid=="hor"){
        Tree.R[d-1].horPanel = procent.toFixed(0)+"%"
    }else{
        Tree.R[d-1].verPanel = procent.toFixed(0)+"%"
    }


        reInit();

    }
    return{
        add:add
    }
})