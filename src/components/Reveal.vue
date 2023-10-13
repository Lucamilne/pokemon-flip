<template>
    <section v-if="isVisible" class="hidden md:flex absolute top-0 left-0 w-full h-full overflow-x-hidden">
        <div class="pokeball-left basis-1/2 h-full bg-theme-red" :class="{ 'open-left': isOpen }"></div>
        <div class="pokeball-right basis-1/2 h-full flex relative" :class="{ 'open-right': isOpen }">
            <div class="bg-black w-36 h-full">
            </div>
            <div class="bg-white shadow-left w-full h-full bg-white">
            </div>
            <div class="bg-white surround rounded-full flex justify-center items-center">
                <button class="pokeball-button bg-white rounded-full" @click.stop="openPokeball">
                </button>
            </div>
        </div>
    </section>
    <!-- mobile -->
    <section v-if="isVisible" class="md:hidden absolute top-0 left-0 w-full h-full overflow-y-hidden">
        <div class="pokeball-top bg-theme-red" :class="{ 'open-up': isOpen }"></div>
        <div class="pokeball-bottom flex flex-col relative" :class="{ 'open-down': isOpen }">
            <div class="bg-black h-24 w-full">
            </div>
            <div class="bg-zinc-200 shadow-top h-full"></div>
            <div class="bg-white surround-mobile rounded-full flex justify-center items-center">
                <button class="pokeball-button bg-white rounded-full" @click.stop="openPokeball">
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        Loading: Boolean
    },
    data: () => ({
        isOpen: false,
        isVisible: true,
    }),
    methods: {
        openPokeball() {
            this.isOpen = true;

            setTimeout(() => {
                this.isVisible = false;
            }, 400);
        }
    }
}
</script>

<style scoped>
.pokeball-left {
    box-shadow: inset -1.5rem 0 #901a22;
}

.pokeball-right {
    box-shadow: inset 1.5rem 0px #d4d4d8;
}

.pokeball-top {
    box-shadow: inset 0 -1.5rem #901a22;
    height: calc(50vh - 3rem);
}

.pokeball-bottom {
    height: calc(50vh + 3rem);
}

.pokeball-left,
.pokeball-right,
.pokeball-top,
.pokeball-bottom {
    transform: translate(0%);
    transition: transform 400ms ease;
}

.shadow-left {
    box-shadow: inset 1.5rem 0 #d4d4d8;
}

.shadow-top {
    box-shadow: inset 0 1.5rem 0 #d4d4d8;
}

.open-left {
    transform: translate(-100%);
}

.open-right {
    transform: translate(calc(100% + 9rem));
}

.open-up {
    transform: translate(0, -100%);
}

.open-down {
    transform: translate(0, calc(100% + 6rem));
}

.open-left,
.open-right,
.open-up,
.open-down {
    pointer-events: none;
}

.surround {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -5rem;
    border: 2rem solid black;
    width: 18rem;
    height: 18rem;
    box-shadow: inset 0 0 0 0.5rem #fff;
    background: linear-gradient(to right, #d4d4d8 0%, #d4d4d8 50%, #a1a1aa 50%);
}

.surround-mobile {
    position: absolute;
    top: -6rem;
    transform: translateX(-50%);
    left: 50%;
    border: 1.5rem solid black;
    width: 18rem;
    height: 18rem;
    box-shadow: inset 0 0 0 0.5rem #fff;
    background: linear-gradient(to bottom, #d4d4d8 0%, #d4d4d8 50%, #a1a1aa 50%);
}

.pokeball-button {
    width: 10rem;
    height: 10rem;
    border: 0.5rem solid black;
    box-shadow: inset -0.5rem -0.5rem 0 0 #d4d4d8;
}
</style>