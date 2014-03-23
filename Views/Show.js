define(function(){

    var DIV = document.getElementById('container');
    var stage = new Kinetic.Stage({
        container: DIV,
        width:parseInt(DIV.style.width),
        height:parseInt(DIV.style.height)
    });

    var layer = new Kinetic.Layer();

    function clear(){
        layer.removeChildren();
        stage.add(layer);
    }
    function newPanel(obj){
        layer.add(obj);
        stage.add(layer);
    }
    function render(){
        stage.add(layer);
    }



    var KNOPKI = document.getElementById('container0');
    KNOPKI.innerHTML='<button disabled onclick="PREV()">↶</button>'
    KNOPKI.innerHTML+='<button disabled onclick="NEXT()">↷</button>'
   // KNOPKI.innerHTML+='<button onclick="treeConsole()">Вычислить оставшееся поле</button>';
    KNOPKI.innerHTML+='<button onclick="JSONconsole()">Показать весь JSON</button>'



    return {
        newPanel:newPanel,
        render:render,
        clear:clear
    }
})