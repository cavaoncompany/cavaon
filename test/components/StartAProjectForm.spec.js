import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime'
import StartAProjectForm from '../../components/StartAProjectForm.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StartAProjectForm.vue', () => {
  test('Set up correctly', () => {
    expect(true).toBe(true)
  })
})

describe('StartAProjectForm.vue', () => {
  let state
  let store
  let actions

  beforeEach(() => {
    state = {
      projectTicketCreatedStatus: 'success'
    }
    actions = {

    }
    store = new Vuex.Store({
      state,
      actions
    })
  })

  test('has a section with id start-a-project', () => {
    const wrapper = shallowMount(StartAProjectForm, { store, localVue })
    expect(wrapper.html()).toMatch(/<div id="start-a-project"/)
  })
})
