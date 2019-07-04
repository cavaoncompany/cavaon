import { mount } from '@vue/test-utils'
import Flowchart from '../../components/Flowchart.vue'

describe('Flowchart.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Flowchart.vue', () => {
  test('has a section with id flowchart', () => {
    const wrapper = mount(Flowchart)
    expect(wrapper.html()).toMatch(/<section id="flowchart"/)
  })
})
