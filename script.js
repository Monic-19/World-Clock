const updateTime = () =>{
  const date = new Date();
  document.getElementById('usa').innerText= date.toLocaleString('en-US', {timeZone:'America/Los_angeles'} ).split(',')[1] ;
  document.getElementById('ind').innerText= date.toLocaleString('en-US', {timeZone:'Asia/Kolkata'} ).split(',')[1] ;
  document.getElementById('can').innerText= date.toLocaleString('en-US', {timeZone:'Canada/Atlantic'} ).split(',')[1] ; 
}
setInterval(updateTime,1000)



function updateClocku(time){
    console.log(time);
    let htime=time.split(':')[0];
    let mtime=time.split(':')[1];
    let stime=time.split(':')[2];
  
    console.log(stime);
  
      hrotation = 30*htime + mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;
  
      Hourhandu.style.transform = `rotate(${hrotation}deg)`;
      Minhandu.style.transform = `rotate(${mrotation}deg)`;
      Sechandu.style.transform = `rotate(${srotation}deg)`;
  }
  
  function updateClocki(time){
    console.log(time);
    let htime=time.split(':')[0];
    let mtime=time.split(':')[1];
    let stime=time.split(':')[2];
  
    console.log(stime);
  
      hrotation = 30*htime + mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;
  
      Hourhandi.style.transform = `rotate(${hrotation}deg)`;
      Minhandi.style.transform = `rotate(${mrotation}deg)`;
      Sechandi.style.transform = `rotate(${srotation}deg)`;
  }
  
  function updateClockc(time){
    console.log(time);
    let htime=time.split(':')[0];
    let mtime=time.split(':')[1];
    let stime=time.split(':')[2];
  
    console.log(stime);
  
      hrotation = 30*htime + mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;
  
      Hourhandc.style.transform = `rotate(${hrotation}deg)`;
      Minhandc.style.transform = `rotate(${mrotation}deg)`;
      Sechandc.style.transform = `rotate(${srotation}deg)`;
  }
  
  
  
  
  