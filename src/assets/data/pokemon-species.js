let pokemon = {};

pokemon.statAllocations = [10, 12, 14, 15, 16, 18, 20, 23, 26, 29];

// variance = range of stats that the pokemon has a chance to be randomly added or subtracted
// handicap = number of stats always added to the pokemons stat allocation
pokemon.data = {
    "bulbasaur": {
        "tier": 5,
        "variance": 3,
        "handicap": -2,
        "id": 1,
        "types": [
            "grass",
            "poison"
        ]
    },
    "charmander": {
        "tier": 5,
        "variance": 0,
        "handicap": 2,
        "id": 4,
        "types": [
            "fire"
        ]
    },
    "squirtle": {
        "tier": 5,
        "variance": 1,
        "handicap": 0,
        "id": 7,
        "types": [
            "water"
        ]
    },
    "caterpie": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 10,
        "types": [
            "bug"
        ]
    },
    "weedle": {
        "tier": 1,
        "variance": 1,
        "handicap": 0,
        "id": 13,
        "types": [
            "bug",
            "poison"
        ]
    },
    "pidgey": {
        "tier": 2,
        "variance": 0,
        "handicap": 0,
        "id": 16,
        "types": [
            "normal",
            "flying"
        ]
    },
    "rattata": {
        "tier": 2,
        "variance": 0,
        "handicap": 0,
        "id": 19,
        "types": [
            "normal"
        ]
    },
    "spearow": {
        "tier": 3,
        "variance": 0,
        "handicap": 0,
        "id": 21,
        "types": [
            "normal",
            "flying"
        ]
    },
    "ekans": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 23,
        "types": [
            "poison"
        ]
    },
    "sandshrew": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 27,
        "types": [
            "ground"
        ]
    },
    "nidoran-f": {
        "tier": 5,
        "variance": 0,
        "handicap": -2,
        "id": 29,
        "types": [
            "poison"
        ]
    },
    "nidoran-m": {
        "tier": 5,
        "variance": 2,
        "handicap": 0,
        "id": 32,
        "types": [
            "poison"
        ]
    },
    "vulpix": {
        "tier": 4,
        "variance": 0,
        "handicap": 2,
        "id": 37,
        "types": [
            "fire"
        ]
    },
    "zubat": {
        "tier": 3,
        "variance": 2,
        "handicap": 0,
        "id": 41,
        "types": [
            "poison",
            "flying"
        ]
    },
    "oddish": {
        "tier": 4,
        "variance": 3,
        "handicap": -2,
        "id": 43,
        "types": [
            "grass",
            "poison"
        ]
    },
    "paras": {
        "tier": 4,
        "variance": 1,
        "handicap": -1,
        "id": 46,
        "types": [
            "bug",
            "grass"
        ]
    },
    "venonat": {
        "tier": 4,
        "variance": 1,
        "handicap": -2,
        "id": 48,
        "types": [
            "bug",
            "poison"
        ]
    },
    "diglett": {
        "tier": 2,
        "variance": 1,
        "handicap": 0,
        "id": 50,
        "types": [
            "ground"
        ]
    },
    "meowth": {
        "tier": 5,
        "variance": 4,
        "handicap": -1,
        "id": 52,
        "types": [
            "normal"
        ]
    },
    "psyduck": {
        "tier": 4,
        "variance": 2,
        "handicap": -2,
        "id": 54,
        "types": [
            "water"
        ]
    },
    "mankey": {
        "tier": 4,
        "variance": 2,
        "handicap": 0,
        "id": 56,
        "types": [
            "fighting"
        ]
    },
    "growlithe": {
        "tier": 4,
        "variance": 0,
        "handicap": 2,
        "id": 58,
        "types": [
            "fire"
        ]
    },
    "poliwag": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 60,
        "types": [
            "water"
        ]
    },
    "abra": {
        "tier": 4,
        "variance": 5,
        "handicap": -3,
        "id": 63,
        "types": [
            "psychic"
        ]
    },
    "machop": {
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 66,
        "types": [
            "fighting"
        ]
    },
    "bellsprout": {
        "tier": 4,
        "variance": 2,
        "handicap": -2,
        "id": 69,
        "types": [
            "grass",
            "poison"
        ]
    },
    "tentacool": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 72,
        "types": [
            "water",
            "poison"
        ]
    },
    "geodude": {
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 74,
        "types": [
            "rock",
            "ground"
        ]
    },
    "ponyta": {
        "tier": 4,
        "variance": 2,
        "handicap": 2,
        "id": 77,
        "types": [
            "fire"
        ]
    },
    "slowpoke": {
        "tier": 4,
        "variance": 6,
        "handicap": -5,
        "id": 79,
        "types": [
            "water",
            "psychic"
        ]
    },
    "magnemite": {
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 81,
        "types": [
            "electric",
            "steel"
        ]
    },
    "farfetchd": {
        "tier": 6,
        "variance": 4,
        "handicap": 0,
        "id": 83,
        "types": [
            "normal",
            "flying"
        ]
    },
    "doduo": {
        "tier": 6,
        "variance": 0,
        "handicap": -2,
        "id": 84,
        "types": [
            "normal",
            "flying"
        ]
    },
    "seel": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 86,
        "types": [
            "water"
        ]
    },
    "grimer": {
        "tier": 4,
        "variance": 2,
        "handicap": 0,
        "id": 88,
        "types": [
            "poison"
        ]
    },
    "shellder": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 90,
        "types": [
            "water"
        ]
    },
    "gastly": {
        "tier": 4,
        "variance": 2,
        "handicap": -1,
        "id": 92,
        "types": [
            "ghost",
            "poison"
        ]
    },
    "onix": {
        "tier": 4,
        "variance": 0,
        "handicap": 3,
        "id": 95,
        "types": [
            "rock",
            "ground"
        ]
    },
    "drowzee": {
        "tier": 4,
        "variance": 1,
        "handicap": 1,
        "id": 96,
        "types": [
            "psychic"
        ]
    },
    "krabby": {
        "tier": 4,
        "variance": 1,
        "handicap": -1,
        "id": 98,
        "types": [
            "water"
        ]
    },
    "voltorb": {
        "tier": 4,
        "variance": 3,
        "handicap": 0,
        "id": 100,
        "types": [
            "electric"
        ]
    },
    "exeggcute": {
        "tier": 4,
        "variance": 4,
        "handicap": -2,
        "id": 102,
        "types": [
            "grass",
            "psychic"
        ]
    },
    "cubone": {
        "tier": 4,
        "variance": 0,
        "handicap": 0,
        "id": 104,
        "types": [
            "ground"
        ]
    },
    "lickitung": {
        "tier": 6,
        "variance": 0,
        "handicap": 3,
        "id": 108,
        "types": [
            "normal"
        ]
    },
    "koffing": {
        "tier": 4,
        "variance": 2,
        "handicap": -1,
        "id": 109,
        "types": [
            "poison"
        ]
    },
    "rhyhorn": {
        "tier": 4,
        "variance": 1,
        "handicap": 3,
        "id": 111,
        "types": [
            "ground",
            "rock"
        ]
    },
    "tangela": {
        "tier": 6,
        "variance": 2,
        "handicap": -1,
        "id": 114,
        "types": [
            "grass"
        ]
    },
    "kangaskhan": {
        "tier": 8,
        "variance": 0,
        "handicap": 0,
        "id": 115,
        "types": [
            "normal"
        ]
    },
    "horsea": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 116,
        "types": [
            "water"
        ]
    },
    "goldeen": {
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 118,
        "types": [
            "water"
        ]
    },
    "staryu": {
        "tier": 4,
        "variance": 1,
        "handicap": 1,
        "id": 120,
        "types": [
            "water"
        ]
    },
    "scyther": {
        "tier": 8,
        "variance": 2,
        "handicap": -2,
        "id": 123,
        "types": [
            "bug",
            "flying"
        ]
    },
    "pinsir": {
        "tier": 8,
        "variance": 2,
        "handicap": -2,
        "id": 127,
        "types": [
            "bug"
        ]
    },
    "tauros": {
        "tier": 6,
        "variance": 0,
        "handicap": 2,
        "id": 128,
        "types": [
            "normal"
        ]
    },
    "magikarp": {
        "tier": 1,
        "variance": 0,
        "handicap": -6,
        "id": 129,
        "types": [
            "water"
        ]
    },
    "lapras": {
        "tier": 8,
        "variance": 1,
        "handicap": -1,
        "id": 131,
        "types": [
            "water",
            "ice"
        ]
    },
    "ditto": {
        "tier": 8,
        "variance": 8,
        "handicap": -8,
        "id": 132,
        "types": [
            "normal"
        ]
    },
    "eevee": {
        "tier": 5,
        "variance": 0,
        "handicap": 0,
        "id": 133,
        "types": [
            "normal"
        ]
    },
    "porygon": {
        "tier": 8,
        "variance": 4,
        "handicap": -4,
        "id": 137,
        "types": [
            "normal"
        ]
    },
    "omanyte": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 138,
        "types": [
            "rock",
            "water"
        ]
    },
    "kabuto": {
        "tier": 4,
        "variance": 0,
        "handicap": 0,
        "id": 140,
        "types": [
            "rock",
            "water"
        ]
    },
    "aerodactyl": {
        "tier": 9,
        "variance": 0,
        "handicap": -2,
        "id": 142,
        "types": [
            "rock",
            "flying"
        ]
    },
    "articuno": {
        "tier": 10,
        "variance": 2,
        "handicap": -2,
        "id": 144,
        "types": [
            "ice",
            "flying"
        ]
    },
    "zapdos": {
        "tier": 10,
        "variance": 3,
        "handicap": -3,
        "id": 145,
        "types": [
            "electric",
            "flying"
        ]
    },
    "moltres": {
        "tier": 10,
        "variance": 1,
        "handicap": -1,
        "id": 146,
        "types": [
            "fire",
            "flying"
        ]
    },
    "dratini": {
        "tier": 6,
        "variance": 0,
        "handicap": -2,
        "id": 147,
        "types": [
            "dragon"
        ]
    },
    "mewtwo": {
        "tier": 10,
        "variance": 2,
        "handicap": -2,
        "id": 150,
        "types": [
            "psychic"
        ]
    },
    "mew": {
        "tier": 10,
        "variance": 0,
        "handicap": 0,
        "id": 151,
        "types": [
            "psychic"
        ]
    },
    "ivysaur": {
        "tier": 7,
        "variance": 3,
        "handicap": -2,
        "id": 2,
        "types": [
            "grass",
            "poison"
        ]
    },
    "venusaur": {
        "tier": 9,
        "variance": 4,
        "handicap": -3,
        "id": 3,
        "types": [
            "grass",
            "poison"
        ]
    },
    "charmeleon": {
        "tier": 7,
        "variance": 0,
        "handicap": 2,
        "id": 5,
        "types": [
            "fire"
        ]
    },
    "charizard": {
        "tier": 9,
        "variance": 0,
        "handicap": 0,
        "id": 6,
        "types": [
            "fire",
            "flying"
        ]
    },
    "wartortle": {
        "tier": 7,
        "variance": 1,
        "handicap": -1,
        "id": 8,
        "types": [
            "water"
        ]
    },
    "blastoise": {
        "tier": 9,
        "variance": 1,
        "handicap": -2,
        "id": 9,
        "types": [
            "water"
        ]
    },
    "metapod": {
        "tier": 6,
        "variance": 0,
        "handicap": -4,
        "id": 11,
        "types": [
            "bug"
        ]
    },
    "butterfree": {
        "tier": 9,
        "variance": 0,
        "handicap": -8,
        "id": 12,
        "types": [
            "bug",
            "flying"
        ]
    },
    "kakuna": {
        "tier": 6,
        "variance": 1,
        "handicap": -4,
        "id": 14,
        "types": [
            "bug",
            "poison"
        ]
    },
    "beedrill": {
        "tier": 9,
        "variance": 1,
        "handicap": -8,
        "id": 15,
        "types": [
            "bug",
            "poison"
        ]
    },
    "pidgeotto": {
        "tier": 6,
        "variance": 0,
        "handicap": -1,
        "id": 17,
        "types": [
            "normal",
            "flying"
        ]
    },
    "pidgeot": {
        "tier": 9,
        "variance": 0,
        "handicap": -4,
        "id": 18,
        "types": [
            "normal",
            "flying"
        ]
    },
    "raticate": {
        "tier": 6,
        "variance": 2,
        "handicap": 2,
        "id": 20,
        "types": [
            "normal"
        ]
    },
    "fearow": {
        "tier": 6,
        "variance": 0,
        "handicap": 2,
        "id": 22,
        "types": [
            "normal",
            "flying"
        ]
    },
    "arbok": {
        "tier": 6,
        "variance": 2,
        "handicap": 0,
        "id": 24,
        "types": [
            "poison"
        ]
    },
    "pikachu": {
        "tier": 5,
        "variance": 0,
        "handicap": 0,
        "id": 25,
        "types": [
            "electric"
        ]
    },
    "raichu": {
        "tier": 7,
        "variance": 0,
        "handicap": 2,
        "id": 26,
        "types": [
            "electric"
        ]
    },
    "sandslash": {
        "tier": 7,
        "variance": 0,
        "handicap": 0,
        "id": 28,
        "types": [
            "ground"
        ]
    },
    "nidorina": {
        "tier": 6,
        "variance": 0,
        "handicap": -2,
        "id": 30,
        "types": [
            "poison"
        ]
    },
    "nidoqueen": {
        "tier": 9,
        "variance": 0,
        "handicap": -2,
        "id": 31,
        "types": [
            "poison",
            "ground"
        ]
    },
    "nidorino": {
        "tier": 6,
        "variance": 2,
        "handicap": 0,
        "id": 33,
        "types": [
            "poison"
        ]
    },
    "nidoking": {
        "tier": 9,
        "variance": 1,
        "handicap": -3,
        "id": 34,
        "types": [
            "poison",
            "ground"
        ]
    },
    "clefairy": {
        "tier": 6,
        "variance": 3,
        "handicap": 0,
        "id": 35,
        "types": [
            "fairy"
        ]
    },
    "clefable": {
        "tier": 7,
        "variance": 4,
        "handicap": 1,
        "id": 36,
        "types": [
            "fairy"
        ]
    },
    "ninetales": {
        "tier": 7,
        "variance": 0,
        "handicap": 1,
        "id": 38,
        "types": [
            "fire"
        ]
    },
    "jigglypuff": {
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 39,
        "types": [
            "normal",
            "fairy"
        ]
    },
    "wigglytuff": {
        "tier": 7,
        "variance": 1,
        "handicap": 0,
        "id": 40,
        "types": [
            "normal",
            "fairy"
        ]
    },
    "golbat": {
        "tier": 7,
        "variance": 2,
        "handicap": -2,
        "id": 42,
        "types": [
            "poison",
            "flying"
        ]
    },
    "gloom": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 44,
        "types": [
            "grass",
            "poison"
        ]
    },
    "vileplume": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 45,
        "types": [
            "grass",
            "poison"
        ]
    },
    "parasect": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 47,
        "types": [
            "bug",
            "grass"
        ]
    },
    "venomoth": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 49,
        "types": [
            "bug",
            "poison"
        ]
    },
    "dugtrio": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 51,
        "types": [
            "ground"
        ]
    },
    "persian": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 53,
        "types": [
            "normal"
        ]
    },
    "golduck": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 55,
        "types": [
            "water"
        ]
    },
    "primeape": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 57,
        "types": [
            "fighting"
        ]
    },
    "arcanine": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 59,
        "types": [
            "fire"
        ]
    },
    "poliwhirl": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 61,
        "types": [
            "water"
        ]
    },
    "poliwrath": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 62,
        "types": [
            "water",
            "fighting"
        ]
    },
    "kadabra": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 64,
        "types": [
            "psychic"
        ]
    },
    "alakazam": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 65,
        "types": [
            "psychic"
        ]
    },
    "machoke": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 67,
        "types": [
            "fighting"
        ]
    },
    "machamp": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 68,
        "types": [
            "fighting"
        ]
    },
    "weepinbell": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 70,
        "types": [
            "grass",
            "poison"
        ]
    },
    "victreebel": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 71,
        "types": [
            "grass",
            "poison"
        ]
    },
    "tentacruel": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 73,
        "types": [
            "water",
            "poison"
        ]
    },
    "graveler": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 75,
        "types": [
            "rock",
            "ground"
        ]
    },
    "golem": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 76,
        "types": [
            "rock",
            "ground"
        ]
    },
    "rapidash": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 78,
        "types": [
            "fire"
        ]
    },
    "slowbro": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 80,
        "types": [
            "water",
            "psychic"
        ]
    },
    "magneton": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 82,
        "types": [
            "electric",
            "steel"
        ]
    },
    "dodrio": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 85,
        "types": [
            "normal",
            "flying"
        ]
    },
    "dewgong": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 87,
        "types": [
            "water",
            "ice"
        ]
    },
    "muk": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 89,
        "types": [
            "poison"
        ]
    },
    "cloyster": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 91,
        "types": [
            "water",
            "ice"
        ]
    },
    "haunter": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 93,
        "types": [
            "ghost",
            "poison"
        ]
    },
    "gengar": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 94,
        "types": [
            "ghost",
            "poison"
        ]
    },
    "hypno": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 97,
        "types": [
            "psychic"
        ]
    },
    "kingler": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 99,
        "types": [
            "water"
        ]
    },
    "electrode": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 101,
        "types": [
            "electric"
        ]
    },
    "exeggutor": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 103,
        "types": [
            "grass",
            "psychic"
        ]
    },
    "marowak": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 105,
        "types": [
            "ground"
        ]
    },
    "hitmonlee": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 106,
        "types": [
            "fighting"
        ]
    },
    "hitmonchan": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 107,
        "types": [
            "fighting"
        ]
    },
    "weezing": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 110,
        "types": [
            "poison"
        ]
    },
    "rhydon": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 112,
        "types": [
            "ground",
            "rock"
        ]
    },
    "chansey": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 113,
        "types": [
            "normal"
        ]
    },
    "seadra": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 117,
        "types": [
            "water"
        ]
    },
    "seaking": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 119,
        "types": [
            "water"
        ]
    },
    "starmie": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 121,
        "types": [
            "water",
            "psychic"
        ]
    },
    "mr-mime": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 122,
        "types": [
            "psychic",
            "fairy"
        ]
    },
    "jynx": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 124,
        "types": [
            "ice",
            "psychic"
        ]
    },
    "electabuzz": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 125,
        "types": [
            "electric"
        ]
    },
    "magmar": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 126,
        "types": [
            "fire"
        ]
    },
    "gyarados": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 130,
        "types": [
            "water",
            "flying"
        ]
    },
    "vaporeon": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 134,
        "types": [
            "water"
        ]
    },
    "jolteon": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 135,
        "types": [
            "electric"
        ]
    },
    "flareon": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 136,
        "types": [
            "fire"
        ]
    },
    "omastar": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 139,
        "types": [
            "rock",
            "water"
        ]
    },
    "kabutops": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 141,
        "types": [
            "rock",
            "water"
        ]
    },
    "snorlax": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 143,
        "types": [
            "normal"
        ]
    },
    "dragonair": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 148,
        "types": [
            "dragon"
        ]
    },
    "dragonite": {
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 149,
        "types": [
            "dragon",
            "flying"
        ]
    }
}

export default pokemon;