const divide = (num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if(num2==0){
            reject("Division Not Possible");
        }
        else{
            resolve(num1/num2);
        }

    })
}
const testCases = [
    { num1: 10, num2: 2 },    
    { num1: 15, num2: 3 },   
    { num1: 5, num2: 0 },     
    { num1: 9, num2: 3 },     
    { num1: 100, num2: 25 }  
];
testCases.forEach((testCase)=>{
    divide(testCase.num1,testCase.num2).then(result => console.log(`Result: ${result}`)).catch(error =>console.log(error));
})