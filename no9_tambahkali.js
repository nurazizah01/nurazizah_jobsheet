const readline =require('readline');
const rl =readline.createlnterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("masuk angka pertama:",(a) =>{
    rl.question("masuk angka kedua:", (b) =>{
        rl.question("masukan angka ketiga:", (c) =>{
            let angka1 =parselnt (a);
            let angka2 =parselnt (b);
            let angka3 =parselnt (c);
            const hasil =(angka1 + angka2);
            const hasil1 =(angka1 * angka3);
            console.log('hasil dari sistem operasi tersebut adalah: ${hasil1}')
            
        });
    })
});