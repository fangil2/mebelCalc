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
    tools.innerHTML='<button  onclick="window.PREV()">↶</button>';
    tools.innerHTML+='<button  onclick="NEXT()">↷</button>';
    tools.innerHTML+='<button onclick="JSONconsole()">Показать весь JSON</button>';
    tools.innerHTML+='   ДСП, кв.м/р.:<input id="idDSP" onchange="reInit()" value="3.2" size="1"/>';
    tools.innerHTML+='Кромка, м/р.:<input id="idKromka" onchange="reInit()" value="1.3" size="1"/><br>'
    tools.innerHTML+='W:<input id="idW" value="33" onchange="reInit()"  size="1"/>H:<input id="idH" onchange="reInit()" value="33" size="1"/>Z:<input id="idZ" onchange="reInit()" value="33" size="1"/>'

    var resultat = document.getElementById('resultat');
    resultat.innerHTML='ДСП <input id="Idsp" size="4" style="border: none; text-align: right"/> кв.м.';
    resultat.innerHTML+='<input id="IdspSum" size="4" style="border: none; text-align: right"/> руб.';

    resultat.innerHTML+='<img width="40px">Кромка <input id="Ikromka" size="1" style="border: none; text-align: right"/> м.';
    resultat.innerHTML+='<input id="IkromkaSum" size="4" style="border: none; text-align: right"/> руб.';

    resultat.innerHTML+='<br>Итого боковые: <input id="Itog" size="4" style="border: none; text-align: right"/> руб.';

    return {
        newPanel:newPanel,
        render:render,
        clear:clear
    }
})