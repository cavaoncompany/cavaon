import axios from '~/plugins/axios'
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
  path = path || '/api/nodemailer/newProject'

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

export const actions = {
  async newProject({ state, commit }, payload) {
    const path = '/api/nodemailer/newProject'
    await sendEmail({ state, commit }, payload, path)
  },
  async contactUs({ state, commit }, payload) {
    const path = '/api/nodemailer/contactUs'
    await sendEmail({ state, commit }, payload, path)
  },
  async subsribeTo({ state, commit }, payload) {
    const path = '/api/nodemailer/subscribe'
    await sendEmail({ state, commit }, payload, path)
  }
}