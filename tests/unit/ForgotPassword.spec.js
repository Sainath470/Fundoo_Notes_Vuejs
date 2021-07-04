/***********************************************************************************
 * Purpose : To test ForgotPassword component
 * 
 * @file : ForgotPassword.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/04/2021
 * 
 **********************************************************************************/
import ForgotPassword from '../../src/Pages/ForgotPassword.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';

describe('ForgotPassword.vue', () => {
    let wrapper = shallowMount(ForgotPassword);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(ForgotPassword, localVue);
    });
    test('setup correctly', () => {
        expect(true).toBe(true);
    });

    it('renders a vue instance', () => {
        expect(shallowMount(ForgotPassword).vm).toBeTruthy();
    });

    it('it has a button to send the reset link to mail', () => {
        expect(wrapper.contains('.btn-link')).toBe(true);
    });

    it('it has a input field to take gmail', () => {
        expect(wrapper.contains('.input-box-email')).toBe(true);
    });
})