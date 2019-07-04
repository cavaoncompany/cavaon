import { mount } from '@vue/test-utils'
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime'
import FeaturedArticleCard from '../components/blog/Featured-Article-card.vue'

describe('Featured-Article-Card.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('Article-card.vue', () => {
  test('has an article tag with class featured-article-card card', () => {
    const wrapper = mount(FeaturedArticleCard, {
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
        lang: 'en',
        image: 'path'
      }
    })
    expect(wrapper.html()).toMatch(/<article class="featured-article-card card">/)
  })
})
