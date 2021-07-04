/***********************************************************************************
 * Purpose : To test registration component
 * 
 * @file : Register.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/04/2021
 * 
 **********************************************************************************/
import Register from '../../src/Pages/Register.vue';
import Title from '../../src/Pages/Title.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils'
describe('Register.vue', () => {
    let wrapper = shallowMount(Register);
    beforeEach(() => {
        const localVue = createLocalVue();
        wrapper = shallowMount(Register, localVue);
    });

    test('it has a vue instance', () => {
        expect(shallowMount(Register).vm).toBeTruthy();
    })

    it('GivenPage_IfFundooTitleIsPresent_ShouldReturnTrue', () => {
        expect(wrapper.contains(Title)).toBe(true);
    });

    it('it has Data', () => {
        expect(typeof Register.data).toBe('function');
    });

    it('contains password input field', () => {
        expect(wrapper.contains('.password')).toBe(true);
    });

    it('it has an side image', () => {
        expect(wrapper.contains('.side-logo')).toBe(true);
    });

    it('it has a input field for firstName and lastName', () => {
        expect(wrapper.contains('.input-box')).toBe(true);
    });

    it(' it has a input field for taking email id', () => {
        expect(wrapper.contains('.user-name')).toBe(true);
    });
})
