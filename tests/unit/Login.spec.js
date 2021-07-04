/***********************************************************************************
 * Purpose : To test Login component
 * 
 * @file : Register.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/04/2021
 * 
 **********************************************************************************/
import Login from '../../src/Pages/Login.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('Login.vue', () => {
    let wrapper = shallowMount(Login);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Login, localVue);     
    });
    test('setup correctly', () => {
        expect(true).toBe(true);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(Login).vm).toBeTruthy();
    });

    it('it contains a button to sign in', () => {
        expect(wrapper.contains('.btn-sign-in')).toBe(true);
    });

    it('it has a link to go to registration page', () => {
        expect(wrapper.contains('.signup-link')).toBe(true);
    });

    it('it has a link to go to the forgot password page', () => {
        expect(wrapper.contains('.forgot-password')).toBe(true);
    });

})
