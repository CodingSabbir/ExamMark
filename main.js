const input1=document.querySelector('#bangla');
const input2=document.querySelector('#english');

input1.addEventListener('input',()=>{
 const bangla= input1.value
//  console.log(bangla)
if(bangla || bangla<0){
    input1.style.background='red'
}else{
    input1.style.background='none'
}
});


input2.addEventListener('input',()=>{
    const english= input2.value
   //  console.log(english)
   if(english || english<0){
       input2.style.background='red'
   }else{
       input2.style.background='none'
   }
   });