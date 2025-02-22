// what is Asynchronnous Progrmming?
//let's understand with example
console.log('Before');

setTimeout(() => {
    console.log('Inside the callback');
}, 2000);

console.log('After');


//  yha pe inside call back print hone me 2 s lag rha hai iska matlb ye hua ki 
// ek task ko complete hone ka wait na karke turnat dusre taks ko complete krna
//   aur jb phla task ka time ho jayega to self task complete ho jayega