const rl=readline.createlnterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
});

let nilai =0;
let total =0;
rl.question("masukan angka anda:", (a) =>{
    nilai =number(a);
    total *=nilai;
    console.log('total:${total');
})