let angka = [1,2,3,4,5];
angka.reverse();
console.log(angka);

let angka2 = [1,2,3,4,5];
let hasilBalik = [];
let arrayKosong = 0;
for(let i = angka2.length - 1; i >= 0;i--) {
    let array = angka2[i];
    hasilBalik[arrayKosong] = array;
     arrayKosong++;
};
console.log(hasilBalik);