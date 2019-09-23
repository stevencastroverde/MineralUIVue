<template>
    <div class="m-button-group" role="group">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'MButtonGroup',
    data() {
        return {
            selected: null,
        }
    },
    mounted() {
       this.$slots.default.forEach((vnode, index) => {
           vnode.elm.setAttribute('data-index', index);
       })
    }
}
</script>

<style lang="scss">
    .m-button-group {
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
        
        &--vertical {
            flex-direction: column;
        }
    }

</style>