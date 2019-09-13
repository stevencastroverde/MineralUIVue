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
    .m-button {
        $self: &;
        line-height: 1.25;
        min-width: 2.5em;
        height: 2.5em;
        border-radius: .15em;
        border-color: #c8d1e0;
        border-width: 1px;
        font-weight: 600;
        outline: 0;
        padding: 0 .5em;
        font-size: 1rem;
        color: #3272d9;
        transition: all .1s ease-in;
        &:hover {
            background-color: #f5f7fa;
            border-color: #3272d9;
        }
        &:disabled {
            color: #afbacc;
            background-color: #ebeff5;
            border-color: transparent;
        }

        &--success {
            color: #2a854e;

            &:hover {
                border-color: #2a854e;
            }
            &:focus {
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, #2a854e 0px 0px 0px 2px;
            }
            &:active {
                background-color: #ebeff5;
                border-color: darken(#2a854e, 2);
            }
        }
        &--danger {
            color: #de1b1b;
             &:hover {
                border-color: #de1b1b;
            }
            &:focus {
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px, #de1b1b 0px 0px 0px 2px;
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
            &:active {
                background-color: #ebeff5;
            }
            &:disabled {
                background-color: transparent;
            }
            
        }
        // sizing 
        &--small {
            width: 1em;
            height: 1em;
        }
        &--medium {
            width: 2.5em;
            height: 2.5em;
        }
        &--large {
            width: 4em;
            height: 4em;
        }
        &--jumbo {
            width: 6em;
            height: 6em;
        }
        &--full-width {
            width: 100%
        }
        &--circular {
            display: inline-block;
            border-radius: 50%;
            width: 2.5em;
            line-height: 1;
            > * {
                padding: 0 !important;
                margin: 0 !important;
            }
        }
        //icons
        [role="presentation"]:first-child {
            margin-right: 0.5em;
        }
        [role="presentation"]:last-child {
            margin-left: 0.5em;
        }

    }
</style>