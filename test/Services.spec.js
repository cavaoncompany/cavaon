import { mount } from '@vue/test-utils'
import Services from '../components/Services.vue'

describe('Services.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Services.vue', () => {
  test('has a section with id services', () => {
    const wrapper = mount(Services)
    expect(wrapper.html()).toMatch(/<section id="services"/)
  })
})
