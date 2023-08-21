const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("masuk angka anda:",(a =>){
    let angka1 =parseInt(a);
    let x=7
    if(angka1 =x){
        console.log('angka ${a} tidak sama dengan ${x}');
    }else{
        console.log('angka ${a} sama dengan ${x}');
    }
    rl.close();
})