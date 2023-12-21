let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let input = document.querySelector('.input');


let key1 =  document.querySelector('.k1');
let key2 =  document.querySelector('.k2');
let key3 =  document.querySelector('.k3');
let key4 =  document.querySelector('.k4');

function lettersOnly(input){
    let regex=/[^a-z]/g;
    input.value = input.value.replace(regex,"");
}
function numbersOnly(input){
    let regex=/[^0-9]/gi;
    input.value = input.value.replace(regex,"");
}

let result= [];

let final= document.querySelector('.result');

let btn1=  document.querySelector('.ce');
let btn2=  document.querySelector('.cd');
let btn3=  document.querySelector('.ve');
let btn4=  document.querySelector('.vd');
let btn5=  document.querySelector('.ae');
let btn6=  document.querySelector('.ad');


btn1.addEventListener('click', (e) => {
    let inputArray=  Array.from(input.value);
    if(input.value != "" && key1.value !=""){
        inputArray.forEach((e) =>{
            let indexLetter=(+lettersArray.indexOf(e) + +key1.value)%26;
            while(indexLetter>26){
                indexLetter-=26;
            }
            while(+indexLetter<0){
                indexLetter+=26;
            }
            let letterAfter= lettersArray[indexLetter];
            result=result.concat(letterAfter);
        });
    }
    final.innerHTML=`${result.join("")}`;
    key1.value = key1.value.replace(key1.value,"");
    input.value = input.value.replace(input.value,"");
});

btn2.addEventListener('click', (e) => {
    let inputArray=  Array.from(input.value);
    if(input.value != "" && key1.value !=""){
        inputArray.forEach((e) =>{
            let indexLetter=(+lettersArray.indexOf(e) - +key1.value)%26;
            while(+indexLetter>26){
                indexLetter-=26;
            }
            while(+indexLetter<0){
                indexLetter+=26;
            }
            let letterAfter= lettersArray[indexLetter];
            result=result.concat(letterAfter);
        });
    }
    final.innerHTML=`${result.join("")}`;
    key1.value = key1.value.replace(key1.value,"");
    input.value = input.value.replace(input.value,"");
});

let i=0 ;
btn3.addEventListener('click', (e) => {
    let inputArray=  Array.from(input.value);
    if(input.value != "" && key2.value !=""){
        inputArray.forEach((e) =>{
            let keyArray =  Array.from(key2.value);
            let indexLetter=(+lettersArray.indexOf(e) + +lettersArray.indexOf(keyArray[i%key2.value.length]))%26;
            while(indexLetter>26){
                indexLetter-=26;
            }
            while(+indexLetter<0){
                indexLetter+=26;
            }
            let letterAfter= lettersArray[indexLetter];
            result=result.concat(letterAfter);
            i++;
        });
    }
    final.innerHTML=`${result.join("")}`;
    key2.value = key2.value.replace(key2.value,"");
    input.value = input.value.replace(input.value,"");
});

btn4.addEventListener('click', (e) => {
    let inputArray=  Array.from(input.value);
    if(input.value != "" && key2.value !=""){
        inputArray.forEach((e) =>{
            let keyArray =  Array.from(key2.value);
            let indexLetter=(+lettersArray.indexOf(e) - +lettersArray.indexOf(keyArray[i%key2.value.length]))%26;
            while(indexLetter>26){
                indexLetter-=26;
            }
            while(+indexLetter<0){
                indexLetter+=26;
            }
            let letterAfter= lettersArray[indexLetter];
            result=result.concat(letterAfter);
            i++;
        });
    }
    final.innerHTML=`${result.join("")}`;
    key2.value = key2.value.replace(key2.value,"");
    input.value = input.value.replace(input.value,"");
});

btn5.addEventListener('click', (e) => {
    let inputArray=  Array.from(input.value);
    if(input.value != "" && key3.value !="" && key4.value !=""){
        let a=key3.value;
        let b=key4.value;
        let gcd=a;
        let zero=26%a;
        
        while(zero!=0){
            let gcdOld=gcd;
            gcd=zero;
            zero=gcdOld%zero;
        }
        if(gcd==1){
            inputArray.forEach((e) =>{
                let indexLetter=((+a * +lettersArray.indexOf(e)) + +b)%26;
                while(indexLetter>26){
                    indexLetter-=26;
                }
                while(+indexLetter<0){
                    indexLetter+=26;
                }
                let letterAfter= lettersArray[indexLetter];
                result=result.concat(letterAfter);
            });
        }
    final.innerHTML=`${result.join("")}`;
    key3.value = key3.value.replace(key3.value,"");
    key4.value = key4.value.replace(key4.value,"");
    input.value = input.value.replace(input.value,"");
    if(gcd!=1){
        final.innerHTML="gcd not equal 1 try again";
    }
    }
});

btn6.addEventListener('click', (e) => {
    let inputArray=  Array.from(input.value);
    if(input.value !="" && key3.value !="" && key4.value !=""){
        let a=key3.value;
        let b=key4.value;
        let gcd=a;
        let zero=26%a;
        
        while(zero!=0){
            let gcdOld=gcd;
            gcd=zero;
            zero=gcdOld%zero;
        }

        if(gcd==1){
            inputArray.forEach((e) =>{
                let indexLetter=(modInverse(a,26) * (+lettersArray.indexOf(e) - +b))%26;
                while(indexLetter>26){
                    indexLetter-=26;
                }
                while(+indexLetter<0){
                    indexLetter+=26;
                }
                let letterAfter= lettersArray[indexLetter];
                result=result.concat(letterAfter);
            });
        }
    final.innerHTML=`${result.join("")}`;
    key3.value = key3.value.replace(key3.value,"");
    key4.value = key4.value.replace(key4.value,"");
    input.value = input.value.replace(input.value,"");
    if(gcd!=1){
        final.innerHTML="gcd not equal 1 try again";
    }
    }
});

function modInverse(a, m) {
    // validate inputs
    [a, m] = [Number(a), Number(m)]
    if (Number.isNaN(a) || Number.isNaN(m)) {
      return NaN // invalid input
    }
    a = (a % m + m) % m
    if (!a || m < 2) {
      return NaN // invalid input
    }
    // find the gcd
    const s = []
    let b = m
    while(b) {
        [a, b] = [b, a % b]
        s.push({a, b})
    }
    if (a !== 1) {
      return NaN // inverse does not exists
    }
    // find the inverse
    let x = 1
    let y = 0
    for(let i = s.length - 2; i >= 0; --i) {
      [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
    }
    return (y % m + m) % m
}
