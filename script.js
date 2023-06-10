
const date = new Date();
document.getElementById('usa').innerText= date.toLocaleString('en-US', {timeZone:'America/Los_angeles'} ).split(',')[1] ;
document.getElementById('ind').innerText= date.toLocaleString('en-US', {timeZone:'Asia/Kolkata'} ).split(',')[1] ;
document.getElementById('can').innerText= date.toLocaleString('en-US', {timeZone:'Canada/Atlantic'} ).split(',')[1] ;

const updateTime = () =>{
  const date = new Date();
  document.getElementById('usa').innerText= date.toLocaleString('en-US', {timeZone:'America/Los_angeles'} ).split(',')[1] ;
  document.getElementById('ind').innerText= date.toLocaleString('en-US', {timeZone:'Asia/Kolkata'} ).split(',')[1] ;
  document.getElementById('can').innerText= date.toLocaleString('en-US', {timeZone:'Canada/Atlantic'} ).split(',')[1] ; 
}
setInterval(updateTime,1000)
