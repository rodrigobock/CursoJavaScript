function parimpar(n){
    if(n % 2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}

function soma(n1, n2){
    return n1 + n2
}

let res = parimpar(soma(3,7))
console.log(res)
 