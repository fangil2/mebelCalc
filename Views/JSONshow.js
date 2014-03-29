define(function(){
    // распечатка дерева панелей
    function print(){
        /*console.log(  "  Tree.R >>> " + JSON.stringify(Tree,function(key, value) {

             if (key == 'x1' || key == 'x2' || key == 'x3' || key == 'x4') return undefined;
             if (key == 'y1' || key == 'y2' || key == 'y3' || key == 'y4') return undefined;
             if (key == 'x' || key == 'y' || key == 'dx' || key == 'dy') return undefined;
             if (key == 'frontW' || key == 'frontH' || key == 'backW' || key == 'backH') return undefined;
            if (key == 'static') return undefined;
             return value;
         } ,1));
        */
        console.log(  "  Tree.R >>> \n" + JSON.stringify(Tree,null,2));
    }
    window.JSONconsole = print
    return {
        print:print

    }
})