define(function(){
    function current(){ // после добавления, изменения, удаления, сохраняем

        if(localStorage.getItem("TreeS")){
            window.Memory = localStorage.getItem("TreeS").split("][");
            while(window.Memory.length-1>Counter){
                window.Memory.pop();
            }
            if(window.Memory[window.Memory.length-1]!=JSON.stringify(Tree)){
                localStorage.setItem("TreeS", window.Memory.join("][")+"]["+JSON.stringify(Tree));
                window.Memory = localStorage.getItem("TreeS").split("][");
                Counter++;
            }
        }else{
            // первый раз
            localStorage.setItem("TreeS", JSON.stringify(Tree));
        }



    }
    function prevCurrent(){             // вытаскиваем предыдущую версию
        if(Counter<=0) return;
        Tree = JSON.parse(window.Memory[--Counter]);
        reInit(true);
    }
    function nextCurrent(){
        if(Counter>window.Memory.length-2 || window.Memory.length==undefined)return;
        Tree = JSON.parse(window.Memory[++Counter]);
        reInit(true);
    }
    function setSaves(){    // сохраним создав кнопку
       var variants = document.getElementById('variants');
       if(Counter==0){
           alert("Нечего сохранить");
           return;
       }
        var name = prompt("Под каким именем сохраните проект?");

        var allNames = localStorage.getItem("names");

        if(allNames!=undefined){
            localStorage.setItem("names", allNames+"|"+name);
        }else{
            localStorage.setItem("names", name);
        }

        localStorage.setItem("ver:"+name, window.Memory[Counter]);
        variants.innerHTML+="<div  style='margin:3px;background: #ff0; width: 100px; border: solid 1px; padding:3px; display:inline'>" +
            "<a href='javascript:openSave(\""+name+"\")'>"+name+"</a></div>"
    }
    function getSaves(name){  // выбираем из кнопки
console.log(  "  @ = "+ "open name="+name  );


        window.Memory[Counter] = JSON.stringify(Tree);



        Counter++;
        Tree = JSON.parse(localStorage.getItem("ver:"+name));
        reInit(true);
    }


    return{
        current:current,

        prevCurrent:prevCurrent,
        nextCurrent:nextCurrent,

        setSaves:setSaves,
        getSaves:getSaves
    }
})