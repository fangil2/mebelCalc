require([
    'Controllers/Init',
    'Models/Tree',
    'Views/JSONshow',
    'Controllers/Sensor',
    'Controllers/History',
    'Controllers/AddNewPanel'
],function(Init, Tree, JSONshow,Sensor,History){


    Init.start();
    window.init = function (){
        History.current();
        Init.renderPanels();

    }

    window.Counter=0;
    window.Memory={};
    window.PREV=function(){
        History.prevCurrent();
    }
    window.NEXT=function(){
        History.nextCurrent();
    }


    window.reInit = function (his){ // изменение габаритов
       if(his==undefined)History.current();

        Init.changeGabarits();
       // console.log(  "                     Counter="+Counter );
    }

    localStorage.setItem("TreeS","");


    window.init();

})


