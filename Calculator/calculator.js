
let newindicator = 0
let screen = document.querySelector('#screen')
let divide =document.querySelector('#divide')
let multiply =document.querySelector('#multiply')
let btn = document.querySelector('#button')
let sum = document.querySelector('#sum')
let min = document.querySelector('#min')
const btns = Array.from(document.querySelectorAll('.button'))
btns.forEach(item =>{item.addEventListener('click',shownum)})
let equal = document.querySelector('#equal')
let value = 0
let indicator = ''
let reset = document.querySelector('#reset')
multiply.addEventListener('click',showMultiply)
equal.addEventListener('click',calculate)
sum.addEventListener('click',showSum)
reset.addEventListener('click',toZero)
min.addEventListener('click',showMin)
divide.addEventListener('click',showDivide)

function collect(){
    if(isNaN(Number(screen.innerText))){
return value
    }
    else {let collect = Number(screen.innerText)
    return collect}
}
function Divide(){
    if (collect() === 0)
    {value = 0}
    else 
    {value /= collect()}
}
function Multiply(){
    if (collect() === 0)
    {value = 0}
    else 
    {value *= collect()}
}


function shownum(event){
    if(screen.innerText=='+' || screen.innerText=='-'||screen.innerText=='0' || screen.innerText=='*' || (indicator ==='' && newindicator ===1 ) || screen.innerText=='/' )
    {screen.innerText=event.target.value 
    newindicator = 0}
   else
   (screen.innerText += event.target.value)
}
 
screen.innerText=value
function showDivide(){
    if (screen.innerText==='+' || screen.innerText==='-' || screen.innerText==='*'){
        screen.innerText = divide.innerText
    }
    else if (indicator==='+')
    {value += collect()}
    else if (indicator==='*'){
        Multiply()}
    else if (indicator==='-')
    {value -= collect()}
    
    else if(screen.innerText==='/'){
        return 
    }
    else if(indicator === '' &&  value === 0 )
    {value += collect()}
    else {
        Divide()}
    screen.innerText = divide.innerText
    indicator = '/'
}
function showMultiply(){
    if (screen.innerText==='+' || screen.innerText==='-' || screen.innerText==='/'){
        screen.innerText = multiply.innerText
    }
     else if (
        indicator==='/'){
            Divide()}
    else if (indicator==='+')
    {value += collect()}
    else if (indicator==='-')
    {value -= collect()}
    
    else if(screen.innerText==='*'){
        return 
    }
    else if(indicator === '' &&  value === 0 )
    {value += collect()}
    else {
        Multiply()}
    screen.innerText = multiply.innerText
    indicator = '*'
}
function showSum (){
     if (screen.innerText==='*' || screen.innerText==='-' || screen.innerText==='/'){
        screen.innerText = sum.innerText
    }
    else if (
        indicator==='/'){
            Divide()}
    else if (
        indicator==='*'){
            Multiply()}
        
    else if (indicator==='-')
    {value -= collect()}
    
    else if(screen.innerText==='+'){
        return
    }
    
    else{value += collect()}
    indicator = '+'
    
    screen.innerText = sum.innerText
 }

 function showMin (){
     if (screen.innerText==='+' || screen.innerText==='*' || screen.innerText==='/'){
        screen.innerText = min.innerText
    }
     else if (
        indicator==='/'){
            Divide()}
    else if (
        indicator==='*'){
            Multiply()}
    else if (indicator==='+')
    {value += collect()}
   
    else if(screen.innerText==='-'){
        return 
    }
    else if(indicator === '' &&  value === 0 )
    {value += collect()}
    else {value -= collect()}
    screen.innerText = min.innerText
    indicator = '-'
}





function calculate (){
     if(screen.innerText==='+' || screen.innerText==='-' || screen.innerText==='*' || screen.innerText==='/'){
        return 
    }
   else if (indicator==='+'){ 
        value += collect()
        indicator= ''
        screen.innerText = value
        value = 0
        }
    else if (
        indicator==='-'){
        value -= collect()
        indicator= ''
        screen.innerText = value
    value = 0
    }
    else if (
        indicator==='*'){
            Multiply()
        indicator= ''
        screen.innerText = value
    value = 0
    }
    else if (
        indicator==='/'){
            Divide()
        indicator= ''
        screen.innerText = value.toFixed(2)
    value = 0
    }
    else{return}
    newindicator =1

}
   

function toZero (){
    indicator=0
    value = 0
    screen.innerText=value
    indicator= ''
}