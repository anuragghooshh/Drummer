const drums = document.querySelectorAll(".drums");
const audios = [
    new Audio('./Resources/Plate.mp3'),
    new Audio('./Resources/Drum1.mp3'),
    new Audio('./Resources/Drum2.mp3'),
    new Audio('./Resources/Drum3.mp3'),
    new Audio('./Resources/Plate2.mp3'),
    new Audio('./Resources/Pedal.mp3'),
    new Audio('./Resources/Snare2.mp3'),
    new Audio('./Resources/bongo.mp3'),
    new Audio('./Resources/Cymbal1.mp3'),
    new Audio('./Resources/drumStick.mp3'),
];
const keys = [0,1,2,3,4,5,6,7,8,9];

for(let i=0;i<10;i++){
    drums[i].addEventListener("click",()=>{
        const newAudio = audios[i].cloneNode();
        newAudio.play();
    })
    drums[i].setAttribute('draggable',false);
}
document.addEventListener("keydown",e=>{
    for(let j=0;j<10;j++){
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