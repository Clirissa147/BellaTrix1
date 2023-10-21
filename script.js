var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");

yesBtn.addEventListener("click", function yesBtn() {
   alert("Hell Yeah!! Lets Play");
   window.open('https://discord.gg/2M6UV3kH', '_self');
});

const confirmAction = () => {
                const response = confirm("I ASKED DO YOU WANT TO PLAY A GAME?? PRESS OK TO PLAY!!!!     IF YOU PRESS CANCEL THEN FUCK YOU");

                if (response) {
                    alert("Yayyy you picked the correct answer. Lets Play")
                    window.open('https://discord.gg/2M6UV3kH', '_self');
                } else {
                    alert("Mother Fucker")
                }
            }


