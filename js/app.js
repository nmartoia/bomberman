const block=document.querySelectorAll('.y')
const block1=document.querySelector('.spawn')
let axeX=0
let axeY=0
let axeX1=8
let axeY1=4
const btn=document.querySelector('button')
const spawn1=document.querySelector('#spawn1')
const spawn2=document.querySelector('#spawn2')
const perso=document.createElement('img')
perso.src='img/perso1.png'
perso.alt='perso1'
perso.className='perso1'
const perso2=document.createElement('img')
perso2.src='img/perso2.png'
perso2.alt='perso2'
perso2.className='perso2'
spawn1.appendChild(perso)
spawn2.appendChild(perso2)
console.log(block[axeY+1].children[axeX].classList.contains('vide'))
window.addEventListener('keydown',(e)=>{
    if(e.code=='KeyS'){
        if(axeY<block.length-1&&block[axeY+1].children[axeX].firstChild==null&&block[axeY+1].children[axeX].classList.contains('vide')){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyW'){
        if(axeY>0&&block[axeY-1].children[axeX].firstChild==null&&block[axeY-1].children[axeX].classList.contains('vide')){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyA'){
        if(axeX>0&&block[axeY].children[axeX-1].firstChild==null&&block[axeY].children[axeX-1].classList.contains('vide')){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyD'){
        if(axeX<block[axeY].children.length-1&&block[axeY].children[axeX+1].firstChild==null&&block[axeY].children[axeX+1].classList.contains('vide')){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='ArrowDown'){
        if(axeY1<block.length-1&&block[axeY1+1].children[axeX1].firstChild==null&&block[axeY1+1].children[axeX1].classList.contains('vide')){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }    
    }
    else if(e.code=='ArrowUp'){
        if(axeY1>0&&block[axeY1-1].children[axeX1].firstChild==null&&block[axeY1-1].children[axeX1].classList.contains('vide')){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }   
    else if(e.code=='ArrowLeft'){
        if(axeX1>0&&block[axeY1].children[axeX1-1].firstChild==null&&block[axeY1].children[axeX1-1].classList.contains('vide')){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
    else if(e.code=='ArrowRight'){
        if(axeX1<block[axeY1].children.length-1&&block[axeY1].children[axeX1+1].firstChild==null&&block[axeY1].children[axeX1+1].classList.contains('vide')){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
    else if(e.code=='Space'){
        bombe(perso)
    }
    else if(e.code=='Numpad0'){
        bombe(perso2)
    }
})
function bombe(persob){
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
    console.log(axeBY,axeBX)
    block[axeBY].children[axeBX].appendChild(bombe)
    setTimeout(function(){
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
            perso2.remove()
            alert('joueur1 a gagner')
        }
        if(axeBY>0&&block[axeBY-1].children[axeBX].firstChild==perso2){
            perso2.remove()
            alert('joueur1 a gagner')
        }
        if(axeBX>0&&block[axeBY].children[axeBX-1].firstChild==perso2){
            perso2.remove()
            alert('joueur1 a gagner')
        }
        if(axeBX<block[axeBY].children.length-1&&block[axeBY].children[axeBX+1].firstChild==perso2){
            perso2.remove()
            alert('joueur1 a gagner')
        }
        if(axeBY<block.length-1&&block[axeBY+1].children[axeBX].firstChild==perso){
            perso.remove()
            alert('joueur2 a gagner')
        }
        if(axeBY>0&&block[axeBY-1].children[axeBX].firstChild==perso){
            perso.remove()
            alert('joueur2 a gagner')
        }
        if(axeBX>0&&block[axeBY].children[axeBX-1].firstChild==perso){
            perso.remove()
            alert('joueur2 a gagner')
        }
        if(block[axeBY].children[axeBX].firstChild==perso2){
            perso2.remove()
            alert('joueur1 a gagner')
            btn.style.display='block'
        }
        if(block[axeBY].children[axeBX].firstChild==perso){
            perso.remove()
            alert('joueur2 a gagner')
            btn.style.display='block'
        }
        bombe.remove()
    },1000)
}
btn.addEventListener('click',()=>{
    location.reload()
})