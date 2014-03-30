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

    var variants = document.getElementById('variants');
    variants.innerHTML+='<button  onclick="window.newSave()">Сохранить</button>';

    var allNames = [localStorage.getItem("names")];
    if(allNames[0]!=null)historyShow()

    function historyShow(){
        if(allNames[0].indexOf("|")>-1){
            allNames = allNames[0].split("|")
        }
        console.log(  "  allNames.length = "+ allNames.length  );
        for(var i=0; i<allNames.length;i++){
            console.log(  "  allNames[i] = "+ allNames[i] );
            variants.innerHTML+="<div id='"+allNames[i]+"' style='margin:3px;background: #fda; width: 100px; border: solid 1px; padding:2px; display:inline'>" +
                "<a href='javascript:openSave(\""+allNames[i]+"\")'>"+allNames[i]+"</a></div>"
        }
    }


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