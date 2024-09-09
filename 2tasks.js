//......TASK4......
var car={
  "make":"Toyota",
  "model":"corolla",
  "year":2020,
  "color":"blue"
}
for(var data in car){
    console.log(`${data} : ${car[data]}`)
}

//......TASK5.....
var strName="abcdef"
result=''
for(i=strName.length-1;i>=0;i--){
    result+=strName[i]
}
console.log("")
console.log(result)