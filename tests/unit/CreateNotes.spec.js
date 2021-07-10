/***********************************************************************************
 * Purpose : To test CreateNotes component
 *
 * @file : CreateNotes.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 11/07/2021
 *
 **********************************************************************************/
import CreateNotes from '../../src/components/CreateNotes.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('CreateNotes.vue', () => {
    let wrapper = shallowMount(CreateNotes);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(CreateNotes, localVue);
    });

    test('it has a vue instance', () => {
        expect(shallowMount(CreateNotes).vm).toBeTruthy();
    });

    it('it has a initial take a note field', () => {
        expect(wrapper.contains('.input-box')).toBe(true);
    });

    it('it has a check box icon inside the input field', () => {
        expect(wrapper.contains('.first-image')).toBe(true);
    });
    it('it has a paint brush icon inside the input field', () => {
        expect(wrapper.contains('.second-image')).toBe(true);
    });
    it('it has a image icon', () => {
        expect(wrapper.contains('.third-image')).toBe(true);
    });

})
