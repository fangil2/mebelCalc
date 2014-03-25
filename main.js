require([
    'Controllers/Init',
    'Models/Tree',
    'Views/JSONshow',
    'Controllers/Sensor',
    'Controllers/AddNewPanel'
],function(Init, Tree,JSONshow,Sensor){


    Init.start();
    window.init = function (){
        Init.renderPanels();
    }

    if(localStorage.Tree==undefined){
        localStorage.Tree=JSON.stringify(Tree)
    }

    window.gab = function (){ // изменение габаритов
        Init.changeGabarits();
    }


    window.init();

})


