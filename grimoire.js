const grimoireRaw = [
    {
        "name": "Aconite",
        "description": "a stem of leaves with lovely deep purple blossoms",
        "altNames": [ "monkshood", "wolves bane", "thung" ],
        "bioName": "Aconitum Napellus",
        "eatPoison": true,
        "touchPoison": true,
        "uses": [ "poison the tip of arrows", "aid a witch's flight" ]
    },
    {
        "name": "Allysum",
        "description": "a sweet smelling stem of small clustered flowers with oblong-oval leaves",
        "altNames": [ "Madwort" ],
        "bioName": "Alyssum maritima",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "appease anger", "cure madness", "cure hydrophobia" ]
    },
    {
        "name": "Angelica",
        "description": "a stem full of bipinate leaves, with umbels of greenish-white flowers spreading out at the top",
        "altNames": [ "the Root of the Holy Ghost" ],
        "bioName": "Archangelica",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "prevent infection by the plauge by chewing it", "guard against the spells of witches by carrying its root" ]
    },
    {
        "name": "Ash Stick",
        "description": "a stick from an ash tree",
        "altNames": [ "Tree of Life", "Yggdrasil by Norsemen" ],
        "bioName": "Fraxinus americana",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "ward off snakes, as drawing a circle around one with this can kill it in an instant", "herd cattle", "cure warts by sticking a pin into the ash, then into the wart until it hurts, and then back into the ash while saying aloud 'Ashen tree, ashen tree.  Pray buy this wart of me.'" ]
    },
    {
        "name": "Mountain Ash",
        "description": "a sprig of leaves with clumps of red-orange berries",
        "altNames": [ "Rowan Tree", "Witchwood", "Quickbane", "wild Ash", "Wicken", "Witchen", "Witchbane" ],
        "bioName": "Sorbus Acuparia",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "decorate the autumnal witches wreath", "protect a dwelling if planted near it", "make a Hallowe'en necklace with its colorful berries, which can be worn by pigs and cattle to protect them and fatten them up", "prevent rheumatism if kept in one's pocket", "treat fever and malaraia with its bark", "making dyes using any aspect of the plant", "avert charms to horses and cattle if used in a whip" ]
    },
    {
        "name": "Aspen Tree",
        "description": "a branch of an Aspen Tree", //todo make more descriptive?
        "bioName": "Archangelica",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "can cure shaking ague (shivering fever) if you pin a lock of your hair to it", "prevent a witch from returning from the dead if laid on their grave" ]
    },
    {
        "name": "Lemon Balm",
        "description": "a sprig of sweet smelling mint-shaped leaves",
        "bioName": "Melissa officinalis",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "prolong life and preserve youth if drank daily as a tea", "help bees stick together if planted near their hives", "brew a calming potion for a bewitched person" ]
    },
    {
        "name": "Bay",
        "description": "a sprig of sweet smelling mint-shaped leaves",
        "altNames": [ "Laurel Tree" ],
        "bioName": "Laurus Nabilis",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "ward off all contagion, witchcraft, and evil spirits", "foretell of disaster if seen withered", "improve prophecies if chewed", "decorate Saturnalia festivities" ]
    },
    {
        "name": "Beans",
        "description": "a pile of bean pods",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "ward off witches if you hold one in your mouth and spit it at the first witch that acosts you, concecrate the souls of the dead", "foretell of family tragedy if a bean turns up white in your crop" ]
    },
    {
        "name": "Betony",
        "description": "a sprig of purple flowers",
        "bioName": "Betonica officinalis",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "add a color accent to midicine", "cure drunkeness if brewed as a tea", "protect against snakes if carried alongside Dracocephalum (False Dragonhead)" ]
    },
    {
        "name": "Blackberries",
        "description": "a collection of small black berries",
        "altNames": [ "brambleberries" ],
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "if picked after the 10th of October, as that is the day that the Devil roams the country and spits on every bramble, causing the unsuspecting gatherer to become ill and die when eaten",
        "uses": [ "cure many illnesses if humans or cattle pass under an arch of its brambles, though this often takes several passes through the arch to cure whooping cough", "prevent whooping cough if the bush's brambles are fashioned into a cross and worn" ]
    },
    {
        "name": "Broom",
        "description": "a thick green ridged stem with small deciduous trifoliate leaves and an abundance of golden yellow flowers",
        "bioName": "Cytisus scoparius",
        "altNames": [ "Genista" ],
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "scourge yourself if you are a penitent (whip yourself for God's forgiveness)", "rid your home of its head of house, if used to sweep its floor when in blossom in May", "aid as an ingredient in medicines", "bring good luck and abundance if used as a decoration" ]
    },
    {
        "name": "Cabbage",
        "description": "a sphere of tightly wrapped leafy green vegetable",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "foretell of your future lover's shape on Hallowe'en by closing one's eyes, pulling on the stalk, and repeating 'Hally on a cabbage stalk, and hally on a bean. Hally on a cabbage stalk, tomorrow's Hallowe'en,' and studying the stalk once it's pulled from the ground" ]
    },
    {
        "name": "Caraway",
        "description": "a stem of finely divided, feathery leaves with thread-like divisions branching into umbels of small pale flowers",
        "altNames": [ "meridian fennel", "Persian cumin" ],
        "bioName": "Carum Carvi",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [ "confer the quality of retention when eaten", "prevent theft", "bring back or prevent a lover from straying if one places a few seeds into their pocket", "lure a bird back to its nest when fed", "return a guest to the spot where one fed it to them" ]
    },
    {
        "name": "Chicory",
        "description": "a woody herbaceous plant with little pale flowers",
        "altNames": [
        ""
        ],
        "bioName": "Cichorium intybus",
        "eatPoison": false,
        "touchPoison": false,
        "conditionalPoison": "",
        "uses": [
        "render a witch invisible to onlookers by holding their seeds",
        "reduce swelling if ingested",
        "aid in culinary recipes"
        ]
    },
    {
        "name": "Four-Leaf Clover",
        "description": "a small grouping of four heart-shaped leaves on a grassy stem",
        "bioName": "Trifolium variation",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
        "detect witches and fairies",
        "cure illness",
        "avert the Evil Eye",
        "protect its wearer from military service"
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
        "represent the Christian Trinity",
        "serve as a sacred protector"
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
        "remedy gout if processed into colchicine",
        "drug someone if fed in small doses",
        "kill someone if given small doses over a long period of time "
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
        "brew a love potion",
        "treat diseases of the ears",
        "act as an antidote to poison",
        "bring drunkeness if added to wine"
        ]
    },
    {
        "name": "Dill",
        "description": "a bunch of hollow stems, feathering out into umbels of delicate yellow blossoms",
        "bioName": "Anethum graveolens",
        "eatPoison": false,
        "touchPoison": false,
        "uses": [
        "imbue the effect of mild sedation if added to a water or potion",
        "protect against the power of witches",
        "aid witches in various forms of destruction"
        ]
    }
];

var itemPicked = null;

var selectedFlora = null;

function pickupItem(itemNum)
{
    if(selectedFlora == null)
        itemPicked = grimoireRaw[itemNum];
    else
        itemPicked = selectedFlora;

    setupWitch(itemPicked);
    return "You find " + itemPicked.description + ", and place it in your basket to present to the witch in the woods.";
}