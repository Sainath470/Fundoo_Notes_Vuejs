/***********************************************************************************
 * Purpose : To test Dashboard component
 * 
 * @file : Dashboard.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/11/2021
 * 
 **********************************************************************************/
import Dashboard from '../../src/components/Dashboard.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Dashboard.vue', () => {
    let wrapper = shallowMount(Dashboard);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Dashboard, localVue);
    });

    test('it has a vue instance', () => {
        expect(shallowMount(Dashboard).vm).toBeTruthy();
    });

    it('contains search input field', () => {
        expect(wrapper.contains('.text-search')).toBe(true);
    });

    it('it has an profile image icon', () => {
        expect(wrapper.contains('.icons-header')).toBe(true);
    });

    it('it has an bulb icon for the notes in the side bar', () => {
        expect(wrapper.contains('.fa-lightbulb')).toBe(true);
    });
    it('it has an bell icon for the Reminder in the side bar', () => {
        expect(wrapper.contains('.fa-bell')).toBe(true);
    });
    it('it has an pen icon for the Edit Labels in the side bar', () => {
        expect(wrapper.contains('.fa-pen-square')).toBe(true);
    });
    it('it has an archive icon for the Archive in the side bar', () => {
        expect(wrapper.contains('.fa-archive')).toBe(true);
    });
    it('it has an Trash can icon for the Trash in the side bar', () => {
        expect(wrapper.contains('.fa-trash-alt')).toBe(true);
    });
})
