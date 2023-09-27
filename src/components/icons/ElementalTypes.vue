<template>
    <div class="grid gap-0.5">
        <span v-for="type in types" :key="type">
            <img :src="icons[type]" />
            <span class="sr-only">{{ `${type} type card` }}</span>
        </span>
    </div>
</template>

<script>
import BugTypeIcon from "../../assets/icons/types/BugIC_SM.png";
import DragonTypeIcon from "../../assets/icons/types/DragonIC_SM.png";
import ElectricTypeIcon from "../../assets/icons/types/ElectricIC_SM.png";
import FairyTypeIcon from "../../assets/icons/types/FairyIC_SM.png";
import FightingTypeIcon from "../../assets/icons/types/FightingIC_SM.png";
import FireTypeIcon from "../../assets/icons/types/FireIC_SM.png";
import FlyingTypeIcon from "../../assets/icons/types/FlyingIC_SM.png";
import GhostTypeIcon from "../../assets/icons/types/GhostIC_SM.png";
import GrassTypeIcon from "../../assets/icons/types/GrassIC_SM.png";
import GroundTypeIcon from "../../assets/icons/types/GroundIC_SM.png";
import IceTypeIcon from "../../assets/icons/types/IceIC_SM.png";
import NormalTypeIcon from "../../assets/icons/types/NormalIC_SM.png";
import PoisonTypeIcon from "../../assets/icons/types/PoisonIC_SM.png";
import PsychicTypeIcon from "../../assets/icons/types/PsychicIC_SM.png";
import RockTypeIcon from "../../assets/icons/types/RockIC_SM.png";
import SteelTypeIcon from "../../assets/icons/types/SteelIC_SM.png";
import WaterTypeIcon from "../../assets/icons/types/WaterIC_SM.png";

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
