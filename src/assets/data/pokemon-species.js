let pokemon = {};

pokemon.statAllocations = [10, 12, 14, 15, 16, 18, 20, 23, 26, 29];

// variance = range of stats that the pokemon has a chance to be randomly added or subtracted
// handicap = number of stats always added to the pokemons stat allocation
pokemon.data = {
    "bulbasaur": {
        type: 'grass',
        tier: 5,
        variance: 3,
        handicap: -2
    },
    "charmander": {
        type: 'fire',
        tier: 5,
        variance: 0,
        handicap: 2
    },
    "squirtle": {
        type: 'water',
        tier: 5,
        variance: 1,
        handicap: 0
    },
    "caterpie": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "weedle": {
        type: 'grass',
        tier: 1,
        variance: 1,
        handicap: 0
    },
    "pidgey": {
        type: 'normal',
        tier: 2,
        variance: 0,
        handicap: 0
    },
    "rattata": {
        type: 'normal',
        tier: 2,
        variance: 0,
        handicap: 0
    },
    "spearow": {
        type: 'normal',
        tier: 3,
        variance: 0,
        handicap: 0
    },
    "ekans": {
        type: 'psychic',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "sandshrew": {
        type: 'fighting',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "nidoran-f": {
        type: 'grass',
        tier: 5,
        variance: 0,
        handicap: -2
    },
    "nidoran-m": {
        type: 'grass',
        tier: 5,
        variance: 2,
        handicap: 0
    },
    "vulpix": {
        type: 'fire',
        tier: 4,
        variance: 0,
        handicap: 2
    },
    "zubat": {
        type: 'psychic',
        tier: 3,
        variance: 2,
        handicap: 0
    },
    "oddish": {
        type: 'grass',
        tier: 4,
        variance: 3,
        handicap: -2
    },
    "paras": {
        type: 'grass',
        tier: 4,
        variance: 1,
        handicap: -1
    },
    "venonat": {
        type: 'grass',
        tier: 4,
        variance: 1,
        handicap: -2
    },
    "diglett": {
        type: 'fighting',
        tier: 2,
        variance: 1,
        handicap: 0
    },
    "meowth": {
        type: 'normal',
        tier: 5,
        variance: 4,
        handicap: -1
    },
    "psyduck": {
        type: 'water',
        tier: 4,
        variance: 2,
        handicap: -2
    },
    "mankey": {
        type: 'fighting',
        tier: 4,
        variance: 2,
        handicap: 0
    },
    "growlithe": {
        type: 'fire',
        tier: 4,
        variance: 0,
        handicap: 2
    },
    "poliwag": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "abra": {
        type: 'psychic',
        tier: 4,
        variance: 5,
        handicap: -3
    },
    "machop": {
        type: 'fighting',
        tier: 4,
        variance: 0,
        handicap: 1
    },
    "bellsprout": {
        type: 'grass',
        tier: 4,
        variance: 2,
        handicap: -2
    },
    "tentacool": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "geodude": {
        type: 'fighting',
        tier: 4,
        variance: 0,
        handicap: 1
    },
    "ponyta": {
        type: 'fire',
        tier: 4,
        variance: 2,
        handicap: 2
    },
    "slowpoke": {
        type: 'psychic',
        tier: 4,
        variance: 6,
        handicap: -5
    },
    "magnemite": {
        type: 'lightning',
        tier: 4,
        variance: 0,
        handicap: 1
    },
    "farfetchd": {
        type: 'normal',
        tier: 6,
        variance: 4,
        handicap: 0
    },
    "doduo": {
        type: 'normal',
        tier: 6,
        variance: 0,
        handicap: -2
    },
    "seel": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "grimer": {
        type: 'psychic',
        tier: 4,
        variance: 2,
        handicap: 0
    },
    "shellder": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "gastly": {
        type: 'psychic',
        tier: 4,
        variance: 2,
        handicap: -1
    },
    "onix": {
        type: 'fighting',
        tier: 4,
        variance: 0,
        handicap: 3
    },
    "drowzee": {
        type: 'psychic',
        tier: 4,
        variance: 1,
        handicap: 1
    },
    "krabby": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: -1
    },
    "voltorb": {
        type: 'lightning',
        tier: 4,
        variance: 3,
        handicap: 0
    },
    "exeggcute": {
        type: 'grass',
        tier: 4,
        variance: 4,
        handicap: -2
    },
    "cubone": {
        type: 'fighting',
        tier: 4,
        variance: 0,
        handicap: 0
    },
    "lickitung": {
        type: 'normal',
        tier: 6,
        variance: 0,
        handicap: 3
    },
    "koffing": {
        type: 'psychic',
        tier: 4,
        variance: 2,
        handicap: -1
    },
    "rhyhorn": {
        type: 'fighting',
        tier: 4,
        variance: 1,
        handicap: 3
    },
    "tangela": {
        type: 'grass',
        tier: 6,
        variance: 2,
        handicap: -1
    },
    "kangaskhan": {
        type: 'normal',
        tier: 8,
        variance: 0,
        handicap: 0
    },
    "horsea": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "goldeen": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 0
    },
    "staryu": {
        type: 'water',
        tier: 4,
        variance: 1,
        handicap: 1
    },
    "scyther": {
        type: 'grass',
        tier: 8,
        variance: 2,
        handicap: -2
    },
    "pinsir": {
        type: 'grass',
        tier: 8,
        variance: 2,
        handicap: -2
    },
    "tauros": {
        type: 'normal',
        tier: 6,
        variance: 0,
        handicap: 2
    },
    "magikarp": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: -6
    },
    "lapras": {
        type: 'water',
        tier: 8,
        variance: 1,
        handicap: -1
    },
    "ditto": {
        type: 'normal',
        tier: 8,
        variance: 8,
        handicap: -8
    },
    "eevee": {
        type: 'normal',
        tier: 5,
        variance: 0,
        handicap: 0
    },
    "porygon": {
        type: 'normal',
        tier: 8,
        variance: 4,
        handicap: -4
    },
    "omanyte": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "kabuto": {
        type: 'fighting',
        tier: 4,
        variance: 0,
        handicap: 0
    },
    "aerodactyl": {
        type: 'fighting',
        tier: 9,
        variance: 0,
        handicap: -2
    },
    "articuno": {
        type: 'water',
        tier: 10,
        variance: 2,
        handicap: -2
    },
    "zapdos": {
        type: 'lightning',
        tier: 10,
        variance: 3,
        handicap: -3
    },
    "moltres": {
        type: 'fire',
        tier: 10,
        variance: 1,
        handicap: -1
    },
    "dratini": {
        type: 'normal',
        tier: 6,
        variance: 0,
        handicap: -2
    },
    "mewtwo": {
        type: 'psychic',
        tier: 10,
        variance: 2,
        handicap: -2
    },
    "mew": {
        type: 'psychic',
        tier: 10,
        variance: 0,
        handicap: 0
    },
    "ivysaur": {
        type: 'grass',
        tier: 7,
        variance: 3,
        handicap: -2
    },
    "venusaur": {
        type: 'grass',
        tier: 9,
        variance: 4,
        handicap: -3
    },
    "charmeleon": {
        type: 'fire',
        tier: 7,
        variance: 0,
        handicap: 2
    },
    "charizard": {
        type: 'fire',
        tier: 9,
        variance: 0,
        handicap: 0
    },
    "wartortle": {
        type: 'water',
        tier: 7,
        variance: 1,
        handicap: -1
    },
    "blastoise": {
        type: 'water',
        tier: 9,
        variance: 1,
        handicap: -2
    },
    "metapod": {
        type: 'grass',
        tier: 6,
        variance: 0,
        handicap: -4
    },
    "butterfree": {
        type: 'grass',
        tier: 9,
        variance: 0,
        handicap: -8
    },
    "kakuna": {
        type: 'grass',
        tier: 6,
        variance: 1,
        handicap: -4
    },
    "beedrill": {
        type: 'grass',
        tier: 9,
        variance: 1,
        handicap: -8
    },
    "pidgeotto": {
        type: 'normal',
        tier: 6,
        variance: 0,
        handicap: -1
    },
    "pidgeot": {
        type: 'normal',
        tier: 9,
        variance: 0,
        handicap: -4
    },
    "raticate": {
        type: 'normal',
        tier: 6,
        variance: 2,
        handicap: 2
    },
    "fearow": {
        type: 'normal',
        tier: 6,
        variance: 0,
        handicap: 2
    },
    "arbok": {
        type: 'psychic',
        tier: 6,
        variance: 2,
        handicap: 0
    },
    "pikachu": {
        type: 'lightning',
        tier: 5,
        variance: 0,
        handicap: 0
    },
    "raichu": {
        type: 'lightning',
        tier: 7,
        variance: 0,
        handicap: 2
    },
    "sandslash": {
        type: 'fighting',
        tier: 7,
        variance: 0,
        handicap: 0
    },
    "nidorina": {
        type: 'grass',
        tier: 6,
        variance: 0,
        handicap: -2
    },
    "nidoqueen": {
        type: 'grass',
        tier: 9,
        variance: 0,
        handicap: -2
    },
    "nidorino": {
        type: 'grass',
        tier: 6,
        variance: 2,
        handicap: 0
    },
    "nidoking": {
        type: 'grass',
        tier: 9,
        variance: 1,
        handicap: -3
    },
    "clefairy": {
        type: 'normal',
        tier: 6,
        variance: 3,
        handicap: 0
    },
    "clefable": {
        type: 'normal',
        tier: 7,
        variance: 4,
        handicap: 1
    },
    "ninetales": {
        type: 'fire',
        tier: 7,
        variance: 0,
        handicap: 1
    },
    "jigglypuff": {
        type: 'normal',
        tier: 4,
        variance: 0,
        handicap: 1
    },
    "wigglytuff": {
        type: 'normal',
        tier: 7,
        variance: 1,
        handicap: 0
    },
    "golbat": {
        type: 'psychic',
        tier: 7,
        variance: 2,
        handicap: -2
    },
    "gloom": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "vileplume": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "parasect": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "venomoth": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "dugtrio": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "persian": {
        type: 'normal',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "golduck": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "primeape": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "arcanine": {
        type: 'fire',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "poliwhirl": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "poliwrath": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "kadabra": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "alakazam": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "machoke": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "machamp": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "weepinbell": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "victreebel": {
        type: 'grass',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "tentacruel": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "graveler": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "golem": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "rapidash": {
        type: 'fire',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "slowbro": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "magneton": {
        type: 'lightning',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "dodrio": {
        type: 'normal',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "dewgong": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "muk": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "cloyster": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "haunter": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "gengar": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "hypno": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "kingler": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "electrode": {
        type: 'lightning',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "exeggutor": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "marowak": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "hitmonlee": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "hitmonchan": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "weezing": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "rhydon": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "chansey": {
        type: 'normal',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "seadra": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "seaking": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "starmie": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "mr-mime": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "jynx": {
        type: 'psychic',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "electabuzz": {
        type: 'lightning',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "magmar": {
        type: 'fire',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "gyarados": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "vaporeon": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "jolteon": {
        type: 'lightning',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "flareon": {
        type: 'fire',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "omastar": {
        type: 'water',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "kabutops": {
        type: 'fighting',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "snorlax": {
        type: 'normal',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "dragonair": {
        type: 'normal',
        tier: 1,
        variance: 0,
        handicap: 0
    },
    "dragonite": {
        type: 'normal',
        tier: 1,
        variance: 0,
        handicap: 0
    }
}

export default pokemon;