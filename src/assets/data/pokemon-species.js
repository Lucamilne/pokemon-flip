let pokemon = {};

pokemon.statAllocations = [10, 12, 14, 15, 16, 18, 20, 23, 26, 29];

// variance = range of stats that the pokemon has a chance to be randomly added or subtracted
// handicap = number of stats always added to the pokemons stat allocation
pokemon.data = {
    "bulbasaur": {
        "type": "grass",
        "tier": 5,
        "variance": 3,
        "handicap": -2,
        "id": 1
    },
    "charmander": {
        "type": "fire",
        "tier": 5,
        "variance": 0,
        "handicap": 2,
        "id": 4
    },
    "squirtle": {
        "type": "water",
        "tier": 5,
        "variance": 1,
        "handicap": 0,
        "id": 7
    },
    "caterpie": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 10
    },
    "weedle": {
        "type": "grass",
        "tier": 1,
        "variance": 1,
        "handicap": 0,
        "id": 13
    },
    "pidgey": {
        "type": "normal",
        "tier": 2,
        "variance": 0,
        "handicap": 0,
        "id": 16
    },
    "rattata": {
        "type": "normal",
        "tier": 2,
        "variance": 0,
        "handicap": 0,
        "id": 19
    },
    "spearow": {
        "type": "normal",
        "tier": 3,
        "variance": 0,
        "handicap": 0,
        "id": 21
    },
    "ekans": {
        "type": "psychic",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 23
    },
    "sandshrew": {
        "type": "fighting",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 27
    },
    "nidoran-f": {
        "type": "grass",
        "tier": 5,
        "variance": 0,
        "handicap": -2,
        "id": 29
    },
    "nidoran-m": {
        "type": "grass",
        "tier": 5,
        "variance": 2,
        "handicap": 0,
        "id": 32
    },
    "vulpix": {
        "type": "fire",
        "tier": 4,
        "variance": 0,
        "handicap": 2,
        "id": 37
    },
    "zubat": {
        "type": "psychic",
        "tier": 3,
        "variance": 2,
        "handicap": 0,
        "id": 41
    },
    "oddish": {
        "type": "grass",
        "tier": 4,
        "variance": 3,
        "handicap": -2,
        "id": 43
    },
    "paras": {
        "type": "grass",
        "tier": 4,
        "variance": 1,
        "handicap": -1,
        "id": 46
    },
    "venonat": {
        "type": "grass",
        "tier": 4,
        "variance": 1,
        "handicap": -2,
        "id": 48
    },
    "diglett": {
        "type": "fighting",
        "tier": 2,
        "variance": 1,
        "handicap": 0,
        "id": 50
    },
    "meowth": {
        "type": "normal",
        "tier": 5,
        "variance": 4,
        "handicap": -1,
        "id": 52
    },
    "psyduck": {
        "type": "water",
        "tier": 4,
        "variance": 2,
        "handicap": -2,
        "id": 54
    },
    "mankey": {
        "type": "fighting",
        "tier": 4,
        "variance": 2,
        "handicap": 0,
        "id": 56
    },
    "growlithe": {
        "type": "fire",
        "tier": 4,
        "variance": 0,
        "handicap": 2,
        "id": 58
    },
    "poliwag": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 60
    },
    "abra": {
        "type": "psychic",
        "tier": 4,
        "variance": 5,
        "handicap": -3,
        "id": 63
    },
    "machop": {
        "type": "fighting",
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 66
    },
    "bellsprout": {
        "type": "grass",
        "tier": 4,
        "variance": 2,
        "handicap": -2,
        "id": 69
    },
    "tentacool": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 72
    },
    "geodude": {
        "type": "fighting",
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 74
    },
    "ponyta": {
        "type": "fire",
        "tier": 4,
        "variance": 2,
        "handicap": 2,
        "id": 77
    },
    "slowpoke": {
        "type": "psychic",
        "tier": 4,
        "variance": 6,
        "handicap": -5,
        "id": 79
    },
    "magnemite": {
        "type": "lightning",
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 81
    },
    "farfetchd": {
        "type": "normal",
        "tier": 6,
        "variance": 4,
        "handicap": 0,
        "id": 83
    },
    "doduo": {
        "type": "normal",
        "tier": 6,
        "variance": 0,
        "handicap": -2,
        "id": 84
    },
    "seel": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 86
    },
    "grimer": {
        "type": "psychic",
        "tier": 4,
        "variance": 2,
        "handicap": 0,
        "id": 88
    },
    "shellder": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 90
    },
    "gastly": {
        "type": "psychic",
        "tier": 4,
        "variance": 2,
        "handicap": -1,
        "id": 92
    },
    "onix": {
        "type": "fighting",
        "tier": 4,
        "variance": 0,
        "handicap": 3,
        "id": 95
    },
    "drowzee": {
        "type": "psychic",
        "tier": 4,
        "variance": 1,
        "handicap": 1,
        "id": 96
    },
    "krabby": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": -1,
        "id": 98
    },
    "voltorb": {
        "type": "lightning",
        "tier": 4,
        "variance": 3,
        "handicap": 0,
        "id": 100
    },
    "exeggcute": {
        "type": "grass",
        "tier": 4,
        "variance": 4,
        "handicap": -2,
        "id": 102
    },
    "cubone": {
        "type": "fighting",
        "tier": 4,
        "variance": 0,
        "handicap": 0,
        "id": 104
    },
    "lickitung": {
        "type": "normal",
        "tier": 6,
        "variance": 0,
        "handicap": 3,
        "id": 108
    },
    "koffing": {
        "type": "psychic",
        "tier": 4,
        "variance": 2,
        "handicap": -1,
        "id": 109
    },
    "rhyhorn": {
        "type": "fighting",
        "tier": 4,
        "variance": 1,
        "handicap": 3,
        "id": 111
    },
    "tangela": {
        "type": "grass",
        "tier": 6,
        "variance": 2,
        "handicap": -1,
        "id": 114
    },
    "kangaskhan": {
        "type": "normal",
        "tier": 8,
        "variance": 0,
        "handicap": 0,
        "id": 115
    },
    "horsea": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 116
    },
    "goldeen": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 0,
        "id": 118
    },
    "staryu": {
        "type": "water",
        "tier": 4,
        "variance": 1,
        "handicap": 1,
        "id": 120
    },
    "scyther": {
        "type": "grass",
        "tier": 8,
        "variance": 2,
        "handicap": -2,
        "id": 123
    },
    "pinsir": {
        "type": "grass",
        "tier": 8,
        "variance": 2,
        "handicap": -2,
        "id": 127
    },
    "tauros": {
        "type": "normal",
        "tier": 6,
        "variance": 0,
        "handicap": 2,
        "id": 128
    },
    "magikarp": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": -6,
        "id": 129
    },
    "lapras": {
        "type": "water",
        "tier": 8,
        "variance": 1,
        "handicap": -1,
        "id": 131
    },
    "ditto": {
        "type": "normal",
        "tier": 8,
        "variance": 8,
        "handicap": -8,
        "id": 132
    },
    "eevee": {
        "type": "normal",
        "tier": 5,
        "variance": 0,
        "handicap": 0,
        "id": 133
    },
    "porygon": {
        "type": "normal",
        "tier": 8,
        "variance": 4,
        "handicap": -4,
        "id": 137
    },
    "omanyte": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 138
    },
    "kabuto": {
        "type": "fighting",
        "tier": 4,
        "variance": 0,
        "handicap": 0,
        "id": 140
    },
    "aerodactyl": {
        "type": "fighting",
        "tier": 9,
        "variance": 0,
        "handicap": -2,
        "id": 142
    },
    "articuno": {
        "type": "water",
        "tier": 10,
        "variance": 2,
        "handicap": -2,
        "id": 144
    },
    "zapdos": {
        "type": "lightning",
        "tier": 10,
        "variance": 3,
        "handicap": -3,
        "id": 145
    },
    "moltres": {
        "type": "fire",
        "tier": 10,
        "variance": 1,
        "handicap": -1,
        "id": 146
    },
    "dratini": {
        "type": "normal",
        "tier": 6,
        "variance": 0,
        "handicap": -2,
        "id": 147
    },
    "mewtwo": {
        "type": "psychic",
        "tier": 10,
        "variance": 2,
        "handicap": -2,
        "id": 150
    },
    "mew": {
        "type": "psychic",
        "tier": 10,
        "variance": 0,
        "handicap": 0,
        "id": 151
    },
    "ivysaur": {
        "type": "grass",
        "tier": 7,
        "variance": 3,
        "handicap": -2,
        "id": 2
    },
    "venusaur": {
        "type": "grass",
        "tier": 9,
        "variance": 4,
        "handicap": -3,
        "id": 3
    },
    "charmeleon": {
        "type": "fire",
        "tier": 7,
        "variance": 0,
        "handicap": 2,
        "id": 5
    },
    "charizard": {
        "type": "fire",
        "tier": 9,
        "variance": 0,
        "handicap": 0,
        "id": 6
    },
    "wartortle": {
        "type": "water",
        "tier": 7,
        "variance": 1,
        "handicap": -1,
        "id": 8
    },
    "blastoise": {
        "type": "water",
        "tier": 9,
        "variance": 1,
        "handicap": -2,
        "id": 9
    },
    "metapod": {
        "type": "grass",
        "tier": 6,
        "variance": 0,
        "handicap": -4,
        "id": 11
    },
    "butterfree": {
        "type": "grass",
        "tier": 9,
        "variance": 0,
        "handicap": -8,
        "id": 12
    },
    "kakuna": {
        "type": "grass",
        "tier": 6,
        "variance": 1,
        "handicap": -4,
        "id": 14
    },
    "beedrill": {
        "type": "grass",
        "tier": 9,
        "variance": 1,
        "handicap": -8,
        "id": 15
    },
    "pidgeotto": {
        "type": "normal",
        "tier": 6,
        "variance": 0,
        "handicap": -1,
        "id": 17
    },
    "pidgeot": {
        "type": "normal",
        "tier": 9,
        "variance": 0,
        "handicap": -4,
        "id": 18
    },
    "raticate": {
        "type": "normal",
        "tier": 6,
        "variance": 2,
        "handicap": 2,
        "id": 20
    },
    "fearow": {
        "type": "normal",
        "tier": 6,
        "variance": 0,
        "handicap": 2,
        "id": 22
    },
    "arbok": {
        "type": "psychic",
        "tier": 6,
        "variance": 2,
        "handicap": 0,
        "id": 24
    },
    "pikachu": {
        "type": "lightning",
        "tier": 5,
        "variance": 0,
        "handicap": 0,
        "id": 25
    },
    "raichu": {
        "type": "lightning",
        "tier": 7,
        "variance": 0,
        "handicap": 2,
        "id": 26
    },
    "sandslash": {
        "type": "fighting",
        "tier": 7,
        "variance": 0,
        "handicap": 0,
        "id": 28
    },
    "nidorina": {
        "type": "grass",
        "tier": 6,
        "variance": 0,
        "handicap": -2,
        "id": 30
    },
    "nidoqueen": {
        "type": "grass",
        "tier": 9,
        "variance": 0,
        "handicap": -2,
        "id": 31
    },
    "nidorino": {
        "type": "grass",
        "tier": 6,
        "variance": 2,
        "handicap": 0,
        "id": 33
    },
    "nidoking": {
        "type": "grass",
        "tier": 9,
        "variance": 1,
        "handicap": -3,
        "id": 34
    },
    "clefairy": {
        "type": "normal",
        "tier": 6,
        "variance": 3,
        "handicap": 0,
        "id": 35
    },
    "clefable": {
        "type": "normal",
        "tier": 7,
        "variance": 4,
        "handicap": 1,
        "id": 36
    },
    "ninetales": {
        "type": "fire",
        "tier": 7,
        "variance": 0,
        "handicap": 1,
        "id": 38
    },
    "jigglypuff": {
        "type": "normal",
        "tier": 4,
        "variance": 0,
        "handicap": 1,
        "id": 39
    },
    "wigglytuff": {
        "type": "normal",
        "tier": 7,
        "variance": 1,
        "handicap": 0,
        "id": 40
    },
    "golbat": {
        "type": "psychic",
        "tier": 7,
        "variance": 2,
        "handicap": -2,
        "id": 42
    },
    "gloom": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 44
    },
    "vileplume": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 45
    },
    "parasect": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 47
    },
    "venomoth": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 49
    },
    "dugtrio": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 51
    },
    "persian": {
        "type": "normal",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 53
    },
    "golduck": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 55
    },
    "primeape": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 57
    },
    "arcanine": {
        "type": "fire",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 59
    },
    "poliwhirl": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 61
    },
    "poliwrath": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 62
    },
    "kadabra": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 64
    },
    "alakazam": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 65
    },
    "machoke": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 67
    },
    "machamp": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 68
    },
    "weepinbell": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 70
    },
    "victreebel": {
        "type": "grass",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 71
    },
    "tentacruel": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 73
    },
    "graveler": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 75
    },
    "golem": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 76
    },
    "rapidash": {
        "type": "fire",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 78
    },
    "slowbro": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 80
    },
    "magneton": {
        "type": "lightning",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 82
    },
    "dodrio": {
        "type": "normal",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 85
    },
    "dewgong": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 87
    },
    "muk": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 89
    },
    "cloyster": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 91
    },
    "haunter": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 93
    },
    "gengar": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 94
    },
    "hypno": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 97
    },
    "kingler": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 99
    },
    "electrode": {
        "type": "lightning",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 101
    },
    "exeggutor": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 103
    },
    "marowak": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 105
    },
    "hitmonlee": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 106
    },
    "hitmonchan": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 107
    },
    "weezing": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 110
    },
    "rhydon": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 112
    },
    "chansey": {
        "type": "normal",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 113
    },
    "seadra": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 117
    },
    "seaking": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 119
    },
    "starmie": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 121
    },
    "mr-mime": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 122
    },
    "jynx": {
        "type": "psychic",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 124
    },
    "electabuzz": {
        "type": "lightning",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 125
    },
    "magmar": {
        "type": "fire",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 126
    },
    "gyarados": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 130
    },
    "vaporeon": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 134
    },
    "jolteon": {
        "type": "lightning",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 135
    },
    "flareon": {
        "type": "fire",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 136
    },
    "omastar": {
        "type": "water",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 139
    },
    "kabutops": {
        "type": "fighting",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 141
    },
    "snorlax": {
        "type": "normal",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 143
    },
    "dragonair": {
        "type": "normal",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 148
    },
    "dragonite": {
        "type": "normal",
        "tier": 1,
        "variance": 0,
        "handicap": 0,
        "id": 149
    }
}

export default pokemon;