import { mount } from '@vue/test-utils'
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime'
import Contact from '../components/Contact.vue'

describe('Contact.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Contact.vue', () => {
  test('has a section with id contact', () => {
    const wrapper = mount(Contact)
    expect(wrapper.html()).toMatch(/<section id="contact"/)
  })
})
