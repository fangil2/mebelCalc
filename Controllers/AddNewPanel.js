define([
    'Views/Show'
],function(Show){

    function init(){
        var Mx,My, dMx,dMy,DIV = document.getElementById('container');

        var fon = new Kinetic.Rect({
            width: parseInt(DIV.style.width),
            height: parseInt(DIV.style.height),
            fill: '#eff'
        });
        fon.on('mousedown', function(evt) {
            Mx=evt.x;
            My=evt.y;
        });

    }
    return{
        init:init
    }
})