define([
    'Views/Show',
    'Models/verKant',
    'Models/horKant',
    'Controllers/OgrankaTB'
], function(Show,verKant,horKant,OgrankaTB){
    function start(){

        Show.addTools(); // кнопки - инструменты
        window.All = {}; // все объекты динамично меняющие свои свойства
        var obj;

        for(var i= 1; i< Tree.R.length; i++){

            var x, y,W, H,procent;
            var name = Tree.R[i].name;
            if(Tree.R[i].parent){
                var bort =OgrankaTB.bort(Tree.R[i].parent);
                if(Tree.R[i].horPanel){
                    obj = horKant.add(bort.X,bort.Y,bort.W,bort.H,Tree.R[i].horPanel,name);
                }else{
                    obj = verKant.add(bort.X,bort.Y,bort.W,bort.H,Tree.R[i].verPanel,name);
                }
            }else{
                x=Tree.R[0].x;
                y=Tree.R[0].y;
                W=Tree.R[0].W;
                H=Tree.R[0].H;

                if(Tree.R[i].horPanel){
                    obj = verKant.add(x,y,W,H,Tree.R[i].horPanel,name);
                }else{
                    obj = horKant.add(x,y,W,H,Tree.R[i].verPanel,name);
                }
            }


            All[name] = obj;
            Show.newPanel(obj.group);




        }

        //Show.newPanel(horKant.add(20.5,150,200,50,0))
        //Show.newPanel(horKant.add(20.5,150,200,50,100))



    }






    return{
        start:start
    }
})