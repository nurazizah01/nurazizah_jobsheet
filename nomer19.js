const rl=readline.createlnterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
});

let angka1 =10;
let angka2 =20;
rl.question("masukan angka anda:",(a) =>{
    const angka =number(a);
    let hasil =angka>angka1 && angka <angka2;
    console.log('apakah anka tersebut lebih besar dari 10 dan lebih kecil dari 20: ${hasil}s')
    rl.console()
});