/***********************************************************************************
 * Purpose : To test Dashboard component
 * 
 * @file : Dashboard.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/07/2021
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
})
