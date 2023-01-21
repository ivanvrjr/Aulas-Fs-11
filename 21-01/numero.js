/*const idade=prompt("Qual sua idade?")
if(idade >= 18){
    alert("Você é de maior")
}
else{
    alert("você é de menor")
}
*/
/*
const idade=prompt ("Me diga sua idade")
if(idade >= 18){
    alert("você é maior de idade")
}
else if(idade >=14){
    alert("você é adolescente")
}
else{
    alert ("você é criança")
}
*/
const altura=prompt ("Me diga sua altura")
const peso=prompt ("Me diga o seu peso")
var IMC = peso/altura**2
if(IMC < 18.5){
    alert("você é classificado como magro, valor= " + IMC)
}
else if(IMC <= 24.9){
    alert("você é classificado como normal, valor=" +  IMC)
}
else if(IMC <= 29.9){
    alert("você é classificado com sobrepeso, valor=" +  IMC)
}
else if(IMC <= 39.9){
    alert("você é classificado com obesidade, valor=" +  IMC)
}
else{
    alert("você é classificado com obesidade grave, valor=" +  IMC)
}
