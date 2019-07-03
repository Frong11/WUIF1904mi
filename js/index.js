window.onload = function () {
    let shang = document.querySelectorAll(".dzi>.s1")
    console.log(shang);

    let xia = document.querySelectorAll(".tz>.tz1")
    xia[0].style.display = "none";
    console.log(xia)


    shang.forEach((a, b) => {
        
        shang[b].onmouseover = function () {
            xia.forEach((a) => {
              a.style.display = "none"
              
            })
            xia[b].style.display = "block";  
        }
         shang[b].onmouseout =function(){
            xia[b].style.display = "none"; 
         }
    })


    let ss = document.querySelectorAll(".lunbo2>a")
    console.log(ss);

    let xx = document.querySelectorAll(".tc>.tc1")
    xx[0].style.display = "none";
    console.log(xx)


    ss.forEach((a, b) => {
        
        ss[b].onmouseover = function () {
            xx.forEach((a) => {
              a.style.display = "none"
            })
            xx[b].style.display = "block";  
            
        }
        ss[b].onmouseout =function(){
            xx[b].style.display = "none"; 
         }
        
    })







}


