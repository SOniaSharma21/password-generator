const passwordBox=document.getElementById('password');
const generateBtn=document.getElementById('btn');

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcderfghijklmnopqrstuvwxyz";
const number="1234567890";

const allchars=upperCase+lowerCase+number;

function createPassword(){
    let password="";
    for(let i=0;i<10;i++){
        password+=allchars[Math.floor(Math.random()*allchars.length)]}
        return password;
   

}
generateBtn.addEventListener('click',()=>
{passwordBox.value=createPassword();
});



