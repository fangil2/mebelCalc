require([
    'Controllers/Init',
    'Models/Tree',
    'Views/JSONshow',
    'Controllers/Sensor',
    'Controllers/AddNewPanel'
],function(Init, Tree,JSONshow,Sensor){



    window.init = function (){
        Init.start();
    }

    if(localStorage.Tree==undefined){
        localStorage.Tree=JSON.stringify(Tree)
    }


    window.init();

})


