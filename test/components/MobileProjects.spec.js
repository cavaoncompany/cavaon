import { mount } from '@vue/test-utils'
import MobileProjects from '../../components/MobileProjects.vue'

describe('MobileProjects.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('MobileProjects.vue', () => {
  test('has a section with id mobile-projects', () => {
    const wrapper = mount(MobileProjects)
    expect(wrapper.html()).toMatch(/<section id="mobile-projects">/)
  })
})
