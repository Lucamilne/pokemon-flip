<template>
    <section class="absolute top-0 left-0 w-full h-full flex">
        <div class="left basis-1/2 h-full bg-theme-red"></div>
        <div class="basis-1/2 h-full bg-white"></div>
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
    box-shadow: inset -8px 0px #901a22;
    background: linear-gradient(to right, 
    #901a22    50%, 
      #e61919 50%,
      #e61919 100%
  );
}
.right {
    box-shadow: inset -8px 0px #901a22, inset 0 -16px #c20a0a;
}

</style>