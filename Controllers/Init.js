define([
    'Views/Show',
    'Models/verKant',
    'Models/horKant',
    'Controllers/Ogranka'
], function(Show,verKant,horKant,Ogranka){
    function start(){                   // Вычитаем если есть из localstorage записи, подготовим в пропорциях границы
        document.getElementById("idW").value="180";
        document.getElementById("idH").value="250";
        document.getElementById("idZ").value="60";
        changeGabarits();
    }
    function updateProportions(W,H){ // пропорции
        var proporcia=1;
        if (W/440 > H/320){
            proporcia = W/440;
            W=440; H=H/proporcia;
        }else{
            proporcia = H/320;
            H=320; W=W/proporcia;
        }
        return {W:W, H:H, p:proporcia}
    }
    function changeGabarits(){      //если изменят значения перерисуем
        var W = document.getElementById("idW").value;
        var H = document.getElementById("idH").value;
        var Z = document.getElementById("idZ").value;

        var prop= updateProportions(W,H);

        Tree.R[0].W=prop.W;
        Tree.R[0].H=prop.H;
        Tree.static.thickness = 5/prop.p;
        renderPanels()
    }
    function renderPanels(){            // Отрисуем из дерева все панели

        window.All = {}; // все объекты динамично меняющие свои свойства
        var obj;
        Show.clear();
        for(var i= 1; i< Tree.R.length; i++){

            var x, y,W, H;
            var name = Tree.R[i].name;
            if(Tree.R[i].parent){
                var bort =Ogranka.bort(Tree.R[i].parent.split("|"));
                if(Tree.R[i].horPanel){
                    obj = horKant.creat(bort.X,bort.Y,bort.W,bort.H,Tree.R[i].horPanel,name);
                }else{
                    obj = verKant.creat(bort.X,bort.Y,bort.W,bort.H,Tree.R[i].verPanel,name);
                }
            }else{
                x=Tree.R[0].x;
                y=Tree.R[0].y;
                W=Tree.R[0].W;
                H=Tree.R[0].H;

                if(Tree.R[i].horPanel){
                    obj = verKant.creat(x,y,W,H,Tree.R[i].horPanel,name);
                }else{
                    obj = horKant.creat(x,y,W,H,Tree.R[i].verPanel,name);
                }
            }

            All[name] = obj;
            Show.newPanel(obj.group);

        }

    }







    return{
        start:start,
        renderPanels:renderPanels,
        changeGabarits:changeGabarits
    }
})