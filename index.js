document.getElementById("even").addEventListener("click",function()
{
const sent=document.getElementById("sent").value;
const rec=document.getElementById("received").value;
let st=0;
for(let i=0;i<sent.length;i++)
{
if(sent[i]=='1')
st++;
}
let re=0;
for(let i=0;i<rec;i++)
{
    if(rec[i]=='1')
    st++;
}
let p=0;
if(st%2==1)
p=1;
//parity bit will be 1
re=re+1;
if(re%2==1)
document.getElementById("result").textContent="There is  error ";
document.getElementById("result").textContent="There is no error ";
});
document.getElementById("odd").addEventListener("click",function()
{
const sent=document.getElementById("sent").value;
const rec=document.getElementById("received").value;
let st=0;
for(let i=0;i<sent.length;i++)
{
if(sent[i]=='1')
st++;
}
let re=0;
for(let i=0;i<rec;i++)
{
    if(rec[i]=='1')
    st++;
}
let p=0;
if(st%2==0)
p=1;
//parity bit will be 1
re=re+p;
if(re%2==0)
document.getElementById("result").textContent="There is  error ";
document.getElementById("result").textContent="There is no error ";
});