var r = document.querySelector(':root');

function getBrowserSize(){
    var w, h;

      if(typeof window.innerWidth != 'undefined')
      {
       w = window.innerWidth; //other browsers
       h = window.innerHeight;
      } 
      else if(typeof document.documentElement != 'undefined' && typeof      document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
      {
       w =  document.documentElement.clientWidth; //IE
       h = document.documentElement.clientHeight;
      }
      else{
       w = document.body.clientWidth; //IE
       h = document.body.clientHeight;
      }
    return {'width':w, 'height': h};
}

function setProportions(){
    if(parseInt(getBrowserSize().width) > getBrowserSize().height){
        r.style.setProperty('--increase', '40');
        r.style.setProperty('--articlepad', '20%');
        r.style.setProperty("--linksize", "20px")
    }
    else{
        r.style.setProperty('--increase', '30');
        r.style.setProperty('--articlepad', '0%');
        r.style.setProperty("--linksize", "28px")	
    }
    setTimeout(setProportions, 1000);
}
setProportions();