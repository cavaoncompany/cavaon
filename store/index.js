import axios from '../plugins/axios.js'

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
  },
  updateUploadFiles(state, payload) {
    state.uploadFiles = payload
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

async function createBlogSubscriber({ state, commit }, payload, path) {
  const subscriberInfo = payload
  try {
    // eslint-disable-next-line
    const { res } = await axios.post(path, {
      subscriberInfo
    })
    return ('success')
  } catch (e) {
    return (e)
  }
}

async function createHubspotReferral({ state, commit }, payload, path) {
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

async function createMailChimpMember({ state, commit }, payload, path) {
  const subscriberInfo = payload
  try {
    const res = await axios.post(path, {
      subscriberInfo
    })
    return ({ res })
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
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
    // const path = '/.netlify/functions/contact'
    // Express path
    const path = '/api/nodemailer/contactUs'
    await sendEmail({ state, commit }, payload, path)
  },
  async subsribeTo({ state, commit }, payload) {
    // Netlify path
    // const path = '/.netlify/functions/blog'
    // Express path
    const path = '/api/nodemailer/blog'
    await sendEmail({ state, commit }, payload, path)
  },
  async contactTicket({ state, commit }, payload) {
    // Netlify path
    // const path = '/.netlify/functions/hubspotContact'
    // Express path
    const path = '/api/hubspotContact/hubspotContact'
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
  async createSubscriber({ state, commit }, payload) {
    // Netlify path
    // const path = '/.netlify/functions/hubspotCreateSubscriber'
    // Express path
    const path = '/api/hubspotBlogSignup/createSubscriber'
    await createBlogSubscriber({ state, commit }, payload, path)
  },
  async createMailchimpSubscriber({ state, commit }, payload) {
    const path = '/api/mailchimp/createMailchimpContact'
    await createMailChimpMember({ state, commit }, payload, path)
  },
  async createReferral({ state, commit }, payload) {
    const path = 'api/hubspotReferral/createReferral'
    await createHubspotReferral({ state, commit }, payload, path)
  },
  async referralSubmission({ state, commit }, payload) {
    const path = 'api/nodemailer/emailReferral'
    await sendEmail({ state, commit }, payload, path)
  }
}
