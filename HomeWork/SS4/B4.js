function square(length,colors) {
    color(colors);
    for (i=0; i<4; i++) {
        fd(length);
        rt(90);
    }
}

for (let i = 0; i  < 30; i ++){
    square(i * 5, 'red')
    lt(17)
    penup()
    fd(i * 2)
    pendown()
}
