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
        "conditionalPoison": "if stepped on by a pregnant person, as this can cause a miscarriage",
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
        "uses": [
          "to make elderberry wine",
          "as an adulterant for brewing port",
          "as a cure for sciatica, influenza, erysipelas, and syphilis",
          "as a spring tonic",
          "as a dye"
        ]
      },
      {
        "name": "Flax",
        "description": "a slender branching stem with green lanceolate leaves and pure blue flowers",
        "bioName": "Linum usitatissimum",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to cure ailing children if exposed to them overnight",
          "to spin and weave into protective linen",
          "to protect a bride if included used in marriage rituals",
          "to make a seven-year old child beautiful if they dance in a field of it"
        ]
      },
      {
        "name": "Foxglove",
        "description": "a slender branching stem with green lanceolate leaves and pure blue flowers",
        "altNames": [
          "Witches Gloves",
          "Dead Men’s Bells",
          "Fairy’s Glove",
          "Bloody Fingers",
          "Fairy Thimbles",
          "Folkesglove",
          "Foxglove",
          "Fox Bell",
          "Our Lady’s Gloves"    
        ],
        "bioName": "Digitalis purpurea",
        "eatPoison": true,
        "touchPoison": true,
        "uses": [
          "to cause the heart a sensation of flying if ingested",
          "to aid a witch in flying"
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
        "conditionalPoison": "if rested under, as the Fairies might gain power over you",
        "uses": [
          "to protect against witches, spirits, and thunderstorms",
          "to form the wreath of Green Man decorations",
          "as a fire charm for kitchens if made into a globe",
          "to foretell of future love by hanging it on a signpost on May Eve... if the branch is blown down by morning one will not marry"
        ]
      },
      {
        "name": "Hazel",
        "description": "a stem of rounded leaves with double-serrate margins, with clumps of small brown nuts",
        "altNames": [
          "Cobnut",
          "Filbert"
        ],
        "bioName": "Genus Corylus",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to make a most effective divining rod for finding water and to drive cattle through the purifying fires of midsummer",
          "as a protection from dark magic if used to craft a horse's saddle",
          "to bless you with your hearts desire if warn in your hair",
          "to predict a future love on Halloween if you place a berry in a fire and the berry jumps just after you whisper the name of a potential suitor"
        ]
      },
      {
        "name": "Hellebore",
        "description": "a flower with five petal-like sepals surrounding a ring of small, cup-like nectaries",
        "altNames": [
          "Christe Herbe",
          "Christmas Rose",
          "Melampode"
        ],
        "bioName": "Helleborus Niger",
        "eatPoison": true,
        "touchPoison": true,
        "uses": [
          "to protect cattle from dark magic if prepared with the proper rites",
          "to grant a witch invisibility if powdered and scattered through the air",
          "to cure a poisoned beast by drawing it through a hole in its ear and removing it the next day at the same hour "
        ]
      },
      {
        "name": "Hemlock",
        "description": "a tall, handsome, and smooth stem with umbrellas of white flowers which give off a potent stench",
        "bioName": "Conium Maculatum",
        "eatPoison": true,
        "touchPoison": true,
        "uses": [
          "as a most fatal poison to anyone who drink but just a few drops",
          "to brew a drug that cures vertigo if administered with extreme caution"
        ]
      },
      {
        "name": "Henbane",
        "description": "an unpleasantly slimy, hairy weed with coarsely-toothed leaves and yellowish bell-shaped flowers with purple veins",
        "bioName": "Hyoscyamus Niger",
        "eatPoison": true,
        "touchPoison": false,
        "uses": [
          "to brew a dark magic potion that can send its drinker into delirium and convulsions",
          "to crown the dead as they wander the river Styx",
          "to cure gout and aches if prepared carefully as an ointment"
        ]
      },
      {
        "name": "Holly",
        "description": "a sprig of hardy green leaves surrounding bright red berry-like drupes",
        "bioName": "Ilex",
        "eatPoison": true,
        "touchPoison": false,
        "uses": [
          "to protect and strengthen livestock if blessed in a church and hung in a stable",
          "as a ward against storms and disaster if grown outside of ones dwelling"
        ]
      },
      {
        "name": "Horehound",
        "description": "a sprig of mint-like hairy grey leaves with small white flowers",
        "bioName": "Marrubium vulgare",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "as a cure for hydrophobia induced by rabies",
          "as a deworming agent for livestock and pets",
          "to brew potions and tonics with respiratory benefits"
        ]
      },
      {
        "name": "Juniper",
        "description": "branches of green spiky leaves with berry-like black seed cones",
        "bioName": "Juniperus",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to fumigate sick rooms",
          "to smoke out any unpleasant creatures or spirits from a house",
          "to ward off evil spirits if planted near an entrance"
        ]
      },
      {
        "name": "Mandrake",
        "description": "a man-shaped root topped with a sprout of leaves and large yellow-green flowers",
        "altNames": [
          "sleep drug"
        ],
        "bioName": "Mandragora Officinarum",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "uprooted without proper protection from its deadly shrieks",
        "uses": [
          "to induce a deep and almost death-like trance",
          "as an aphrodisiac in potions to promote love or cure sterility"
        ]
      },
      {
        "name": "Mullein",
        "description": "a dense rosette of lower leaves surrounding a tall stem of flowers with five symmetrical petals",
        "altNames": [
          "Hag's Taper",
          "the Candlewick Plant",
          "Great Mullein"
        ],
        "bioName": "Verbascum",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "as a candle (taper) to light ones way if dipped in oil",
          "to make wicks and tinder with its leaves"
        ]
      },
      {
        "name": "Mugwort",
        "description": "a dark reddish-purple stem full of pinate pointed leaves",
        "altNames": [
          "St. John's Herb",
          "the Plant of the Weary Traveler"
        ],
        "bioName": "Artemisia Vulgaris",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to protect a weary traveler if placed in their shoe",
          "to protect against sunstroke",
          "to repel unwanted insects if prepared as an oil",
          "to ward off possession by evil spirits if singed with fire and prepared with the proper words",
          "to remedy the ague"
        ]
      },
      {
        "name": "Oak",
        "description": "a deciduous tree branch with deeply lobed leaves and acorns",
        "bioName": "Quercus",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to brew a potion that cures Gout",
          "to create a protective bouquet or wreath if paired with yew"
        ]
      },
      {
        "name": "Onion",
        "description": "a fleshy bulb topped with tall green stalks",
        "bioName": "Allium cepa",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to draw in all evil smells and rid the air of infections"
        ]
      },
      {
        "name": "Garlic",
        "description": "a tall flat bladed leaf growing from a small fleshy bulb",
        "bioName": "Allium sativum",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to rid the air of infection",
          "to ward off vampires"
        ]
      },
      {
        "name": "Leeks",
        "description": "a large bundle of leaf sheaths",
        "bioName": "Allium ampeloprasum",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "to avert the evil eye and prevent bewitching"
        ]
      },
      {
        "name": "Parsley",
        "description": "a rosette full of tiny green tripinnate leaves",
        "bioName": "Petroselinum crispum",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "if sewn during a time without a rising moon",
        "uses": [
          "as an herb for kitchen magic",
          "as a symbol of festivity"
        ]
      },
      {
        "name": "Pennyroyal",
        "description": "a tall stem with squared cross-sections divided by leaves in opposite pairs",
        "bioName": "Mentha pulegium",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
          "as one of many elements in a witches garland",
          "to induce abortions if used in quantity"
        ]
      }
    
];

