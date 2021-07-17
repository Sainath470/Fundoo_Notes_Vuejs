/***********************************************************************************
 * Purpose : To test ResetPassword component
 *
 * @file : ResetPassword.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/04/2021
 *
 **********************************************************************************/
import ResetPassword from "../../src/Pages/ResetPassword.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("ResetPassword.vue", () => {
  let wrapper = shallowMount(ResetPassword);
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(ResetPassword, localVue);
  });
  test("setup correctly", () => {
    expect(true).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(shallowMount(ResetPassword).vm).toBeTruthy();
  });

  it("it has a button to update the password", () => {
    expect(wrapper.contains(".update-button")).toBe(true);
  });

  it("it has a field to take the new password", () => {
    expect(wrapper.contains(".input-box-password")).toBe(true);
  });

  it("it has a field to take the confirm password", () => {
    expect(wrapper.contains(".input-box-confirm")).toBe(true);
  });
});
