import { mount } from '@vue/test-utils'
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime'
import ArticleCard from '../components/blog/Article-card.vue'

describe('Article-card.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Article-card.vue', () => {
  test('has has an article tag with class article-card card', () => {
    const wrapper = mount(ArticleCard, {
      propsData: {
        title: 'blog',
        subtitle: 'subtitle',
        description: 'description',
        tags: ['some tag'],
        date: '',
        articles: [],
        page: 'home',
        thumbnail: '/somepath',
        body: 'text',
        lang: 'en'
      }
    })
    expect(wrapper.html()).toMatch(/<article class="article-card card">/)
  })
})
