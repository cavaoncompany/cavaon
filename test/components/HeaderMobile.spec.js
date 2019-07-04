import { mount } from '@vue/test-utils'
import HeaderMobile from '../../components/HeaderMobile.vue'

describe('HeaderMobile.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('HeaderMobile.vue', () => {
  test('Has ul', () => {
    const wrapper = mount(HeaderMobile, {
      propsData: {
        page: 'home'
      }
    })
    expect(wrapper.html()).toMatch(/<ul/)
  })
})
