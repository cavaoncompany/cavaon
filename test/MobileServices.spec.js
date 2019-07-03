import { mount } from '@vue/test-utils'
import MobileServices from '../components/MobileServices.vue'

describe('MobileServices.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('MobileServices.vue', () => {
  test('has a section with id mobile-services', () => {
    const wrapper = mount(MobileServices)
    expect(wrapper.html()).toMatch(/<section id="mobile-services"/)
  })
})
