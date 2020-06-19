//What is Boolean?
- Kiểu Boolean trong JavaScript mô tả một trong hai giá trị: true (đúng) hoặc false (sai).
- Ta có thể sử dụng hàm Boolean() để xác định xem một biểu thức (hoặc một biến) có đúng hay không. 
- Tất cả những gì có chứa giá trị được coi là true.Tất cả những gì không chứa giá trị được coi là false.

//Write down 3 different expression that results a Boolean type
Ex: 3>4, 3=="3", 3==="3"

//What is a flow chart?
- Lưu đồ là một loại sơ đồ biểu diễn một thuật toán hoặc một quá trình, biểu hiện các bước công việc dưới dạng các 
loại hình hôp khác nhau theo thứ tự được biểu diễn bởi các mũi tên. 
- Sơ đồ này có thể thể hiện giải pháp cho vấn đề cần giải quyết từng bước từng bước một.

//What is nested conditionals?
- Một câu lệnh có điều kiện lồng nhau là khi bạn có một câu lệnh if bên trong câu lệnh if khác.
- Bên trong mỗi điều kiện, có một điều kiện khác. 
Các điều kiện lồng nhau chỉ có nghĩa là viết các điều kiện của bạn được cấu trúc theo cách này, 
trái ngược với việc tách chúng thành các câu lệnh riêng biệt hoặc kết hợp chúng thành một.
- Ex: 
    let boolean a = true;
        boolean b = false;
 if(a) {
	if(b) {
		console.log("a and b are both true");
	} else {
		console.log("a is true and b is false");
	} 
} else {
	if (b) {
		console.log("a is false and b is true");
	} else {
		console.log("a and b are both false");
	}
}

//BMI
let     n=Number(prompt('Can nang cua ban (kg): '));
let     c=Number(prompt('Chieu cao cua ban (cm): '));
let     c=c/100;
let     bmi= n/(c*c);
if (bmi<18.5) {
    console.log("Ban thieu can");
} else if (bmi<=24.9){
    console.log("Binh thuong");
} else if (bmi<=29.9) {
    console.log("Ban hoi beo");
} else {console.log("Ban bi beo phi");}

//Write a program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)
let n= Number(prompt("Nhap so n= ?"));
let k=1;
if (n==0) {
    console.log(`${n}! = 0`);
} else {
    for (let i=1; i<=n; i++) {
        k=k*i;
    }
    console.log(`${n}! = ${k}`);    
}

// 4 tu giac
for (let i=0; i<4;i++) {
    lt(120)
    fd(100)
    rt(60)
    fd(100)
    rt(120)
    fd(100)
    rt(60)
    fd(100)
    lt(30)
}

// Da giac long nhau
lt(30)
for (let i=0; i<6;i++) {
    fd(100)
    rt(60)
}
rt(12)
for (let i=0; i<5;i++) {
    fd(100)
    rt(72)
}
rt(18)
for (let i=0; i<4;i++) {
    fd(100)
    rt(90)
}
rt(30)
for (let i=0; i<3;i++) {
    fd(100)
    rt(120)
}