var itemPicked = null;

var selectedFlora = null;

var personalGrimoire = [];

if(doesCookieExist("grimoire"))
{
    console.log("grimoire cookie previously written");
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
    grimoireHasItem = false;
    personalGrimoire.forEach(flora => {
        if(flora == itemPicked.name)
            grimoireHasItem = true;
    });
    
    if(!grimoireHasItem)
    {
        personalGrimoire.push(itemPicked.name);
        writeGrimoireCookie(7300);    
    }
}

function writeGrimoireCookie(exdays)
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

    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
  

    cookieString += ";" + expires + ";path=/";

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

function fillPersonalGrimoire()
{
    personalGrimoire.forEach(flora => {
        var floraObject = null;

        grimoireRaw.forEach(obj => {
            if(obj.name == flora)
                floraObject = obj;
        });

        const floraWindow = document.createElement('div');
        floraWindow.setAttribute('id','floraWindow')
        const title = document.createElement('h3');
        let floraName = document.createTextNode(floraObject.name);

        document.body.appendChild(floraWindow);
        title.appendChild(floraName);
        floraWindow.appendChild(title);

        if(floraObject.bioName != null)
        {
            const titleTag = document.createElement('h4');
            let titleText = document.createTextNode('Bionomial Name');
            titleTag.appendChild(titleText);
            floraWindow.appendChild(titleTag);

            const infoTag = document.createElement('p');
            let infoText = document.createTextNode(floraObject.bioName);
            infoTag.appendChild(infoText);
            floraWindow.appendChild(infoTag);
        }

        if(floraObject.altNames != null)
        {
            const titleTag = document.createElement('h4');
            let titleText = document.createTextNode('Alternate Names');
            titleTag.appendChild(titleText);
            floraWindow.appendChild(titleTag);

            const infoTag = document.createElement('p');
            var text = floraObject.altNames;
            let infoText = document.createTextNode(text.toString().replace(/,/g, ', '));
            infoTag.appendChild(infoText);
            floraWindow.appendChild(infoTag);
        }

        if(floraObject.description != null)
        {
            const titleTag = document.createElement('h4');
            let titleText = document.createTextNode('Description');
            titleTag.appendChild(titleText);
            floraWindow.appendChild(titleTag);

            const infoTag = document.createElement('p');
            let infoText = document.createTextNode(floraObject.description);
            infoTag.appendChild(infoText);
            floraWindow.appendChild(infoTag);
        }

        if(floraObject.uses != null)
        {
            const titleTag = document.createElement('h4');
            let titleText = document.createTextNode('Uses');
            titleTag.appendChild(titleText);
            floraWindow.appendChild(titleTag);

            const infoTag = document.createElement('p');
            var text = floraObject.uses;
            let infoText = document.createTextNode(text.toString().replace(/,/g, ', '));
            infoTag.appendChild(infoText);
            floraWindow.appendChild(infoTag);
        }

        if(floraObject.eatPoison || floraObject.touchPoison || floraObject.conditionalPoison)
        {
            const titleTag = document.createElement('h4');
            let titleText = document.createTextNode('Danger Warnings');
            titleTag.appendChild(titleText);
            floraWindow.appendChild(titleTag);

            var warningText = "";
            if(flora.eatPoison && !flora.touchPoison)
                warningText = "It's poisonous to eat. ";
            else if(!flora.eatPoison && flora.touchPoison)
                warningText = "It's poisonous to the touch. ";
            else
                warningText = "It's poisonous to eat, and to touch. ";

            if(floraObject.conditionalPoison)
                warningText += "It can bring an ill fate " + floraObject.conditionalPoison;

            const infoTag = document.createElement('p');
            let infoText = document.createTextNode(warningText);
            infoTag.appendChild(infoText);
            floraWindow.appendChild(infoTag);
    
        }

    });
}