document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`)

    if(audioElement){
           audioElement.currentTime = 0;
           audioElement.play()
    }

    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}

document.querySelector(' .composer button').addEventListener('click',()=>{
    document.body.removeEventListener('click')
    let song = document.querySelector('#input').value
    if(song != ''){
        let songArray = song.split('') //quando n coloca nada separa letra a letra
        playComposition(songArray)
    }
})

function playComposition (songArray){
    let wait = 0
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)
        wait += 250 //pra fazer o js aguardar o resultado
    }
}