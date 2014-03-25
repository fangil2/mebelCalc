define([
    'Controllers/AddNewPanel',
    'Controllers/MovePanel'
],function(AddNewPanel,MovePanel){
    var Mx,My, dMx,dMy,DIV = document.getElementById('container');
    window.arrPeresekal=[];
    window.arrPeretaskival="";
    this.onkeydown=function(evt){
        window.CTRL=evt.ctrlKey;
    }
    this.onkeyup=function(evt){
        window.CTRL = evt.ctrlKey;
    }
    DIV.onmousedown =  function(evt){
        Mx=evt.x;
        My=evt.y;
        window.MOUSEDOWN=true;
        window.arrPeresekal=[]

    };
    DIV.onmouseup =  function(evt){
        dMx=Math.abs(Mx-evt.x);
        dMy=Math.abs(My-evt.y);


        window.MOUSEDOWN=false;
        var orientacia = (dMx>dMy)?"горизонт":"вертикаль";

        if(window.arrPeresekal.length!=0){
            console.log(  "  удалить, разровнять панели = "+ window.arrPeresekal  );
            MovePanel.render(orientacia, window.arrPeresekal);
            return;
        }
        if(document.body.style.cursor == 'pointer'){
            // обновляем дерево json и запускаем заново отрисовку всего
            MovePanel.render(orientacia, window.arrPeretaskival);
            window.arrPeretaskival="";
            return
        }

        // Ищем, между какими панелями чиркнули

        var XL=Mx-DIV.offsetLeft,
            XR=evt.x-DIV.offsetLeft,
            YT=My-DIV.offsetTop,
            YB=evt.y-DIV.offsetTop,
            tmp;
        if(XL>XR){tmp=XR; XR=XL; XL=tmp}
        if(YT>YB){tmp=YB; YB=YT; YT=tmp}

        if(dMx>=dMy && dMx<10)return null;
        if(dMx<dMy && dMy<10)return null;

        if(orientacia=="горизонт"){
            console.log( orientacia+ "  :  "+ searchBortX(XL,XR,YT,YB)  );
            AddNewPanel.add(orientacia, YT, searchBortX(XL,XR,YT,YB))
        }else{
            console.log( orientacia+ "  :  "+ searchBortY(XL,XR,YT,YB)  );
            AddNewPanel.add(orientacia, XL, searchBortY(XL,XR,YT,YB))
        }


    }

    function peresekal(){
        // Их нужно в первую очередь засветить
        // пересекавшие можно удалить, между ними добавить, или разровнять
    }

    function searchBortX(XL,XR,YT,YB){      // ищем панели, к которым можно закрепиться  //Ищем ближайшего в сдвух сторон панелей

        var L=-Infinity,R=Infinity, LN, RN;
        for(var o in All){
            if(All[o].vid!="ver")continue;
            if(All[o].Y>YT || All[o].Y+All[o].H<YT )continue;
            var xx = All[o].X;
            if(XL>xx && L<xx) {
                L=xx;
                LN=o
            }
            if(XR<xx && R>xx) {
                R=xx;
                RN=o;
            }
        }
        if(LN!=undefined && RN!=undefined)  return [RN, LN] ;
    }
    function searchBortY(XL,XR,YT,YB){      // ищем панели, к которым можно закрепиться  //Ищем ближайшего в сдвух сторон панелей
        if (window.arrPeresekal.length>0) return;
        var T=-Infinity,B=Infinity, TN, BN;
        for(var o in All){
            if(All[o].vid!="hor")continue;
            if(All[o].X>XL || All[o].X+All[o].W<XR )continue;
            var yy = All[o].Y;
            if(YT>yy && T<yy) {
                T=yy;
                TN=o
            }
            if(YB<yy && B>yy) {
                B=yy;
                BN=o;
            }
        }
        if(TN!=undefined && BN!=undefined)  return [TN, BN] ;
    }


    /*return{
        countPeresekal:countPeresekal
    }*/
})