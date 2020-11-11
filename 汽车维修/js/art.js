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

window.onscroll=()=>{
    if(window.scrollY>200){
        stick.style.display="block"
    }else{
        stick.style.display="none"
    }
    if(window.scrollY>300){
        top.style.cssText="position:fixed;left:0;top:0;"
    }else{
        top.style.cssText="position:static;height:89px;"
    }
}
window.onwheel=()=>{      //解除滚轮限制
    clearInterval(timer)
}

// 轮播
let lun=document.querySelectorAll(".gasoline-left-photo>img")
let left=document.querySelector(".lefta")
let right=document.querySelector(".righta")
let dot=document.querySelectorAll(".dot .dot1")
lun[0].style.left=0    // 显示第一个图片
dot[0].style.cssText="background:rgba(0,0,0,0.9)"    // 显示第一个轮播点
let index=0;    //定义当前显示的图片
let next=0;     //定义之后的图片
let flex=true   //开关
left.onclick=()=>{      //鼠标点击左键时
    if(!flex){      //判断执行是否完成
        return
    }
    flex=false
    next--      //从右往左每次都减少一个
    if(next<0){          ///判断如果后一张小于0的话回到当前的位置
        next=lun.length-1;
    }
        lun[index].style.left=0;        //显示当前的图片
        lun[next].style.left="-301px;";  //下一张图片进入当前图片之后
        animate(lun[index],{left:301}) //将当前的图片移动到左边    
        animate(lun[next],{left:0},()=>{      // 之后的图片显示到当前要显示的位置
            flex=true
            dot.forEach((v,i)=>{               //遍历出每个轮播点要显示的位置
                v.style.cssText="background:rgba(0,0,0,0.3)"      //清除轮播点样式
            }) 
            dot[next].style.cssText="background:rgba(0,0,0,0.9)"   // 添加轮播点样式
        })
        index=next       //后边的图片跟着前面的变化
}
right.onclick=()=>{
    if(!flex){
        return
    }
    flex=false
    next++
    if(next>lun.length-1){
        next=0
    }
        lun[index].style.left=0;
        lun[next].style.left="301px;";
        animate(lun[index],{left:-301})
        animate(lun[next],{left:0},()=>{
            flex=true
            dot.forEach((v,i)=>{
                v.style.cssText="background:rgba(0,0,0,0.3)"
            })
            dot[next].style.cssText="background:rgba(0,0,0,0.9)"
        })
        index=next
}
dot.forEach((v,i)=>{
    v.onclick=()=>{
        next=i
        if(i>index){
        lun[index].style.left=0;
        lun[next].style.left="301px;";
        animate(lun[index],{left:-301})
        animate(lun[next],{left:0},()=>{
            flex=true
            dot.forEach((v,i)=>{
                v.style.cssText="background:rgba(0,0,0,0.3)"
            })
            dot[next].style.cssText="background:rgba(0,0,0,0.9)"
        })
        index=next 
        }else{
            lun[index].style.left=0;        //显示当前的图片
        lun[next].style.left="-301px;";  //下一张图片进入当前图片之后
        animate(lun[index],{left:301}) //将当前的图片移动到左边    
        animate(lun[next],{left:0},()=>{      // 之后的图片显示到当前要显示的位置
            flex=true
            dot.forEach((v,i)=>{               //遍历出每个轮播点要显示的位置
                v.style.cssText="background:rgba(0,0,0,0.3)"      //清除轮播点样式
            }) 
            dot[next].style.cssText="background:rgba(0,0,0,0.9)"   // 添加轮播点样式
        })
        index=next       //后边的图片跟着前面的变化 
        }
    }
})












}