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
    return{
        render:render
    }
})