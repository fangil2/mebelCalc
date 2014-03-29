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

    }
    function getSaves(name){  // выбираем из кнопки

    }


    return{
        current:current,

        prevCurrent:prevCurrent,
        nextCurrent:nextCurrent,

        setSaves:setSaves,
        getSaves:getSaves
    }
})