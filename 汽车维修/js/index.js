window.onload=function(){
    let nav=document.querySelectorAll(".nav a span")
    let lun=document.querySelectorAll(".center>img")
    let dot=document.querySelectorAll(".dot1")
    let left=document.querySelector(".banner-left")
    let right=document.querySelector(".banner-right")
    let banner=document.querySelector(".banner")
    lun[0].style.left=0;    // 显示轮播的第一张图片
    nav[0].style.color="#ff7000";   //显示导航的第一个颜色
    dot[0].style.backgroundColor="#ff7000";  //显示轮播点的第一个颜色
    let index=0;  //定义当前显示图片
    let next=0;    //定义之后的显示图片
    let flex=true;     //开关
   let int= setInterval(()=>{        
        lunbo()
    },2000)
    right.onclick=()=>{
        if(!flex){
            return
        }
        flex=false
        lunbo()
    }
    left.onclick=()=>{
        if(!flex){
            return
        }
        flex=false
        next--
        if(next<0){
            next=lun.length-1
        }        
        lun[index].style.left=0;       //当前的图片回到0的位置
        lun[next].style.left="1400px";    //下一张的图片到当前图片之后
        animate(lun[index],{left:-1400})     //d当前的图片移动到左边
        animate(lun[next],{left:0},()=>{
            dot.forEach((v)=>{             // 遍历出每一个轮播点
             v.style.backgroundColor="#fff"          //清除轮播点的样式
            })
            dot[next].style.backgroundColor="#ff7000" 
            flex=true
        })     //下一张图片移动到当前位置
       
          //添加轮播点的样式
        index=next                              //让后边的跟着前边的动
    }
    banner.onmouseover=()=>{
        clearInterval(int)
    }
    banner.onmouseout=()=>{
        int= setInterval(()=>{        
            lunbo()
        },2000)
    }
    dot.forEach((v,i)=>{
        v.onclick=()=>{
            next=i                  //轮播的下标跟着图片动
            if(i>index){            //当轮播点的下标大于当前显示的图片的时候
                lun[index].style.left=0;
                lun[next].style.left="1400px";
                animate(lun[index],{left:-1400})     //d当前的图片移动到左边
                animate(lun[next],{left:0},()=>{
                    dot.forEach((v)=>{             // 遍历出每一个轮播点
                     v.style.backgroundColor="#fff"          //清除轮播点的样式
                    })
                    dot[next].style.backgroundColor="#ff7000" 
                    // flex=true
                })     //下一张图片移动到当前位置
               
                  //添加轮播点的样式
                index=next                              //让后边的跟着前边的动
            }if(i<index){
                lun[index].style.left=0;
                lun[next].style.left="-1400px";
                animate(lun[index],{left:-1400})     //d当前的图片移动到左边
                animate(lun[next],{left:0},()=>{
                    dot.forEach((v)=>{             // 遍历出每一个轮播点
                     v.style.backgroundColor="#fff"          //清除轮播点的样式
                    })
                    dot[next].style.backgroundColor="#ff7000" 
                    // flex=true
                })     //下一张图片移动到当前位置
               
                  //添加轮播点的样式
                index=next                              //让后边的跟着前边的动
            }
        }
    })
    function lunbo(){
        next++        //每次后边的图片循环
        if(next>lun.length-1){
            next=0
        }             //当之后的图片大于下标的图片让他的下标变为0
        lun[index].style.left=0;       //当前的图片回到0的位置
        lun[next].style.left="1400px";    //下一张的图片到当前图片之后
        animate(lun[index],{left:-1400})     //d当前的图片移动到左边
        animate(lun[next],{left:0},()=>{
            dot.forEach((v)=>{             // 遍历出每一个轮播点
             v.style.backgroundColor="#fff"          //清除轮播点的样式
            })
            dot[next].style.backgroundColor="#ff7000" 
            flex=true
        })     //下一张图片移动到当前位置
       
          //添加轮播点的样式
        index=next                              //让后边的跟着前边的动
    }


//返回顶部

// let stick=document.querySelector(".stick")
// let top=document.querySelector(".top")

// let timer=null                  // 定义一个空的时间变量
// stick.onclick=()=>{             //鼠标点击时
//     clearInterval(timer)        // 清除时间函数
//     timer=setInterval(()=>{     // 添加时间函数
//         let gundong=document.documentElement.scrollTop     // 吧鼠标滚动的距离赋给新的变量    
//         let gundonghou=Math.floor((0-gundong)/10)      //算出滚动的距离到顶部的距离
//         gundong+=gundonghou;    //跳转指定位置
//         scrollTo(0,gundong)      //0代表x轴，y轴移动到scroll的指定位置
//         if(gundong==0){     //判断当鼠标滑动到0点然后清除时间函数
//             clearInterval(timer)
//         }
//     },20)
// }
// window.onwheel=()=>{      //解除滚轮限制
//     clearInterval(timer)
//     if(window.scrollY>200){
//         top.style.cssText="height:0;overflow:block;"
//     }
//     if(window.scrollY>500){
//         top.style.cssText="height:89px;"
//     }
// }

}