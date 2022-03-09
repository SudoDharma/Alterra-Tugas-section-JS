const foo = ['Budi', 'Sita', 'Ayu'];

//3.Lakukan destructuring pada kode di atas sehingga 'Budi' tersimpan di variabel bernama 'a', 'Sita' tersimpan di variabel bernama 'b', dan 'Ayu' tersimpan di variabel 'c'!

//Jawab:

const [a, b, c] = foo;
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);