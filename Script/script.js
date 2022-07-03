const drums = document.querySelectorAll(".drums");
const audios = [
    new Audio('./Resources/Drumbasssinglekick.mp3'),
    new Audio('./Resources/Snare2.mp3'),
    new Audio('./Resources/bongo.mp3'),
    new Audio('./Resources/Cymbal1.mp3'),
    new Audio('./Resources/drumStick.mp3')
];
const keys = [1,2,3,4,5];

for(let i=0;i<5;i++){
    drums[i].addEventListener("click",()=>{
        const newAudio = audios[i].cloneNode();
        newAudio.play();
    })
}
document.addEventListener("keydown",e=>{
    for(let j=0;j<5;j++){
        if(e.key == keys[j]){
            const newAudio = audios[j].cloneNode();
            newAudio.play();
            drums[j].classList.add("active");
            setTimeout(function() {
                drums[j].classList.remove("active");
              }, 200);
        }
    }
})