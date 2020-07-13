const square = {
    x: 100,
    y: 50,
    width: 20,
    };
function traces(a,b,c) {
    penup();
    rt(90);
    fd(a);
    lt(90);
    fd(b)
    pendown();
    for (i=0; i<4;i++) {
        fd(c);
        rt(90);
    }
}
traces(square.x,square.y,square.width);