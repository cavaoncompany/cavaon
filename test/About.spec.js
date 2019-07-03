import { mount } from '@vue/test-utils'
import About from '../components/About.vue'

describe('About.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('About.vue', () => {
  test('Has section with id about', () => {
    const wrapper = mount(About)
    expect(wrapper.html()).toMatch(/<section id="about"/)
  })
})
