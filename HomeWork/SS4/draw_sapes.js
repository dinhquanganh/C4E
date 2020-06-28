//Write a function that draws a square, named draw_square, takes 2 arguments: 
//length and color, where length is the length of its side and color is the color of its bound (line color)
function square(length,colors) {
    color(colors);
    for (i=0; i<4; i++) {
        fd(length);
        rt(90);
    }
}
let lgth = Number(prompt('Input length?'));
let clr = prompt('Input color?');
square(lgth,clr);
