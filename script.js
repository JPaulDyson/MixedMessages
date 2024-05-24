//Mixed Messages
//Improv situation generator

//the generator will generate a subject, a place, and a situation
//the subject and place will consist of an adjective and a noun. The situation will consist of a verb and a noun.

//specify subject adjectives:
const subjAdj = [
    "old",
    "hairy",
    "morbidly obese",
    "smelly",
    "lactose intolerent",
    "masked",
    "God-fearing",
    "sandwich-obsessed",
    "sleepy",
    "perpetually confused",
    "needlessly sarcastic",
    "hopelessly disorientated",
    "fatally wounded",
    "arthritic",
    "alarmingly racist",
    "diabetic",
    "partially deaf",
    "hysterical",
    "surprisingly tall",
    "singing",
    "nervous",
    "disingenuous"
];

//specify subject nouns:
const subjNoun = [
    "policeman",
    "school mistress",
    "sagger-maker's bottom knocker",
    "nurse",
    "diaphragm tester",
    "caterpillar salesman",
    "lorry driver",
    "Japanese Knotweed specialist",
    "martial arts expert",
    "vegan",
    "mime artist",
    "TV critic",
    "Albanian football pundit",
    "Dame Judy Dench lookalike",
    "acrobat",
    "voyeur",
    "chiropractor",
    "horsemeat enthusiast",
    "magician's assistant",
    "stamp collector",
    "train driver",
    "goldfish trainer"
];

//specify location adjectives:
const locAdj = [
    "haunted",
    "derelict",
    "untidy",
    "unsanitary",
    "armoured",
    "newly opened",
    "unlicensed",
    "upmarket",
    "trendy",
    "nineties-themed",
    "state-sponsored",
    "bombed out",
    "medieval",
    "tastelessly decorated",
    "vomit-inducing",
    "rat-infested",
    "luxurious",
    "futuristic",
    "glass",
    "commercially sponsored"
];

//specify location nouns:
const locNoun = [
    "football stadium",
    "house",
    "coffee shop",
    "denists",
    "flower ship",
    "hospital",
    "school",
    "asylum",
    "prison",
    "sewer",
    "airport",
    "pub",
    "night club",
    "office",
    "dance studio",
    "Italian restaurant",
    "amusement park",
    "fusion reactor",
    "aircraft carrier",
    "hair salon"
];

//specify situation verbs:
const sitVerb = [
    "eating",
    "walking with",
    "throwing",
    "bending",
    "breaking",
    "assaulting",
    "investigating",
    "admonishing",
    "dissolving",
    "exposing",
    "flattening",
    "lampooning",
    "spreading lies about",
    "reassuring",
    "becoming attached to",
    "spying on",
    "becoming obsessed with",
    "hiding",
    "jumping on",
    "emasculating"
];

//specify situation nouns:
const sitNouns = [
    "dog",
    "pillow",
    "fish",
    "wandering minstrel",
    "hesitant turtle",
    "young couple",
    "elderly badger",
    "ripe banana",
    "baby octopus",
    "burglary victim",
    "tin of sardines",
    "masked pigeon assassin",
    "floral tribute",
    "gambling debt",
    "terrible secret",
    "tin of peaches",
    "plate of last night's leftovers",
    "lover of meat pies",
    "cat from next door",
    "replica of Skeletor from He-Man"
];