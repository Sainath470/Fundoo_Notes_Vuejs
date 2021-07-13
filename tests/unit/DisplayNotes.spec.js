/***********************************************************************************
 * Purpose : To test DisplayNotes component
 * 
 * @file : Display.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/12/2021
 * 
 **********************************************************************************/
import DisplayNotes from '../../src/components/DisplayNotes.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('DisplayNotes.vue', () => {
    let wrapper = shallowMount(DisplayNotes);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(DisplayNotes, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(DisplayNotes).vm).toBeTruthy();
    });

    it('it contains update component to render update notes', () => {
        expect(wrapper.contains('.update-component')).toBe(true);
    });
})
