define(function(){
    // возвращает границы области, по двум введенным ограничивающим объектам
    function bort(parent){
        var obj1 = All[parent[0]];
        var obj2 = All[parent[1]];
        var ogranka =All[parent[0]].vid;// "hor"/"ver"

        var X = (obj1.X<obj2.X)?obj1.X:obj2.X;
        var Y = (obj1.Y<obj2.Y)?obj1.Y:obj2.Y;
        var H = (obj1.H<obj2.H)?obj1.H:obj2.H;
        var W = (obj1.W<obj2.W)?obj1.W:obj2.W;

        if(ogranka=="hor"){
            if(obj1.Y>obj2.Y){
                var temp = JSON.parse(JSON.stringify(obj1));
                obj1 = JSON.parse(JSON.stringify(obj2));
                obj2 = temp
            }
        }else{
            if(obj1.X>obj2.X){
                var temp = JSON.parse(JSON.stringify(obj1));
                obj1 = JSON.parse(JSON.stringify(obj2));
                obj2 = temp
            }
        }

        // разноуровневые родители
        if(ogranka=="hor"){
            if(obj1.X!=obj2.X){
                var X = (obj1.W<obj2.W)?obj1.X:obj2.X;
                if(obj1.H<obj2.H){
                    var H = (obj1.H>obj2.H)?obj1.H:obj2.H;
                }
            }
        }
        if(ogranka=="ver"){
            if(obj1.Y!=obj2.Y || obj1.H!=obj2.H){
                var Y = (obj1.H<obj2.H)?obj1.Y:obj2.Y;
                if(obj1.W<obj2.W){
                    var W = (obj1.W>obj2.W)?obj1.W:obj2.W;
                }
            }
        }





        if(ogranka=="hor"){
            var myBort = {
                "X": X,
                "Y": Y+Tree.static.thickness,
                "W": W,
                "H": H-Tree.static.thickness-obj1.Y-(obj2.H-obj2.Y)
            }
        }else{
            var myBort = {
                "X": X+Tree.static.thickness,
                "Y": Y,
                "W": W-Tree.static.thickness-obj1.X-(obj2.W-obj2.X),
                "H": H
            }
        }

        return myBort;
    }

    return{
        bort:bort
    }
})