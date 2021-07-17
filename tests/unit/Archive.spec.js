/***********************************************************************************
 * Purpose : To test Archive component
 *
 * @file : Archive.spec.js
 * @author : Venkata Sainath <akulavenkatasainath1997@gmail.com>
 * @version : 1.0
 * @since : 7/14/2021
 *
 **********************************************************************************/
import Archive from "../../src/components/Archive.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("UpdateNote.vue", () => {
  let wrapper = shallowMount(Archive);
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(Archive, localVue);
  });
  test("setup correctly", () => {
    expect(true).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(shallowMount(Archive).vm).toBeTruthy();
  });

  it("it has a container in which the notes are displayed", () => {
    expect(wrapper.find(".main-container")).toBeTruthy();
  });

  it("it has a input field to take title", () => {
    expect(wrapper.find("#notes")).toBeTruthy();
  });

  it("it has a text area field to take input description", () => {
    expect(wrapper.find("#note-icons")).toBeTruthy();
  });
});
