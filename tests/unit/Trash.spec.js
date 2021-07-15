/***********************************************************************************
 * Purpose : To test Trash component
 * 
 * @file : Trash.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/15/2021
 * 
 **********************************************************************************/
import Trash from '../../src/components/Trash.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('Trash.vue', () => {
    let wrapper = shallowMount(Trash);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Trash, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Trash).vm).toBeTruthy();
    });
    it('it has container to display notes inside it', () => {
        expect(wrapper.contains('.container')).toBe(true);
    });
    it('it button to clear all the notes in trash ', () => {
        expect(wrapper.contains('.btn-empty-trash')).toBe(true);
    });
    it('it has a icon, when clicked notes will delete forever', () => {
        expect(wrapper.find('#fa-trash-alt')).toBeTruthy();
    });
    it('it has a icon when clicked notes will restore to display notes', () => {
        expect(wrapper.find('#restore-icon')).toBeTruthy();
    });
})
