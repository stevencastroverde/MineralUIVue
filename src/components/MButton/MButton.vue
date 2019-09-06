<template>
    <button 
    :class="computedClass"
    class="m-button" 
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
        minimal: {
            type: Boolean,
            default: false,
        },
        success: {
            type: Boolean,
            default: false,
        },
        danger: {
            type: Boolean,
            default: false,
        },
        warning: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        computedClass() {
            return {
                'm-button--minimal': this.minimal,
                'm-button--success': this.success,
                'm-button--warning': this.warning,
                'm-button--danger': this.danger,
            }
        }
    }
}
</script>

<style lang="scss">
    .m-button {
        $root: &;
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
            
            #{$root}:hover & {
                border-color: #2a854e;
            }
        }
        &--danger {
            color: #de1b1b;
             &:hover {
                border-color: #de1b1b;
            }
        }
        &--warning {
            color: #ad5f00;
             &:hover {
                border-color: #ad5f00;
            }
        }
        &--minimal {
            border-color: transparent;
            &:hover {
                border-color: transparent;
            }
        }
        &:hover {
            background-color: rgba(#222, .1);
            border-color: #3272d9;
        }
        &:disabled {
            color: #afbacc;
            background-color: #ebeff5;
        }
    }
</style>