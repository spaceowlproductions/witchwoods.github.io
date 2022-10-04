var z = 0;

var scrollAmount = 0;
var pauseScroll = false;
var pickupHappaned;

var pickupNumber = getRandomArbitrary(500,1200);

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
        //console.log("Hey from " + this.index + " with " + this.scale, this.opacity, this.blurValue, this.fade, this.resetScale);
        if(this.scale > 0)
        {
            this.scale -= .7;
            this.opacity += .005;
    
            document.getElementById("center" + this.index).style.padding = this.scale + "px";
            document.getElementById("trees" + this.index).style.filter = "brightness(" + this.opacity + ")";
    
            if(this.scale < 50)
            {
                this.blurValue += .6;
                this.fade -= .5;
                document.getElementById("trees" + this.index).style.filter = "brightness(" + this.fade + ")";
                document.getElementById("trees" + this.index).style.filter = "blur(" + this.blurValue + "px)";

            }
        }
        else
        {
            console.log(z);
            this.scale = this.resetScale;
            this.opacity = 0;

            this.blurValue = 0;
            this.fade = 1;

            document.getElementById("center" + this.index).style.padding = this.resetScale + "px";

            document.getElementById("trees" + this.index).style.filter = "blur(" + this.blurValue + "px)";

            document.getElementById("trees" + this.index).style.filter = "brightness(" + this.opacity + ")";

            var randNum = Math.floor(Math.random() * 75);

            var coinFlip = Math.floor(Math.random() * 2);
            if(coinFlip == 1) {randNum = randNum * -1};

            document.getElementById("trees" + this.index).style.transform = "translate(" + randNum + "px)";

            z = z - 1;
            document.getElementById("center" + this.index).style.zIndex = z;
            console.log(document.getElementById("trees" + this.index).style.zIndex);

        }
    }
}

const trees1 = new ScrollObject(0, 300, 0, 0, 1);
const trees2 = new ScrollObject(1, 200, 0, 0, 1);
const trees3 = new ScrollObject(2, 100, 0, 0, 1);

const trees = [trees1, trees2, trees3];

window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        if(!pauseScroll)
        {
            trees.forEach(element => element.Scroll());

            if(!pickupHappaned)
            {
                scrollAmount += 1;
            }
        }

        if(pickupNumber < scrollAmount && !pickupHappaned)
        {
            var randomItem = Math.floor(getRandomArbitrary(0, grimoireRaw.length - 1));
            console.log(randomItem);

            document.getElementById("popupName").textContent = grimoireRaw[randomItem].name;
            document.getElementById("popupInfo").textContent = grimoireRaw[randomItem].description;

            console.log("pickup");
            document.getElementById("popupWindow").style.visibility = "visible";
            pickupHappaned = true;
            pauseScroll = true;
        }
    }
});
  
window.addEventListener('click', function(event)
{
    if(document.getElementById("popupWindow").style.visibility == "visible")
    {
        document.getElementById("popupWindow").style.visibility = "hidden";
        pauseScroll = false;    
    }
});
  

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
  
