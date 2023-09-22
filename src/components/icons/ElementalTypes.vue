<template>
    <div class="grid gap-0.5">
        <span v-for="type in types" :key="type">
            <img :src="icons[type]" />
            <span class="sr-only">{{ `${type} type card` }}</span>
        </span>
    </div>
</template>

<script>
import BugTypeIcon from "../../assets/icons/types/BugIC_Big.png";
import DragonTypeIcon from "../../assets/icons/types/DragonIC_Big.png";
import ElectricTypeIcon from "../../assets/icons/types/ElectricIC_Big.png";
import FairyTypeIcon from "../../assets/icons/types/FairyIC_Big.png";
import FightingTypeIcon from "../../assets/icons/types/FightingIC_Big.png";
import FireTypeIcon from "../../assets/icons/types/FireIC_Big.png";
import FlyingTypeIcon from "../../assets/icons/types/FlyingIC_Big.png";
import GhostTypeIcon from "../../assets/icons/types/GhostIC_Big.png";
import GrassTypeIcon from "../../assets/icons/types/GrassIC_Big.png";
import GroundTypeIcon from "../../assets/icons/types/GroundIC_Big.png";
import IceTypeIcon from "../../assets/icons/types/IceIC_Big.png";
import NormalTypeIcon from "../../assets/icons/types/NormalIC_Big.png";
import PoisonTypeIcon from "../../assets/icons/types/PoisonIC_Big.png";
import PsychicTypeIcon from "../../assets/icons/types/PsychicIC_Big.png";
import RockTypeIcon from "../../assets/icons/types/RockIC_Big.png";
import SteelTypeIcon from "../../assets/icons/types/SteelIC_Big.png";
import WaterTypeIcon from "../../assets/icons/types/WaterIC_Big.png";

export default {
    name: "ElementalType",
    props: {
        types: Array,
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
    }),
};
</script>
