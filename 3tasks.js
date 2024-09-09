//.......TASK1........
var name1 = 'hello'
var name2 = 'world'
console.log(`\n"${name1} ${name2}"`)

//........TASK2........
var stuDetails={
    "Name":"sudha",
    "Age":"20",
    "Grade":"A"
};
console.log(`
name: ${stuDetails.Name}
Age: ${stuDetails.Age}
Grade: ${stuDetails.Grade}`)

//........TASK3........
var name = "missamma"
var letter="m"
count=0
for(i=0;i<=name.length-1;i++){
    if(letter==name[i]){
       count=count+1 
    }
}
console.log("  ")
console.log(count)

