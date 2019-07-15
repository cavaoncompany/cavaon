import { mount } from '@vue/test-utils'
import Footer from '../../components/Footer.vue'

describe('Footer.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Footer.vue', () => {
  test('has a footer tag with id mastfoot', () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toMatch(/<footer id="mastfoot"/)
  })
})
