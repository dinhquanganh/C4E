const colors= ['blue', 'cyan', 'purple', 'gray', 'red' ];
let   a=80;
for (i=0; i<5; i++) {
    color(colors[i])
    for (j=0; j<4; j++) {
        fd(a);
        rt(90);
    }
    a-=20;
}