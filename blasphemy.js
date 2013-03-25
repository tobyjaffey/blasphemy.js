/*
The Multi-Faith Blasphemy Generator
Crispian Jago
http://crispian-jago.blogspot.co.uk/2013/03/the-multi-faith-blasphemy-generator.html

Tidied and adapted to node.js by Toby Jaffey <toby-blasphemy@hodgepig.org>
*/

pejorative = [
   "Holy mother of",
   "Holy",
   "Jumping",
   "Great",
   "Wanking",
   "Steaming",
   "Fabricated",
   "Buggering",
   "Colossal",
   "Divine",
   "Crazy",
   "Bat shit crazy",
   "Sweet",
   "Half-baked",
   "Cracked",
   "Suffering",
   "Hairy-arsed",
   "Righteous",
   "Fugly",
   "Moronic",
   "Retarded",
   "Sweet Mary mother of",
   "Crucified",
   "Fetid",
   "Free balling",
   "Butt naked",
   "Ginger",
   "Cheating",
   "Cheese sniffing",
   "arse sniffing",
   "Prick licking",
   "Butt munching",
   "Flying",
   "Teabagging",
   "Bollock naked",
   "Badly shaved",
   "Burning",
   "Spit roasted",
   "Deep fried",
   "Kentucky fried",
   "Pink oboe playing",
   "Fudge packing",
   "Bald",
   "Sweaty bollocked",
   "Juggling",
   "Pillow biting",
   "Skipping",
   "Disco dancing",
   "Yodeling"
];


var deities = [
    "Christ",
    "Allah",
    "Mohammed",
    "Zeus",
    "Jesus",
    "Jehova",
    "Jesus H. Christ",
    "Brahma",
    "Krishna",
    "Odin",
    "Neptune",
    "Pan",
    "Rama",
    "Hades",
    "Gaia",
    "Ganesha",
    "Horus",
    "Janus",
    "Jeebus",
    "Moses",
    "Shiva",
    "Thor",
    "Venus",
    "Vishnu",
    "Yaweh",
    "Mercury",
    "Jesus and Mohammed",
    "Buddha",
    "Flying Spaghetti Monster"
];

var taboo = [
    "almighty",
    "on a bike",
    "alive",
    "fuck-sticks",
    "on toast",
    "bollocks",
    "shite",
    "basher",
    "gobshite",
    "crap",
    "in a chicken basket",
    "piss",
    "breath",
    "arse kisser",
    "fidler",
    "'s cock",
    "'s bellend",
    "'s wrinkled ballsack",
    "'s tits",
    "'s wet follow through",
    "n' shit",
    "fart knocker",
    "'s crusty jizz sock",
    "wazzock",
    "cock tickler",
    "on a moped",
    "spunk",
    "on a sunshine bus",
    "in Hell",
    "in Heaven",
    "turd polisher",
    "fluffer",
    "knickers",
    "undercrackers",
    "gravy",
    "'s oversized codpiece",
    "jam",
    "jelly",
    "scuttler",
    "botter",
    "spanker",
    "in Asda",
    "'s cock snot",
    "'s dirtbox",
    "jugs",
    "fart catcher",
    "knockers",
    "oomlaaters",
    "bum tickler",
    "spanner",
    "spooge",
    "spanker"
];

function randword(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports.blaspheme = function () {
    return randword(pejorative) + ' ' + randword(deities) + ' ' + randword(taboo);
}



