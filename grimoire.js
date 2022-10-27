const grimoireRaw = [
    {
        "name": "Aconite",
        "description": "a stem of leaves with lovely deep purple blossoms",
        "altNames": [ "monkshood", "wolves bane", "thung" ],
        "bioName": "Aconitum Napellus",
        "eatPoison": true,
        "touchPoison": true,
        "uses": [ "to poison the tip of arrows", "to aid a witch's flight" ]
    },
    {
        "name": "Allysum",
        "description": "a sweet smelling stem of small clustered flowers with oblong-oval leaves",
        "altNames": [ "Madwort" ],
        "bioName": "Alyssum maritima",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to appease anger", "to cure madness", "to cure hydrophobia" ]
    },
    {
        "name": "Angelica",
        "description": "a stem full of bipinate leaves, with umbels of greenish-white flowers spreading out at the top",
        "altNames": [ "the Root of the Holy Ghost" ],
        "bioName": "Archangelica",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to prevent infection by the plauge by chewing it", "to guard against the spells of witches by carrying its root" ]
    },
    {
        "name": "Ash Stick",
        "description": "a stick from an ash tree",
        "altNames": [ "Tree of Life", "Yggdrasil by Norsemen" ],
        "bioName": "Fraxinus americana",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to ward off snakes as drawing a circle around one with this can kill it in an instant", "to herd cattle", "to cure warts by sticking a pin into the ash, then into the wart until it hurts, and then back into the ash while saying aloud \"Ashen tree, ashen tree.  Pray buy this wart of me.\"" ]
    },
    {
        "name": "Mountain Ash",
        "description": "a sprig of leaves with clumps of red-orange berries",
        "altNames": [ "Rowan Tree", "Witchwood", "Quickbane", "wild Ash", "Wicken", "Witchen", "Witchbane" ],
        "bioName": "Sorbus Acuparia",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "as a decoration for the autumnal witches wreath", "to protect a dwelling if planted near it", "to make a Hallowe'en necklace with its colorful berries, which can be worn by pigs and cattle to protect them and fatten them up", "to prevent rheumatism if kept in one's pocket", "treat fever and malaraia with its bark", "for making dyes using any aspect of the plant", "to avert charms to horses and cattle if used in a whip" ]
    },
    {
        "name": "Aspen Tree",
        "description": "a branch of an Aspen Tree", //todo make more descriptive?
        "bioName": "Archangelica",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "as a for cure shaking ague (shivering fever) if you pin a lock of your hair to it", "to prevent a witch from returning from the dead if laid on their grave" ]
    },
    {
        "name": "Lemon Balm",
        "description": "a sprig of sweet smelling mint-shaped leaves",
        "bioName": "Melissa officinalis",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to prolong life and preserve youth if drank daily as a tea", "to help bees stick together if planted near their hives", "to brew a calming potion for a bewitched person" ]
    },
    {
        "name": "Bay",
        "description": "a sprig of sweet smelling mint-shaped leaves",
        "altNames": [ "Laurel Tree" ],
        "bioName": "Laurus Nabilis",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to ward off all contagion, witchcraft, and evil spirits", "to foretell of disaster if seen withered", "to improve prophecies if chewed", "to decorate Saturnalia festivities" ]
    },
    {
        "name": "Beans",
        "description": "a pile of bean pods",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to ward off witches if you hold one in your mouth and spit it at the first witch that acosts you", "to concecrate the souls of the dead", "to foretell of family tragedy if a bean turns up white in your crop" ]
    },
    {
        "name": "Betony",
        "description": "a sprig of purple flowers",
        "bioName": "Betonica officinalis",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to add a color accent to a potion", "to cure drunkeness if brewed as a tea", "to protect against snakes if carried alongside Dracocephalum (False Dragonhead)" ]
    },
    {
        "name": "Blackberries",
        "description": "a collection of small black berries",
        "altNames": [ "brambleberries" ],
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "if picked after the 10th of October, as that is the day that the Devil roams the country and spits on every bramble, causing the unsuspecting gatherer to become ill and die when eaten",
        "uses": [ "to cure many illnesses if humans or cattle pass under an arch of its brambles, though this often takes several passes through the arch to cure whooping cough", "as a ward for whooping cough if the bush's brambles are fashioned into a cross and worn" ]
    },
    {
        "name": "Broom",
        "description": "a thick green ridged stem with small deciduous trifoliate leaves and an abundance of golden yellow flowers",
        "bioName": "Cytisus scoparius",
        "altNames": [ "Genista" ],
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to scourge yourself if you are a penitent (whip yourself for God's forgiveness)", "to rid your home of its head of house, if used to sweep its floor when in blossom in May", "as an ingredient in many potions", "to bring good luck and abundance if used as a decoration" ]
    },
    {
        "name": "Cabbage",
        "description": "a sphere of tightly wrapped leafy green vegetable",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "in one of many Hallowe'en rituals. One simply closes their eyes and pulls on the stalk while repeating \"Hally on a cabbage stalk, and hally on a bean. Hally on a cabbage stalk, tomorrow's Hallowe'en.\" Once the head gives away from the ground, they study the shape of its stalk to see the shape of their future lover." ]
    },
    {
        "name": "Caraway",
        "description": "a stem of finely divided, feathery leaves with thread-like divisions branching into umbels of small pale flowers",
        "altNames": [ "meridian fennel", "Persian cumin" ],
        "bioName": "Carum Carvi",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "to confer the quality of retention when eaten", "to prevent theft", "to bring back or prevent a lover from straying if one places a few seeds into their pocket", "to lure a bird back to its nest when fed", "to return a guest to the spot where one fed it to them" ]
    },
    {
        "name": "Chicory",
        "description": "a woody herbaceous plant with little pale flowers",
        "bioName": "Cichorium intybus",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "",
        "uses": [
        "to render a witch invisible to onlookers by holding their seeds",
        "to reduce swelling if ingested",
        "as an ingredient in many culinary recipes"
        ]
    },
    {
        "name": "Four-Leaf Clover",
        "description": "a small grouping of four heart-shaped leaves on a grassy stem",
        "bioName": "Trifolium variation",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
        "to detect witches and fairies",
        "to cure illness",
        "to avert the \"Evil Eye\"",
        "to protect its wearer from military service"
        ]
    },
    {
        "name": "Clover",
        "description": "a bunch of grassy stalks with small groups of three heart-shaped leaves",
        "altNames": [
        "trefoil"
        ],
        "bioName": "Trifolium",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
        "as a symbol of the Christian Trinity",
        "to serve as a sacred protector"
        ]
    },
    {
        "name": "Colchicum",
        "description": "a collection of pink flower bulbs on stems without leaves",
        "altNames": [
        "autumn crocus",
        "meadow saffron",
        "naked ladies"
        ],
        "bioName": "Colchicum autumnale",
        "eatPoison": true,
        "touchPoison": false,
        "uses": [
        "to remedy gout if processed into colchicine",
        "to drug someone if fed in small doses, which can be fatal if done over a long period of time"
        ]
    },
    {
        "name": "Cyclamen",
        "description": "a circular growth of leaves and blossoms protruding from earth-soaked tubers",
        "altNames": [
        "Narcissus Hederifolium",
        "the drinkers plant"
        ],
        "bioName": "Cyclamen purperescens",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "stepped on by a pregnant person, as this can cause a miscarriage",
        "uses": [
        "to brew a love potion",
        "to treat diseases of the ears",
        "as an antidote to poison",
        "to bring drunkeness if added to wine"
        ]
    },
    {
        "name": "Dill",
        "description": "a bunch of hollow stems, feathering out into umbels of delicate yellow blossoms",
        "bioName": "Anethum graveolens",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
        "to imbue the effect of mild sedation if added to a water or potion",
        "as protection against the power of witches",
        "as an aid to witches in various destructive spells"
        ]
    },
    {
        "name": "Elder Tree",
        "description": "a stick with hollow stems branching out in geometric patterns",
        "altNames": [
          "Eldrum",
          "Hyldor",
          "Hyllantree",
          "Ellhorn",
          "Bour Tree",
          "Pipe Tree"
        ],
        "bioName": "Sambucus Nigra",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "to those who break it from a tree without performing the ritual for the Elder Mother who is said to live inside it.  One should partly bend their knee with bare head and folded arms, and recite \"Lady Ellhorn, give me some of thy wood and I will give thee some of mine when it grows in the forest.\"",
        "uses": [
          "as a pipe or blowing tool",
          "as a whistle",
          "to charm against lightning and snakes",
          "to protect a body from evil spirits if buried with them",
          "to point to witches if one sets an oil dipped tip on fire and places it in a glass of water on Christmas Eve"
        ],
      },
      {
        "name": "Elderberry",
        "description": "a bunch of dark-blueish berries on hollow twigs",
        "bioName": "Sambucus",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "",
        "uses": [
          "to make elderberry wine",
          "as an adulterant for brewing port",
          "as a cure for sciatica, influenza, erysipelas, and syphilis",
          "as a spring tonic",
          "as a dye"
        ]
      },
      {
        "name": "Hawthorne",
        "description": "a smooth grey thorny branch with small red pome fruit",
        "altNames": [
          "Mayblossoms",
          "Whitehorn",
          "Haw",
          "Hagthorn",
          "Quickset"
        ],
        "bioName": "Crataegus",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "rested under, as the Fairies might gain power over you",
        "uses": [
          "to protect against witches, spirits, and thunderstorms",
          "to form the wreath of Green Man decorations",
          "as a fire charm for kitchens if made into a globe",
          "to foretell of future love by hanging it on a signpost on May Eve... if the branch is blown down by morning one will not marry"
        ]
      }
];

