const pos = {
    x: 200,
    y: 50,
    }
function traces(a,b) {
    penup();
    rt(90);
    fd(a);
    lt(90);
    fd(b)
    pendown();
}
traces(pos.x,pos.y);