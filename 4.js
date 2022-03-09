let bdays = ['10-17', '05-19', '20-19'];

//4.Ubahlah tanda (-) pada elemen array diatas menjadi (/)!

//Jawab: 

const map1 = bdays.map(x => x.replace("-","/"));
console.log(map1);