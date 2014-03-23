define([],function(){

    var DIV = document.getElementById('container');
    var stage = new Kinetic.Stage({
        container: DIV,
        width:parseInt(DIV.style.width),
        height:parseInt(DIV.style.height)
    });

    var layer = new Kinetic.Layer();

    function newPanel(obj){
        layer.add(obj);
        stage.add(layer);
    }
    function render(){
        stage.add(layer);
    }


    function addTools(){
        var KNOPKI = document.getElementById('container0');
        KNOPKI.innerHTML='<button onclick="PREV()">↶</button>'
        KNOPKI.innerHTML+='<button onclick="NEXT()">↷</button>'
       // KNOPKI.innerHTML+='<button onclick="treeConsole()">Вычислить оставшееся поле</button>';
        KNOPKI.innerHTML+='<button onclick="JSONconsole()">Показать весь JSON</button>'
    }




    return {
        newPanel:newPanel,
        render:render,
        addTools:addTools
    }
})