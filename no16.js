const rl=readline.createlnterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
});

rl.qustion("masukan angka pertama anda:",(a) =>{
    rl.qustion("masukan angka kedua anda:",(b) =>{
        let angka1 =parseInt(a);
        let angka2=parseInt(b);
        if(angka == angka2){
            console.log('angka ${a}sama besar dengan angka ${b}');
        }else{
            console.log('angka ${a}tidak sama besar dengan angka ${b}');
        }
        rl.close();
    })
})