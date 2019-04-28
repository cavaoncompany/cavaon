import axios from '~/plugins/axios'
// import * as request from 'request'

export const state = () => ({
  emailProvider: {
    service: 'smtp',
    username: 'username',
    password: 'pw'
  }
})

export const mutations = {
  setNewEmailProvider(state, payload) {
    state.emailProvider = payload
  }
}

export const getters = {
  emailProvider(state) {
    return state.emailProvider
  }
}

async function sendEmail({ state, commit }, payload, path) {
  // eslint-disable-next-line
  path = path || '/email'
  const emailInfo = payload
  const emailProvider = state.emailProvider
  // eslint-disable-next-line
  // console.log('PayLoad', payload)
  if (emailProvider.username !== '' && emailProvider.password !== '') {
    try {
      // eslint-disable-next-line
      const { res } = await axios.post(path, {
        emailInfo,
        emailProvider
      })
      // alert('Message sent successfully')
    } catch (e) {
      alert(e)
    }
  }
}

async function createTicket({ state, commit }, payload, path) {
  const ticketInfo = payload
  try {
    // eslint-disable-next-line
    const { res } = await axios.post(path, {
      ticketInfo
    })
    return res
  } catch (e) {
    alert(e)
  }
}

export const actions = {
  async newProject({ state, commit }, payload) {
    const path = '/.netlify/functions/email'
    await sendEmail({ state, commit }, payload, path)
  },
  async contactUs({ state, commit }, payload) {
    const path = '/.netlify/functions/contact'
    await sendEmail({ state, commit }, payload, path)
  },
  async subsribeTo({ state, commit }, payload) {
    const path = '/.netlify/functions/blog'
    await sendEmail({ state, commit }, payload, path)
  },
  async contactTicket({ state, commit }, payload) {
    const path = './.netlify/functions/hubspotContact'
    await createTicket({ state, commit }, payload, path)
  },
  async startAProjectTicket({ state, commit }, payload) {
    const path = './.netlify/functions/hubspotStartAProject'
    await createTicket({ state, commit }, payload, path)
  }
}
