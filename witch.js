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

    this.act = function()
    {
        this.next();
        return "The witch looks at you as if they have nothing much left to say.  They shut the door leaving you with the quiet sounds of the surrounding wood. ";
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
