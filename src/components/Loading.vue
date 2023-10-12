<template>
    <section class="absolute top-0 left-0 w-full h-full flex overflow-x-hidden">
        <div class="pokeball-left basis-1/2 h-full bg-theme-red" :class="{ 'open-left': isOpen }"></div>


        <div class="pokeball-right basis-1/2 h-full flex relative" :class="{ 'open-right': isOpen }">
            <div class="bg-black w-36 h-full">
            </div>
            <div class="pokeball-bottom w-full h-full bg-white">
            </div>
            <div class="bg-white surround rounded-full flex justify-center items-center" :class="{ 'fade-out': isOpen }">
                <button class="pokeball-button bg-white rounded-full" @click.stop="isOpen = true">

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
        isOpen: false
    }),

}
</script>

<style scoped>
.pokeball-left {
    box-shadow: inset -1.5rem 0px #901a22;
}

.pokeball-bottom {
    box-shadow: inset 1.5rem 0px #d4d4d8;
}

.pokeball-left,
.pokeball-right {
    transform: translateX(0%);
    transition: transform 400ms ease;
}

.open-left {
    transform: translateX(-100%);
}

.open-right {
    transform: translateX(100%);
}

.fade-out {
    transition: opacity 250ms ease;
    transition-delay: 400ms;
    opacity: 0;
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
    background: linear-gradient(to bottom, #d4d4d8 0%, #d4d4d8 50%, #a1a1aa 50%);
}

.pokeball-button {
    width: 10rem;
    height: 10rem;
    border: 0.5rem solid black;
    box-shadow: inset -0.5rem -0.5rem 0 0 #d4d4d8;
}
</style>