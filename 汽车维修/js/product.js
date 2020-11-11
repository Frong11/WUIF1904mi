window.onload=function(){
//返回顶部
let stick=document.querySelector(".stick")
let top=document.querySelector(".top")
let timer=null                  // 定义一个空的时间变量
stick.onclick=()=>{             //鼠标点击时
    clearInterval(timer)        // 清除时间函数
    timer=setInterval(()=>{     // 添加时间函数
        let gundong=document.documentElement.scrollTop     // 吧鼠标滚动的距离赋给新的变量    
        let gundonghou=Math.floor((0-gundong)/10)      //算出滚动的距离到顶部的距离
        gundong+=gundonghou;    //跳转指定位置
        scrollTo(0,gundong)      //0代表x轴，y轴移动到scroll的指定位置
        if(gundong==0){     //判断当鼠标滑动到0点然后清除时间函数
            clearInterval(timer)
        }
    },20)
}
window.onwheel=()=>{      //解除滚轮限制
    clearInterval(timer)
}
window.onscroll=()=>{
    if(window.scrollY>500){
        stick.style.display="block"
    }else{
        stick.style.display="none"
    }
    if(window.scrollY>200){
        top.style.cssText="height:0;overflow:hidden;"
    }
    if(window.scrollY>500){
        top.style.cssText="position:fixed;height:89px;left:0;top:0;"
    }else{
        top.style.cssText="position:static;height:89px;"
    }
}
//选项卡
let navaa=document.querySelectorAll(".navaa span")
let bigcontent=document.querySelectorAll(".bigcontent .content")
bigcontent[0].style.display="block"
navaa[0].style.cssText="border-bottom: 1px double #ff7000;"
navaa.forEach((v,i)=>{          // 拿到导航的每个元素
    v.onclick=()=>{             // 添加点击事件
        navaa.forEach((v)=>{    // 清除导航栏的默认样式
            v.style.border=0;
        })
        bigcontent.forEach((v)=>{       //拿到内容的所有元素
            v.style.display="none"      // 清除内容的样式
        })  
        bigcontent[i].style.display="block";        //添加内容的样式
        navaa[i].style.cssText="border-bottom: 1px double #ff7000;";  //添加导航的样式
    }
})















}