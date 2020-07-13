const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
    };
function traces(a,b,c,d) {
    penup();
    rt(90);
    fd(a);
    lt(90);
    fd(b)
    pendown();
    for (i=0; i<2;i++) {
        fd(d);
        rt(90);
        fd(c);
        rt(90);
    }
}
traces(rect.x,rect.y,rect.width,rect.height);