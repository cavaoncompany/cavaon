import { mount } from '@vue/test-utils'
import FlowchartMobile from '../../components/FlowchartMobile.vue'

describe('FlowchartMobile.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('FlowchartMobile.vue', () => {
  test('has a section with id flowchart-mobile', () => {
    const wrapper = mount(FlowchartMobile)
    expect(wrapper.html()).toMatch(/<section id="flowchart-mobile"/)
  })
})
