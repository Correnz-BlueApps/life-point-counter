document.querySelector('#life1pB').addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#life1text').innerHTML = Number(document.querySelector('#life1text').innerHTML) + 1;
});
document.querySelector('#life1mB').addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#life1text').innerHTML = Number(document.querySelector('#life1text').innerHTML) - 1;
});
document.querySelector('#life2pB').addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#life2text').innerHTML = Number(document.querySelector('#life2text').innerHTML) + 1;
});
document.querySelector('#life2mB').addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#life2text').innerHTML = Number(document.querySelector('#life2text').innerHTML) - 1;
});


function coinflip(){
    document.querySelector('#coin').classList.add('flip-animation');
    if(Math.random() > .5 ){
        document.querySelector('#coin').style.backgroundImage = 'url(./images/coin1.png)';
    }else{
        document.querySelector('#coin').style.backgroundImage = 'url(./images/coin2.png)';
    }

    var star = document.querySelector('#star');
    star.classList.add('shown');
    setTimeout(()=>star.classList.remove('shown'),300)
    setTimeout(()=>star.classList.add('hidden'),300)

    //reset class and enable button for next coinflip
    setTimeout(()=>document.querySelector('#coin').classList.remove('flip-animation'),2100)
    setTimeout(()=>document.querySelector('.hex2button').disabled = false,2100)
}
document.querySelector('.hex2button').addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('.hex2button').disabled = true;
    coinflip();

});
coinflip();
