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



    var tools = document.getElementById('container0');
    tools.innerHTML='<button disabled onclick="PREV()">↶</button>';
    tools.innerHTML+='<button disabled onclick="NEXT()">↷</button>';
    tools.innerHTML+='<button onclick="JSONconsole()">Показать весь JSON</button>';
    tools.innerHTML+='   ДСП, кв.м/р.:<input id="idDSP" value="102" size="1"/>';
    tools.innerHTML+='Кромка, м/р.:<input id="ik" value="30" size="1"/><br>'
    tools.innerHTML+='W:<input id="idW" value="33" onchange="gab()"  size="1"/>H:<input id="idH" onchange="gab()" value="33" size="1"/>Z:<input id="idZ" onchange="gab()" value="33" size="1"/>'


    return {
        newPanel:newPanel,
        render:render,
        clear:clear
    }
})