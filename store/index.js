import axios from '../plugins/axios.js'

export const state = () => ({
  ticketCreatedStatus: 'pending',
  projectTicketCreatedStatus: 'pending',
  uploadFiles: []
})

export const mutations = {
  updateTicketCreatedStatus(state, payload) {
    state.ticketCreatedStatus = payload
  },
  updateProjectTicketCreatedStatus(state, payload) {
    state.projectTicketCreatedStatus = payload
  },
  updateUploadFiles(state, payload) {
    state.uploadFiles = payload
  }
}

export const getters = {
  ticketCreatedStatus: state => state.ticketCreatedStatus,
  projectTicketCreatedStatus: state => state.projectTicketCreatedStatus,
  uploadFiles: state => state.uploadFiles
}

async function sendEmail({ state, commit }, payload, path) {
  // eslint-disable-next-line
  path = path || '/email'
  const emailInfo = payload
  try {
    // eslint-disable-next-line
    const { res } = await axios.post(path, {
      emailInfo
    })
  } catch (e) {
    alert(e)
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
    // Netlify path
    // const path = '/.netlify/functions/email'
    // Express path
    const path = 'api/nodemailer/newProject'
    await sendEmail({ state, commit }, payload, path)
  },
  async contactUs({ state, commit }, payload) {
    // Netlify path
    const path = '/.netlify/functions/contact'
    // Express path
    // const path = '/api/nodemailer/contactUs'
    await sendEmail({ state, commit }, payload, path)
  },
  async subsribeTo({ state, commit }, payload) {
    // Netlify path
    const path = '/.netlify/functions/blog'
    // Express path
    await sendEmail({ state, commit }, payload, path)
  },
  async contactTicket({ state, commit }, payload) {
    // Netlify path
    const path = '/.netlify/functions/hubspotContact'
    // Express path
    // const path = '/api/hubspotContact/hubspotContact'
    const result = await createTicket({ state, commit }, payload, path)
    commit('updateTicketCreatedStatus', result)
  },
  async startAProjectTicket({ state, commit }, payload) {
    // Netlify path
    // const path = '/.netlify/functions/hubspotStartAProject'
    // Express path
    const path = '/api/hubspotStartAProject/hubspotStartAProject'
    const result = await createTicket({ state, commit }, payload, path)
    commit('updateProjectTicketCreatedStatus', result)
  },
  uploadFiles({ state, commit }, payload) {
    commit('updateUploadFiles', payload)
  }
}
