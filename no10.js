const readline =require('readline');
const rl =readline.createlnterface({
    input:process.stdin,
    output:process.stdout
});

let nilai =0;
rl.question("masuk angka:", (a) =>{
    nilai =number (a);
    console.log({
        nilaiAnda:nilai
    })
    rl.close();
})