const block=document.querySelectorAll('.y')
const block1=document.querySelector('.spawn')
let axeX=0
let axeY=0
let axeX1=8
let axeY1=4
const perso=document.createElement('img')
perso.src='img/perso1.png'
perso.alt='perso1'
const perso2=document.createElement('img')
perso2.src='img/perso2.png'
perso2.alt='perso2'
perso2.id='perso2'
window.addEventListener('keydown',(e)=>{
    if(e.code=='KeyS'){
        if(axeY<4){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyW'){
        if(axeY>0){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyA'){
        if(axeX>0){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyD'){
        if(axeX<8){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='ArrowDown'){
        if(axeY1<4){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }    
    }
    else if(e.code=='ArrowUp'){
        if(axeY1>0){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }   
    else if(e.code=='ArrowLeft'){
        if(axeX1>0){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
    else if(e.code=='ArrowRight'){
        if(axeX1<8){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
})