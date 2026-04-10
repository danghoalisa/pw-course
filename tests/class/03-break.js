

const arr=[33,15,29,10,21,100,291];
for (let i=0;i<arr.length;i++){
    const item = arr[i];
//In ra phan tu le dau tien
    if(item%2==!0){
        console.log(item);
        break;
    }
}