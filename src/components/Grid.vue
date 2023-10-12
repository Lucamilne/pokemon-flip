<template>
  <div class="grid shadow grid-cols-3 cells" id="grid">
    <div v-for="(value, key) in  cells " :key="key" :class="`relative dropzone aspect-square border-2 border-gray-500 p-2 ${value.class} ${value.element ? textures[value.element] : 'bg-white'}`" :data-cell="key" :ref="key">
      <img v-if="value.element" class="absolute w-1/3 h-1/3 inset-1/2 transform -translate-x-1/2 -translate-y-1/2" :src="tiles[value.element]">
    </div>
  </div>
</template>

<script>
import BugTypeIcon from "../assets/icons/types/BugIC_SM.png";
import DragonTypeIcon from "../assets/icons/types/DragonIC_SM.png";
import ElectricTypeIcon from "../assets/icons/types/ElectricIC_SM.png";
import FairyTypeIcon from "../assets/icons/types/FairyIC_SM.png";
import FightingTypeIcon from "../assets/icons/types/FightingIC_SM.png";
import FireTypeIcon from "../assets/icons/types/FireIC_SM.png";
import FlyingTypeIcon from "../assets/icons/types/FlyingIC_SM.png";
import GhostTypeIcon from "../assets/icons/types/GhostIC_SM.png";
import GrassTypeIcon from "../assets/icons/types/GrassIC_SM.png";
import GroundTypeIcon from "../assets/icons/types/GroundIC_SM.png";
import IceTypeIcon from "../assets/icons/types/IceIC_SM.png";
import NormalTypeIcon from "../assets/icons/types/NormalIC_SM.png";
import PoisonTypeIcon from "../assets/icons/types/PoisonIC_SM.png";
import PsychicTypeIcon from "../assets/icons/types/PsychicIC_SM.png";
import RockTypeIcon from "../assets/icons/types/RockIC_SM.png";
import SteelTypeIcon from "../assets/icons/types/SteelIC_SM.png";
import WaterTypeIcon from "../assets/icons/types/WaterIC_SM.png";
import BugTypeTile from "../assets/icons/types/bug_icon_Sleep.png";
import DragonTypeTile from "../assets/icons/types/dragon_icon_Sleep.png";
import ElectricTypeTile from "../assets/icons/types/electric_icon_Sleep.png";
import FairyTypeTile from "../assets/icons/types/fairy_icon_Sleep.png";
import FightingTypeTile from "../assets/icons/types/fighting_icon_Sleep.png";
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
    icons: {
      bug: BugTypeIcon,
      dragon: DragonTypeIcon,
      electric: ElectricTypeIcon,
      fairy: FairyTypeIcon,
      fighting: FightingTypeIcon,
      fire: FireTypeIcon,
      flying: FlyingTypeIcon,
      ghost: GhostTypeIcon,
      grass: GrassTypeIcon,
      ground: GroundTypeIcon,
      ice: IceTypeIcon,
      normal: NormalTypeIcon,
      poison: PoisonTypeIcon,
      psychic: PsychicTypeIcon,
      rock: RockTypeIcon,
      steel: SteelTypeIcon,
      water: WaterTypeIcon
    },
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
    textures: {
      bug: 'bg-gradient-to-br from-bug to-bug-600',
      dragon: 'bg-gradient-to-br from-dragon to-dragon-600',
      electric: 'bg-gradient-to-br from-electric to-electric-600',
      fairy: 'bg-gradient-to-br from-fairy to-fairy-600',
      fighting: 'bg-gradient-to-br from-fighting to-fighting-600',
      fire: 'bg-gradient-to-br from-fire to-fire-600',
      flying: 'bg-gradient-to-br from-flying to-flying-600',
      ghost: 'bg-gradient-to-br from-ghost to-ghost-600',
      grass: 'bg-gradient-to-br from-grass to-grass-600',
      ground: 'bg-gradient-to-br from-ground to-ground-600',
      ice: 'bg-gradient-to-br from-ice to-ice-600',
      normal: 'bg-gradient-to-br from-normal to-normal-600',
      poison: 'bg-gradient-to-br from-poison to-poison-600',
      psychic: 'bg-gradient-to-br from-psychic to-psychic-600',
      rock: 'bg-gradient-to-br from-rock to-rock-600',
      steel: 'bg-gradient-to-br from-steel to-steel-600',
      water: 'bg-gradient-to-br from-water to-water-600',
    }
  }),
}
</script>