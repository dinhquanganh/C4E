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
console.log(get_even_list([1, 4, 5, -1, 10]));