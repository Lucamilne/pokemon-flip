<template>
  <div class="grid shadow grid-cols-3 cells" id="grid">
    <div v-for="(value, key) in  cells " :key="key" :class="`relative dropzone bg-zinc-800 border border-4 border-zinc-400 p-2 aspect-square ${value.class}`" :data-cell="key" :ref="key">
      <img v-if="value.element" class="absolute w-1/2 h-1/2 inset-1/2 transform -translate-x-1/2 -translate-y-1/2" :src="tiles[value.element]">
    </div>
  </div>
</template>

<script>
import BugTypeTile from "../assets/icons/types/Bug_icon_Sleep.png";
import DragonTypeTile from "../assets/icons/types/Dragon_icon_Sleep.png";
import ElectricTypeTile from "../assets/icons/types/Electric_icon_Sleep.png";
import FairyTypeTile from "../assets/icons/types/Fairy_icon_Sleep.png";
import FightingTypeTile from "../assets/icons/types/Fighting_icon_Sleep.png";
import FireTypeTile from "../assets/icons/types/Fire_icon_Sleep.png";
import FlyingTypeTile from "../assets/icons/types/Flying_icon_Sleep.png";
import GhostTypeTile from "../assets/icons/types/Ghost_icon_Sleep.png";
import GrassTypeTile from "../assets/icons/types/Grass_icon_Sleep.png";
import GroundTypeTile from "../assets/icons/types/Ground_icon_Sleep.png";
import IceTypeTile from "../assets/icons/types/Ice_icon_Sleep.png";
import NormalTypeTile from "../assets/icons/types/Normal_icon_Sleep.png";
import PoisonTypeTile from "../assets/icons/types/Poison_icon_Sleep.png";
import PsychicTypeTile from "../assets/icons/types/Psychic_icon_Sleep.png";
import RockTypeTile from "../assets/icons/types/Rock_icon_Sleep.png";
import SteelTypeTile from "../assets/icons/types/Steel_icon_Sleep.png";
import WaterTypeTile from "../assets/icons/types/Water_icon_Sleep.png";

export default {
  name: 'Grid',
  props: {
    cells: Object
  },
  data: () => ({
    tiles: {
      bug: BugTypeTile,
      dragon: DragonTypeTile,
      electric: ElectricTypeTile,
      fairy: FairyTypeTile,
      fighting: FightingTypeTile,
      fire: FireTypeTile,
      flying: FlyingTypeTile,
      ghost: GhostTypeTile,
      grass: GrassTypeTile,
      ground: GroundTypeTile,
      ice: IceTypeTile,
      normal: NormalTypeTile,
      poison: PoisonTypeTile,
      psychic: PsychicTypeTile,
      rock: RockTypeTile,
      steel: SteelTypeTile,
      water: WaterTypeTile
    },
  }),
  methods: {
    getElementTile(element) {
      return `bg-[url('@/assets/icons/types/${element}_Tile_Sl_icon_Sleep.g')]`
    }
  }
}
</script>