<template>
    <button 
    :class="computedClass"
    :style="buttonSize"
    class="m-button" 
    :disabled="disabled"
    >
       <component v-if="prependIcon" :is="fetchedPrependIcon" :size="iconSize"/>
        <slot/>
        <component v-if="appendIcon" :is="fetchedAppendIcon" :size="iconSize" />
    </button>
</template>

<script>
export default {
    name: 'MButton',
    components: {
    },
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
        fullWidth: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'large',
            validator: (sizeProp) => ['small', 'medium', 'large', 'jumbo'].includes(sizeProp),
        },
        prependIcon: {
            type: String,
            default: null,
        },
        appendIcon: {
            type: String,
            default: null,
        },
        circular: {
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
                'm-button--full-width': this.fullWidth,
                'm-button--circular': this.circular,
            }
        },
        buttonSize() {
            const sizing = {
                small: {
                    'font-size': '.5em',
                    padding: '0 .2em',
                },
                medium: {
                    'font-size': '.75em',
                    padding: '0 .4em',
                },
                large: {
                    'font-size': '1em',
                    padding: '0 .5em',

                },
                jumbo: {
                    'font-size': '1.25em',
                    padding: '0 .75em',
                },
            }
            return  this.circular ? {'font-size':sizing[this.size]['font-size']} : sizing[this.size];
        },
        fetchedPrependIcon() {
            return () => import(`@/components/Icons/${this.prependIcon}`);
        },
         fetchedAppendIcon() {
            return () => import(`@/components/Icons/${this.appendIcon}`);
        },
        iconSize() {
            const sizing = {
                small: 'small',
                medium: 'medium',
                large: 'medium',
                jumbo: 'large',
            };
            return sizing[this.size];
        }
    }
}
</script>

<style lang="scss">
   @import './MButtonStyles';
</style>