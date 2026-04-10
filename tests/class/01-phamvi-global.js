function myFunction() {

    var functionScoped = "Chỉ có thể truy cập trong hàm này";

    let alsoFunctionScoped = "Tương tự";

 

    console.log(functionScoped); // OK

}

 

// console.log(functionScoped); // Error: functionScoped is not defined

console.log(alsoFunctionScoped); // Error: functionScoped is not defined