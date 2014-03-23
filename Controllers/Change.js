define(function(){
    function render(orientacia, name){
        console.log(  "  changeorientacia, name = "+ orientacia, name  );


        for(var i= 1; i< Tree.R.length; i++){
            if(Tree.R[i].name==name){
                if(orientacia=="вертикаль"){
                    procent = All[name].Y/(All[name].H-Tree.static.thickness)*100;
                    Tree.R[i].horPanel = procent.toFixed(0)+"%";
                    window.init();
                }else{
                    procent = All[name].X/(All[name].W-Tree.static.thickness)*100;
                    console.log("procent="+procent, name, i+ "  @ = "+  Tree.R[i].verPanel)
                    Tree.R[i].verPanel = procent.toFixed(0)+"%";
                    window.init();
                }

                break
            }

        }
    }
    return{
        render:render
    }
})