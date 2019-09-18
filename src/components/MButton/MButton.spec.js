import { mount, shallowMount } from '@vue/test-utils';
import MButton from './MButton.vue';
import IconAccountBox from '../Icons/IconAccountBox.vue';

describe('MButton', () => {
    it('renders correctly', () => {
        const wrapper = mount(MButton, {
            slots: {
                default: 'Test Button',
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it('creates prepend icon component', (done) => {
        const wrapper = mount(MButton, {
            propsData: {
                prependIcon: 'IconAccountBox',
            },
        });
        setTimeout(() => {
            expect(wrapper.contains(IconAccountBox)).toBe(true);
            done();
        })
    })
    it('creates append icon component', (done) => {
        const wrapper = mount(MButton, {
            propsData: {
                appendIcon: 'IconAccountBox',
            },
        });
        setTimeout(() => {
            expect(wrapper.contains(IconAccountBox)).toBe(true);
            done();
        })
    });
    it('renders with icon correctly', (done) => {
        const wrapper = mount(MButton, {
            propsData: {
                prependIcon: 'IconAccountBox',
            },
        });
        setTimeout(() => {
            expect(wrapper.element).toMatchSnapshot();
            done();
        })

    })

    it('adds minimal classes', () => {
        const wrapper = shallowMount(MButton, {
            propsData: {
                minimal: true,
            },
        });
        expect(wrapper.classes()).toContain('m-button--minimal');
    });
    it('adds success classes', () => {
        const wrapper = shallowMount(MButton, {
            propsData: {
                success: true,
            },
        });
        expect(wrapper.classes()).toContain('m-button--success');
    })
    it('adds warning classes', () => {
        const wrapper = shallowMount(MButton, {
            propsData: {
                warning: true,
            },
        });
        expect(wrapper.classes()).toContain('m-button--warning');
    })
    it('adds danger classes', () => {
        const wrapper = shallowMount(MButton, {
            propsData: {
                danger: true,
            },
        });
        expect(wrapper.classes()).toContain('m-button--danger');
    })
    it('adds circular classes', () => {
        const wrapper = shallowMount(MButton, {
            propsData: {
                circular: true,
            },
        });
        expect(wrapper.classes()).toContain('m-button--circular');
    });
    it('adds full width classes', () => {
        const wrapper = shallowMount(MButton, {
            propsData: {
                fullWidth: true,
            },
        });
        expect(wrapper.classes()).toContain('m-button--full-width');
    })






})