function get_even_list(l) {
    let newArr=[];
    let j=0;
    for (let i=0; i< l.length; i++) {
        if (l[i]%2==0) {
            newArr[j]=l[i];
            j++;
        }
    }
    return newArr;
}
even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])) {
    console.log("Your function is correct");
} else {
    console.log("Ooops, bugs detected");
}
