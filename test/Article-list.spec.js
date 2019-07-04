import { mount } from '@vue/test-utils'
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime'
import ArticleList from '../components/blog/Article-list.vue'

describe('Article-list.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Article-list.vue', () => {
  test('has a class blog-inner-section', () => {
    const wrapper = mount(ArticleList, {
      propsData: {
        articles: [],
        page: 'home'
      }
    })
    expect(wrapper.html()).toMatch(/class="blog-inner-section"/)
  })
})
