import { mount } from '@vue/test-utils'
import HeaderStandard from '../components/HeaderStandard.vue'

describe('HeaderStandard.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('HeaderStandard.vue', () => {
  test('Has ul', () => {
    const wrapper = mount(HeaderStandard, {
      propsData: {
        page: 'blog'
      }
    })
    expect(wrapper.html()).toMatch(/<ul/)
    expect(wrapper.props('page')).toBe('blog')
  })
})
