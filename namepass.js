const readline=require('readline')
const {promisify}=require('util')

const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const question=promisify(r.question).bind(r);
async function login()
{
   const name= await question('Enter your Name:')
   const password= await question('Enter your Password:')
   if(name===password)
   {
    console.log("login succesfull...");
   }
   else
   {
    console.log("login failed...");
   }
}
login()
.then(()=>r.close())
.catch((err)=>console.error(err.message));