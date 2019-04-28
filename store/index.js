import axios from '~/plugins/axios'
// import * as request from 'request'

export const state = () => ({
  ticketCreatedStatus: 'pending',
  projectTicketCreatedStatus: 'pending'
})

export const mutations = {
  updateTicketCreatedStatus(state, payload) {
    state.ticketCreatedStatus = payload
  },
  updateProjectTicketCreatedStatus(state, payload) {
    state.projectTicketCreatedStatus = payload
  }
}

export const getters = {
  ticketCreatedStatus: state => state.ticketCreatedStatus,
  projectTicketCreatedStatus: state => state.projectTicketCreatedStatus
}

async function sendEmail({ state, commit }, payload, path) {
  // eslint-disable-next-line
  path = path || '/email'
  const emailInfo = payload
  const emailProvider = state.emailProvider
  if (emailProvider.username !== '' && emailProvider.password !== '') {
    try {
      // eslint-disable-next-line
      const { res } = await axios.post(path, {
        emailInfo,
        emailProvider
      })
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
    return ('success')
  } catch (e) {
    return (e)
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
    const result = await createTicket({ state, commit }, payload, path)
    commit('updateTicketCreatedStatus', result)
  },
  async startAProjectTicket({ state, commit }, payload) {
    const path = './.netlify/functions/hubspotStartAProject'
    await createTicket({ state, commit }, payload, path)
    commit('updateProjectTicketCreatedStatus')
  }
}
