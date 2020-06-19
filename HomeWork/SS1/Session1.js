//How to check a variable’s type?--> Su dung typeof
    let a=typeof "ok";
        b=typeof 123;
    console.log(a);
    console.log(b);

//In what cases, you will get SyntaxError from the compiler telling you that some of your variables have invalid names?
//-->Tên biến phải bắt đầu bằng bằng chữ hoặc kí tự gạch dưới _.
   //Tên biến không được bắt đầu bằng số và không chứa các kí tự đặc biệt như &, *, (, ).
   //Tên biến không được trùng với từ khóa như var, for, if...

//Can you give 3 different examples of invalid names?--> VD: 3like,aba`kk(),var, let,for,...

//Write a program that calculates the area of a circle. The circle radius is entered by users
    const pi=3.14;
    let r=Number(prompt("R= "));
        a=pi*r*r;
    console.log(`Area = ${a.toFixed(1)}`);

//Write a program that converts Celsius (0C) into Fahrenheit (0F) 
    let c= Number(prompt("Celsius?"));
        f= (c*1.8)+32;
        st= `${c}(C) = ${f}(F)`;
    console.log(st);

//A square
    for (var i=0; i <4; i++) {
        fd(100);
        lt(90);
    }

//An equilateral triangle
    rt(30);
    for (var i=0; i<3; i++) {
        fd(100);
        rt(120);
    }

//A circle
    for (var i=0; i<72; i++){
            fd(10);
            lt(5);
    }

//Multi-circles
    for (var j=0; j<30; j++){
        for (var i=0; i<72; i++){
            fd(10);
            lt(5);
        }
        lt(12);
    }




        

