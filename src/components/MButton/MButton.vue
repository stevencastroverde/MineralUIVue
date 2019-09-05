<template>
    <button 
    class="m-button" 
    :class="computedClass"
    :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MButton',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        flat: {
            type: Boolean,
            default: false,
        },
        success: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        computedClass() {
            return {
                'm-button--flat': this.flat,
                'm-button--success': this.success
            }
        }
    }
}
</script>

<style lang="scss">
    .m-button {
        line-height: 1.25;
        min-width: 2.5em;
        height: 2.5em;
        border-radius: .15em;
        border-color: #c8d1e0;
        border-width: 1px;
        font-weight: 600;
        padding: 0 .5em;
        font-size: 1rem;
        color: #3272d9;
        transition: all .1s ease-in;
        &--success {
            color: #2a854e;
        }
        &--flat {
            border-color: transparent;
        }
        &:hover {
            background-color: rgba(#222, .1);
        }
        &:disabled {
            color: #afbacc;
            background-color: #ebeff5;
        }
    }
</style>