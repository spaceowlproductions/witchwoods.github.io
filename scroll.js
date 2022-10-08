var z = 0;

var scrollAmount = 0;
var pauseScroll = false;
var pickupHappaned;
var spawnHut;
var hutSpawned;

var pickupNumber = getRandomArbitrary(500,1200);
var hutNumber = getRandomArbitrary(500,1200);
console.log("hut number = " + hutNumber);

var hut;

var witchActive;
var witchDone;

var steps = [new Audio('audio/step0.mp3'),new Audio('audio/step1.mp3'),new Audio('audio/step2.mp3'),new Audio('audio/step3.mp3')];
var stepNum = 0;
var stepTime = 0;

var muted = true;

var started = false;
var knockCount = 0;

class WitchPhase
{
    state = {ID, AltName,};
}
class ScrollObject
{
    constructor(index, scale, opacity, blurValue, fade)
    {
        this.index = index;
        this.scale = scale;
        this.opacity = opacity;
        this.blurValue = blurValue;
        this.fade = fade;

        this.resetScale = 300;
    }

    Scroll()
    {
        const image = document.getElementById("trees" + this.index);
        const posElement =  document.getElementById("center" + this.index);

        stepTime++;
        if(stepTime > 200)
        {
            steps[stepNum].volume = getRandomArbitrary(.3, .5);
            steps[stepNum].play();
            stepNum++;
            if(stepNum > 3)
                stepNum = 0;
            stepTime = 0;
        }
        //console.log("Hey from " + this.index + " with " + this.scale, this.opacity, this.blurValue, this.fade, this.resetScale);
        if(this.scale > 0)
        {
            this.scale -= .7;
            this.opacity += .005;

            posElement.style.padding = this.scale + "px";
            image.style.filter = "brightness(" + this.opacity + ")";

            if(this.scale < 100 && image.getAttribute("src") == "art/hut.png")
            {
                pauseScroll = true;
                console.log("at hut");
            }
    
            if(this.scale < 50)
            {
                this.blurValue += .6;
                this.fade -= .5;
                image.style.filter = "brightness(" + this.fade + ")";
                image.style.filter = "blur(" + this.blurValue + "px)";

            }
        }
        else
        {
            this.scale = this.resetScale;
            this.opacity = 0;

            this.blurValue = 0;
            this.fade = 1;

            posElement.style.padding = this.resetScale + "px";

            image.style.filter = "blur(" + this.blurValue + "px)";

            image.style.filter = "brightness(" + this.opacity + ")";

            var randNum = Math.floor(Math.random() * 75);

            var coinFlip = Math.floor(Math.random() * 2);
            if(coinFlip == 1) {randNum = randNum * -1};

            image.style.transform = "translate(" + randNum + "px)";

            z = z - 1;
            posElement.style.zIndex = z;
            image.style.zIndex = z;

            if(spawnHut)
            {
                image.src="art/hut.png";
                image.style.transform = "translate(" + -randNum + "px)";
                hutSpawned = true;
                hut = image;   
            }


        }
    }
}

const trees1 = new ScrollObject(0, 300, 0, 0, 1);
const trees2 = new ScrollObject(1, 200, 0, 0, 1);
const trees3 = new ScrollObject(2, 100, 0, 0, 1);

const trees = [trees1, trees2, trees3];

window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        tryScroll();
    }
});
  
window.addEventListener('click', function(event)
{
    if(started == false)
    {
        document.getElementById("startWindow").style.visibility = "hidden";
        document.getElementById("ambience").play();
        started = true;
    }

    if(document.getElementById("popupWindow").style.visibility == "visible")
    {
        if(witchActive)
        {
            var newText = witch.act();
            if(newText == null)
                newText = witch.act();
            
            if(newText == "done")
            {
                document.getElementById("popupWindow").style.visibility = "hidden";
                witchDone = true;
            }

            document.getElementById("popupInfo").textContent = newText;
        }
        else
        {
            document.getElementById("popupWindow").style.visibility = "hidden";
            pauseScroll = false;        
        }
    }

    if(hutSpawned && pauseScroll && !witchActive && !witchDone)
    {
        knockCount++;
        if(knockCount >= attention)
        {
            document.getElementById("popupInfo").textContent = witch.act();
            document.getElementById("popupWindow").style.visibility = "visible";
            witchActive = true;
        }
        console.log("knock!");
    }
});  

document.addEventListener('touchstart', function(e){ e.preventDefault(); });

document.addEventListener('keydown', function(event) {

    switch (event.key) {
        case "ArrowUp":
            console.log("keyUP");
            // Up pressed
            tryScroll();
            break;
    }    
});

document.addEventListener("drag", function(event) {
    if(event.deltaY > 0)
    {
        tryScroll();
    }
  });  



function tryScroll()
{
    if(!pauseScroll && started)
    {
        trees.forEach(element => element.Scroll());

        scrollAmount += 1;
        console.log(scrollAmount);

        if(pickupNumber < scrollAmount && !pickupHappaned)
        {
            var randomItem = Math.floor(getRandomArbitrary(0, grimoireRaw.length - 1));
            console.log(randomItem);

            console.log("pickup");
            this.document.getElementById("popupInfo").textContent = pickupItem(randomItem);
            document.getElementById("popupWindow").style.visibility = "visible";
            pickupNumber = 0;
            pickupHappaned = true;
            pauseScroll = true;
        }

        if(pickupHappaned && !spawnHut && hutNumber < scrollAmount)
        {
            spawnHut = true;
        }


    }
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
  
