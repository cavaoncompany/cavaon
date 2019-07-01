import { mount } from '@vue/test-utils'
import HeaderTop from '../components/HeaderTop.vue'

describe('HeaderTop.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('HeaderTop.vue', () => {
  test('Has ul', () => {
    const wrapper = mount(HeaderTop, {
      propsData: {
        page: 'blog'
      }
    })
    expect(wrapper.html()).toMatch(/<ul/)
  })
})
