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

    it('creates icon component', () => {
        const wrapper = mount(MButton, {
            propsData: {
                appendIcon: 'IconAccountBox',
            },
        });
        debugger;
        expect(wrapper.contains(IconAccountBox)).toBe(true);
    })






})