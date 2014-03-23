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

    window.init();

})