var itemPicked = null;

var selectedFlora = null;

var personalGrimoire = [];

if(doesCookieExist("grimoire"))
{
    loadPersonalGrimoire();
}

function pickupItem(itemNum)
{
    if(selectedFlora == null)
        itemPicked = grimoireRaw[itemNum];
    else
        itemPicked = selectedFlora;

    setupWitch(itemPicked);
    return "You find " + itemPicked.description + ", and place it in your basket to present to the witch in the woods.";
}

function recordItem()
{
    personalGrimoire.push(itemPicked.name);
    writeGrimoireCookie();
    //document.cookie = "flora" + "=" + itemPicked.name + ";path=/";
}

function writeGrimoireCookie()
{
    var cookieString = "grimoire=";

    for(var i = 0; i < personalGrimoire.length; i++)
    {
        cookieString += personalGrimoire[i];

        if(i < personalGrimoire.length - 1)
        {
            cookieString += ",";
        }
    }

    cookieString += ";path=/";

    document.cookie = cookieString;
    console.log(cookieString);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "cookie not found";
  }
  
function checkCookie(cname) 
{
    let check = getCookie(cname);
    if (username != "") {
    return true;
    } else {
        return false;
    }
}

function doesCookieExist(cname)
{
    var dc = document.cookie;
    var prefix = cname + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) 
            return false;
        else
            return true;
    }
}

function loadPersonalGrimoire()
{
    console.log("loading personal grimoire from cookie");
    var newGrimoire = getCookie("grimoire").split(",");

    newGrimoire.forEach(flora => {
        personalGrimoire.push(flora);
    });

    console.log("personal grimoire has " + personalGrimoire.length + " flora entires.");
}