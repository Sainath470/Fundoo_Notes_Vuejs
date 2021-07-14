/***********************************************************************************
 * Purpose : To test UpdateNote component
 * 
 * @file : UpdateNote.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/14/2021
 * 
 **********************************************************************************/
import UpdateNote from '../../src/components/UpdateNote.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('UpdateNote.vue', () => {
    let wrapper = shallowMount(UpdateNote);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(UpdateNote, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(UpdateNote).vm).toBeTruthy();
    });

})
