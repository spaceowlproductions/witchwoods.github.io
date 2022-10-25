var witch = null;
var item = null;
var attention = null;

var witchState = function(itemSelected)
{
    item = itemSelected;
    console.log(item.name);
    var currentState = new AnswerDoor(this);
    attention = getRandomArbitrary(3, 10);

    this.changeState = function(state)
    {
        currentState = state;
    }

    this.act = function()
    {
        return currentState.act();
    }
}

var AnswerDoor = function(witch)
{
    this.witch = witch;

    this.act = function()
    {
        var message = "The witch opens the door. They look at you and glance down at your basket.  Ah, I see you found some " + item.name + "... ";
        if(item.bioName != null)
            message += item.bioName + ".";

        this.next();
        return message;
    }

    this.next = function()
    {
        witch.changeState(new AltNames(witch));
    }
}

var AltNames = function(witch)
{
    this.witch = witch;

    this.act = function()
    {
        var message = null;
        this.next();

        if(item.altNames != null)
        {
            var alt = Math.floor(getRandomArbitrary(0, item.altNames.length - 1));
            message = "Some people call it " + item.altNames[alt] + ".";
            return message;
        }
        else
        {
            return witch.act();
        }

    }

    this.next = function()
    {
        witch.changeState(new Describe(witch));
    }
}

var Describe = function(witch)
{
    this.witch = witch;

    this.act = function()
    {
        var message = null;
        if(item.uses.length > 1)
        {
            message = "It can be used " + item.uses[0];

            for(i = 1; i < item.uses.length; i++)
            {
                if(i != item.uses.length - 1)
                    message += ", " + item.uses[i];
                    
                if(i == item.uses.length - 1)
                    message += ", and " + item.uses[i] + ". ";
            }
        }
        else
        {
            message = "It can be used " + item.uses[0] + ". ";
        }

        this.next();
        return message;
    }

    this.next = function()
    {
        witch.changeState(new Warn(witch));
    }
}

var Warn = function(witch)
{
    this.witch = witch;

    this.act = function()
    {
        var message = null;
        if(item.eatPoison)
        {
            message = "One shouldn't ingest this, lest they wish to be poisoned. ";
        }
        if(item.touchPoison)
        {
            if(message == null)
                message = "";
            message += "The witch glances down at your hands, you should be wearing gloves to handle this. ";
        }
        if(item.conditionalPoison)
        {
            if(message == null)
                message = "";
            message += "It can bring an ill fate " + item.conditionalPoison + ". ";
        }

        this.next();
        if(message != null)
            return message;
        else
            return witch.act();
    }

    this.next = function()
    {
        witch.changeState(new Goodbye(witch));
    }
}

var Goodbye = function(witch)
{
    this.witch = witch;

    var rand = Math.ceil(getRandomArbitrary(0,goodByes.length-1));
    var line = goodByes[rand];
    this.act = function()
    {
        this.next();
        return line;
    }

    this.next = function()
    {
        new Audio('audio/DoorClose.mp3').play();
        witch.changeState(new Done(witch));
    }
}

var Done = function(witch)
{
    this.witch = witch;

    this.act = function()
    {
        return "done";
    }
}

var setupWitch = function(item)
{
    witch = new witchState(item);
    console.log(witch);
}

const goodByes = [
    "The witch looks at you as if they have nothing much left to say.  They shut the door leaving you with the quiet sounds of the surrounding wood. ",
    "The witch hears something from within their hut and abruptly leaves you on their stoop.  You don't see anything through the crack in the door, or if you do you're not exactly sure what to make of the image. ",
    "The witch looks up at the bright moon.  They start to mutter something but rather than speaking words their mouth emits the exact sound of a door shutting.  You're suddenly alone in front of the closed door of the hut. ",
    "The witch suddenly vanishes.  Their foot no longer propping open the hut's door, it creaks shut. ",
    "The witch looks over your shoulder, \"I must attend to my warding jars... You shouldn't be able to find this place so easily,\" they say as they move past you and into the woods, the door creaking shut behind them. ",
    "The witch starts to hum an unfamiliar tune as they shut the door.  You swear you can hear the notes of their song reverberating throughout the surrounding wood. ",
    "You hear a cat crying from inside the hut and the witch quickly retreats, the door shutting behind them.  Must be time for feeding. "
];

