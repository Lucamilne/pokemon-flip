<template>
    <span class="absolute top-0 right-0">
        <img :src="icons[type]" />
        <span class="sr-only">{{ `${type} type card` }}</span>
    </span>
</template>

<script>
import FireTypeIcon from '../../assets/icons/types/FireIC_Big.png';
import GrassTypeIcon from '../../assets/icons/types/GrassIC_Big.png';
import WaterTypeIcon from '../../assets/icons/types/WaterIC_Big.png';
import LightningTypeIcon from '../../assets/icons/types/ElectricIC_Big.png';
import PsychicTypeIcon from '../../assets/icons/types/PsychicIC_Big.png';
import FightingTypeIcon from '../../assets/icons/types/FightingIC_Big.png';
import NormalTypeIcon from '../../assets/icons/types/NormalIC_Big.png';

export default {
    name: 'ElementalType',
    props: {
        type: String,
        color: String
    },
    data: () => ({
        icons: {
            fire: FireTypeIcon,
            grass: GrassTypeIcon,
            water: WaterTypeIcon,
            lightning: LightningTypeIcon,
            psychic: PsychicTypeIcon,
            fighting: FightingTypeIcon,
            normal: NormalTypeIcon
        }
    })
}
</script>