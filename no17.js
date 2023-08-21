const rl=readline.createlnterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
});

rl.question("masukan angka anda:",(a) =>{
    let angka1 =parseInt(a);
    let x=5
    if(angka1 === x){
        console.log('angka ${a} sama dengan ${x}');
    }else{
        console.log('angka ${a}tidak sama dengan ${x}');
    }
    rl.console();
})