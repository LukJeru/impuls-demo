const sound_btn = document.getElementById("sound-btn");
const capy_sound = document.getElementById("capy-sound");

sound_btn.addEventListener("click", function(event)  {
  console.log("HEllo");
  capy_sound.play();
})
