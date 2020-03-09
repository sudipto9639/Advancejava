function add(n1,n2){
    let num = [...arguments];
    let s=0;
    for(let i=0;i<num.length;i++){
        s=s+num[i];
    

    }
    return s;
}
const result = add(4,6,8,16);
console.log(result);