<template>
    <section class="absolute top-0 left-0 w-full h-full flex">
        <div class="left basis-1/2 h-full bg-theme-red"></div>
        <div class="basis-1/2 h-full flex relative">
            <div class="bg-black w-36 h-full">
            </div>
            <div class="right w-full h-full bg-white">
            </div>
            <div class="bg-white plinth rounded-full">
                <button>
                
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
        //
    }),

}
</script>

<style scoped>
.left {
    box-shadow: inset -32px 0px #901a22;
    /* background: linear-gradient(to right, 
    #901a22    50%, 
      #e61919 50%,
      #e61919 100%
  ); */
}

.right {
    box-shadow: inset 32px 0px #d4d4d8;
}

.plinth {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -5rem;
    border: 2rem solid black;
    width: 18rem;
    height: 18rem;
}
</style>