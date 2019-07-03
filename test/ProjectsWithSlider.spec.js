import { mount } from '@vue/test-utils'
import ProjectWithSlider from '../components/ProjectWithSlider.vue'

describe('ProjectWithSlider.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('ProjectWithSlider.vue', () => {
  test('has a section with id about-portfolio-item', () => {
    const wrapper = mount(ProjectWithSlider, {
      propsData: {
        projectDetails: {
          projectTitle: 'new title'
        }
      }
    })
    expect(wrapper.html()).toMatch(/<section id="about-portfolio-item"/)
  })
})
