define(function(){

    /* дерево панелей */
    Tree = {};
    Tree.static={
        "fill": "#b96",     /* цвет заливки передней грани */// Если закомменитровать все в один цвет красится, удобно при тестировании
        "stroke":"#963",        /* цвет границ */
        "thickness": 5,         /* толщина панелей */
        "opacity": 1          /* прозрачность */
    };
    Tree.R = [
        {
            "x": 20,          /*смещение всего относительно канвас*/
            "y": 10,
            "W": 200,      /* размеры передней рамки */
            "H": 300

        },
        {
            "name":"p1",
            "verPanel": "0%"
        },
        {
            "name":"p2",
            "verPanel": "100%"
        }
        ,
       {
            "name":"p3",
            "verPanel": "0%",
            "parent":"p1|p2"
        },
       {
            "name":"p4",
            "verPanel": "100%",
            "parent":"p1|p2"
        },
      {
            "name":"p5",
            "verPanel": "80%",
            "parent":"p1|p2"
        }
        ,
        {
            "name":"p6",
            "horPanel": "25%",
            "parent":"p3|p5"
        }

        ,
    /*      {
            "name":"p8",
            "verPanel": "80%",
            "parent":["p6","p2"]
        }
        ,
        {
            "name":"p9",
            "horPanel": "50%",
            "parent":["p8","p5"]
        }
        ,
        {
            "name":"p10",
            "horPanel": "80%",
            "parent":["p8","p5"]
        }
*/


    ];


    return Tree

});