const block=document.querySelectorAll('.y')
const block1=document.querySelector('.spawn')
let axeX=0
let axeY=0
let axeX1=block[block.length-1].children.length-1
let axeY1=block.length-1
let win = false
const video = document.querySelector('video')
const btn=document.querySelector('button')
const btn2=document.querySelectorAll('button')[1]
const spawn1=document.querySelector('#spawn1')
const spawn2=document.querySelector('#spawn2')
const perso=document.createElement('img')
perso.src='img/persomove.gif'
perso.alt='perso1'
perso.className='perso1'
const perso2=document.createElement('img')
perso2.src='img/perso2move.gif'
perso2.alt='perso2'
perso2.className='perso2'
spawn1.appendChild(perso)
spawn2.appendChild(perso2)
document.body.style.zoom = "86%";
window.addEventListener('keydown',(e)=>{
    video.muted=false
    if(e.code=='KeyS'){
        if(axeY<block.length-1&&block[axeY+1].children[axeX].firstChild==null&&block[axeY+1].children[axeX].classList.contains('vide')&&win==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyW'){
        if(axeY>0&&block[axeY-1].children[axeX].firstChild==null&&block[axeY-1].children[axeX].classList.contains('vide')&&win==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyA'){
        if(axeX>0&&block[axeY].children[axeX-1].firstChild==null&&block[axeY].children[axeX-1].classList.contains('vide')&&win==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyD'){
        if(axeX<block[axeY].children.length-1&&block[axeY].children[axeX+1].firstChild==null&&block[axeY].children[axeX+1].classList.contains('vide')&&win==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='ArrowDown'){
        if(axeY1<block.length-1&&block[axeY1+1].children[axeX1].firstChild==null&&block[axeY1+1].children[axeX1].classList.contains('vide')&&win==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }    
    }
    else if(e.code=='ArrowUp'){
        if(axeY1>0&&block[axeY1-1].children[axeX1].firstChild==null&&block[axeY1-1].children[axeX1].classList.contains('vide')&&win==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }   
    else if(e.code=='ArrowLeft'){
        if(axeX1>0&&block[axeY1].children[axeX1-1].firstChild==null&&block[axeY1].children[axeX1-1].classList.contains('vide')&&win==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
    else if(e.code=='ArrowRight'){
        if(axeX1<block[axeY1].children.length-1&&block[axeY1].children[axeX1+1].firstChild==null&&block[axeY1].children[axeX1+1].classList.contains('vide')&&win==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
    else if(e.code=='KeyE'||e.code=='Space'){
        bombe(perso)
    }
    else if(e.code=='Numpad0'){
        bombe(perso2)
    }
})
function bombe(persob){
    if(win==false){
        const bombe=document.createElement('img')
        bombe.src='img/bombe.png'
        bombe.className='bombe'
        let axeBX=0
        let axeBY=0
        if(persob==perso){
            axeBX=axeX
            axeBY=axeY
        }
        else if(persob==perso2){
            axeBX=axeX1
            axeBY=axeY1
        }
        block[axeBY].children[axeBX].appendChild(bombe)
        setTimeout(function(){
            if(block[axeBY].children[axeBX].firstChild==perso2){
                joueur1win()
            }
            if(block[axeBY].children[axeBX].firstChild==perso){
                joueur2win()
            }
            if(axeBY<block.length-1&&block[axeBY+1].children[axeBX].className=='cassable'){
                block[axeBY+1].children[axeBX].className='vide'
            }
            if(axeBY>0&&block[axeBY-1].children[axeBX].className=='cassable'){
                block[axeBY-1].children[axeBX].className='vide'
            }
            if(axeBX>0&&block[axeBY].children[axeBX-1].className=='cassable'){
                block[axeBY].children[axeBX-1].className='vide'
            }
            if(axeBX<block[axeBY].children.length-1&&block[axeBY].children[axeBX+1].className=='cassable'){
                block[axeBY].children[axeBX+1].className='vide'
            }
            if(axeBY<block.length-1&&block[axeBY+1].children[axeBX].firstChild==perso2){
                joueur1win()
            }
            if(axeBY>0&&block[axeBY-1].children[axeBX].firstChild==perso2){
                joueur1win()
            }
            if(axeBX>0&&block[axeBY].children[axeBX-1].firstChild==perso2){
                joueur1win()
            }
            if(axeBX<block[axeBY].children.length-1&&block[axeBY].children[axeBX+1].firstChild==perso2){
                joueur1win()
            }
            if(axeBY<block.length-1&&block[axeBY+1].children[axeBX].firstChild==perso){
                joueur2win()
            }
            if(axeBY>0&&block[axeBY-1].children[axeBX].firstChild==perso){
                joueur2win()
            }
            if(axeBX>0&&block[axeBY].children[axeBX-1].firstChild==perso){
                joueur2win()
            }
            if(axeBX<block[axeBY].children.length-1&&block[axeBY].children[axeBX+1].firstChild==perso){
                joueur2win()
            }
            bombe.remove() 
    
        },1000)
    }
}
function joueur1win(){
    if(win==false){
        perso2.src='img/deathmove.gif'
        perso2.classList.remove('perso2')
        alert('joueur1 a gagner')
        btn.style.display='block'
        btn2.style.display='block'
        win=true
    }
}
function joueur2win(){
    if(win==false){
        perso.src='img/deathmove.gif'
        alert('joueur2 a gagner')
        btn.style.display='block'
        btn2.style.display='block'
        win=true
    }
}
btn.addEventListener('click',()=>{
    location.reload()
})