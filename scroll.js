var z = 0;

var scrollAmount = 0;
var pauseScroll = false;
var scrolling = false;

var pickupHappaned;
var spawnHut;
var hutSpawned;

var pickupNumber = getRandomArbitrary(500,1200);
var hutNumber = getRandomArbitrary(500,1200);
console.log("hut number = " + hutNumber);

var hut;

var witchActive;
var witchDone;

var steps = ['audio/step0.mp3','audio/step1.mp3','audio/step2.mp3','audio/step3.mp3'];
var knocks = ['audio/knock0.mp3','audio/knock1.mp3','audio/knock3.mp3','audio/knock4.mp3','audio/knock5.mp3'];
var pickupSound = new Audio('audio/pick.mp3'); 
var stepNum = 0;
var stepTime = 0;

var muted = true;

var started = false;
var knockCount = 0;

var smallWindow = false;
if(window.innerWidth < 400)
    smallWindow = true;

var restartClick = 0;

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
            var stepAudio = new Audio(steps[stepNum]);
            stepAudio.volume = getRandomArbitrary(.3, .5);
            stepAudio.play();
            stepNum++;
            if(stepNum > 3)
                stepNum = 0;
            stepTime = 0;
        }
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
                spawnHut = false; 
            }


        }
    }

    ScrollSmall()
    {
        const image = document.getElementById("trees" + this.index);
        const posElement =  document.getElementById("center" + this.index);

        var lst = Date.now();
        var rps = 2*Math.PI;
        var step = rps/60;
        var dif = Date.now() - lst;

        step = rps * dif/1000;

        stepTime += step;
        if(stepTime > 200)
        {
            var stepAudio = new Audio(steps[stepNum]);
            stepAudio.play();
            stepNum++;
            if(stepNum > 3)
                stepNum = 0;
            stepTime = 0;
        }
        if(this.scale > 0)
        {
            this.scale -= .5;
            this.opacity += .005;

            posElement.style.padding = this.scale + "px";
            image.style.filter = "brightness(" + this.opacity + ")";

            if(this.scale < 60 && image.getAttribute("src") == "art/hut.png")
            {
                pauseScroll = true;
                console.log("at hut");
            }
    
            if(this.scale < 30)
            {
                this.blurValue += .6;
                this.fade -= .5;
                image.style.filter = "brightness(" + this.fade + ")";
                image.style.filter = "blur(" + this.blurValue + "px)";

            }
        }
        else
        {
            this.scale = 150;
            this.opacity = 0;

            this.blurValue = 0;
            this.fade = 1;

            posElement.style.padding = this.resetScale + "px";

            image.style.filter = "blur(" + this.blurValue + "px)";

            image.style.filter = "brightness(" + this.opacity + ")";

            var randNum = Math.floor(Math.random() * 20);

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
                spawnHut = false; 
            }


        }
    }

}

var trees1 = null;
var trees2 = null;
var trees3 = null;

if(!smallWindow)
{
    trees1 = new ScrollObject(0, 300, 0, 0, 1);
    trees2 = new ScrollObject(1, 200, 0, 0, 1);
    trees3 = new ScrollObject(2, 100, 0, 0, 1);
}
else
{
    var trees1 = new ScrollObject(0, 150, 0, 0, 1);
    var trees2 = new ScrollObject(1, 110, 0, 0, 1);
    var trees3 = new ScrollObject(2, 70, 0, 0, 1);

}

const trees = [trees1, trees2, trees3];

window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) 
    {
        tryScroll();
        clearTimeout(_scrollTimeout);
        _scrollTimeout = setTimeout(function() 
        {
            scrolling = false;
        }, 250);
    }

});
  

document.addEventListener('keydown', function(event) 
{
    switch (event.code) {
        case "ArrowUp":
            // Up pressed
            tryScroll();
            break;
        case "Space":
            interact();
            break;
        case "Enter":
            interact();
            break;
    }    
});


function interact()
{
    console.log("interact");

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
                recordItem();
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
        var knockID = knockCount;
        if(knockID >= knocks.length)
        {
            knockID -= (knocks.length);
        }
        console.log(knocks[knockID]);
        new Audio(knocks[knockID]).play();
        knockCount++;

        if(knockCount >= attention)
        {
            document.getElementById("popupInfo").textContent = witch.act();
            document.getElementById("popupWindow").style.visibility = "visible";
            new Audio('audio/DoorOpen.mp3').play();
            witchActive = true;
        }
        
        console.log("knock!");
    }

    if(witchDone)
    {
        restartClick += 1;
        if(restartClick == 2)
            restart();
    }
}

document.addEventListener('click', function(e)
{ 
    e.stopImmediatePropagation();
    interact();
});

document.addEventListener('touchend', function(e)
{ 
    scrolling = false;
});



document.addEventListener('keyup', function(event)
{
    switch (event.key) {
        case "ArrowUp":
            scrolling = false;
            break;
    }
});

document.addEventListener("touchstart", function(e) {
    tryScroll();
  });  



function tryScroll()
{
    if(!pauseScroll && started)
    {
        if(!scrolling)
        {
            window.requestAnimationFrame(loop);
            scrolling = true;
        }
    }
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
  

function update(progress) 
{
    // Update the state of the world for the elapsed time since last render
    if(!pauseScroll)
    {
        if(!smallWindow)
            trees.forEach(element => element.Scroll());
        else
            trees.forEach(element => element.ScrollSmall());


        scrollAmount += 1;
    
        if(pickupNumber < scrollAmount && !pickupHappaned)
        {
            var randomItem = Math.floor(getRandomArbitrary(0, grimoireRaw.length - 1));
    
            pickupSound.play();
            this.document.getElementById("popupInfo").textContent = pickupItem(randomItem);
            document.getElementById("popupWindow").style.visibility = "visible";
            pickupNumber = 0;
            pickupHappaned = true;
            pauseScroll = true;
            updateInfo(itemPicked.name + " collected.");
        }
    
        if(pickupHappaned && !spawnHut && hutNumber < scrollAmount)
        {
            spawnHut = true;
        }    
    }
}
  
function loop(timestamp) 
{
    if(scrolling)
    {
        var progress = timestamp - lastRender;

        update(progress);
      
        lastRender = timestamp;
        window.requestAnimationFrame(loop);      
    }
}

var lastRender = 0

var _scrollTimeout = null;
  
function startExperience()
{
    console.log("start experience");
    if(started == false)
    {
        document.getElementById("startWindow").style.visibility = "hidden";
        document.getElementById("ambience").play();
        started = true;
    }
}