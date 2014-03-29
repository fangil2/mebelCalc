define(function(){
    function render(orientacia, name){
       for(var i= 1; i< Tree.R.length; i++){
            if(Tree.R[i].name==name){
                if(orientacia=="вертикаль"){
                    procent = All[name].Y/(All[name].H-Tree.static.thickness)*100;
                    if(Tree.R[i].verPanel==undefined)
                    Tree.R[i].horPanel = procent.toFixed(0)+"%";
                    window.init();
                }else{
                    procent = All[name].X/(All[name].W-Tree.static.thickness)*100;
                    if(Tree.R[i].horPanel==undefined)
                    Tree.R[i].verPanel = procent.toFixed(0)+"%";
                    window.init();
                }
                break;
            }
        }
    }
    function delet(names){
        var ArrDelChildren = searchDelChildren(names);

        for(var i= 5; i< Tree.R.length; i++){
            for(var o in ArrDelChildren){
                if(Tree.R[i])
                if(Tree.R[i].name==ArrDelChildren[o]){
                    delete Tree.R[i];
                }
            }
        }

        var D=JSON.stringify(Tree).replace(/,null/g,"");
        Tree = JSON.parse(D);
        window.init();
    }

    function searchDelChildren(names){  // удаляем
        var ArrDelChildren = names;
        for(var i= 1; i< Tree.R.length; i++){
            if(!Tree.R[i].parent)continue;
            for(var o in ArrDelChildren){
                var D = Tree.R[i].parent.split("|");
                if(D[0]==ArrDelChildren[o] || D[1]==ArrDelChildren[o]){
                    ArrDelChildren.push(Tree.R[i].name);
                }
            }
        }
        return unique(ArrDelChildren);
    }

    function unique(arr) { // удаляем повторяющиеся
        for(var i= 0,obj = {}; i<arr.length; i++)
            obj[arr[i]] = true;
        return Object.keys(obj);
    }


    return{
        render:render,
        delete:delet
    }
})