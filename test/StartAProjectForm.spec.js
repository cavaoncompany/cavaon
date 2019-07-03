import { mount } from '@vue/test-utils'
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime'
import StartAProjectForm from '../components/StartAProjectForm.vue'

describe('StartAProjectForm.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('StartAProjectForm.vue', () => {
  test('has a section with id start-a-project', () => {
    const wrapper = mount(StartAProjectForm)
    expect(wrapper.html()).toMatch(/<section id="start-a-project"/)
  })
})
