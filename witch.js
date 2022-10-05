var witch = null;
var item = null;

var witchState = function(itemSelected)
{
    item = itemSelected;
    console.log(item.name);
    var currentState = new AnswerDoor(this);

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
            var alt = getRandomArbitrary(0, item.altNames.length - 1);
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

    }

    this.next = function()
    {

    }
}

var setupWitch = function(item)
{
    witch = new witchState(item);
    console.log(witch);
}