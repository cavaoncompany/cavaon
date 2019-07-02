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

async function createMailChimpMember({ state, commit }, payload, path) {
  // eslint-disable-next-line
  console.log('3', payload)
  const subscriberInfo = {
    email_address: payload.email,
    status: 'subscribed',
    merge_fields: {
      FIRSTNAME: payload.firstname,
      LASTNAME: payload.lastname
    }
  }
  try {
    const { res } = await axios.post(path, {
      headers: {
        auth: {
          username: 'anystring',
          password: process.env.mailchimpapikey
        }
      },
      subscriberInfo
    })
      .then((res) => {
        // eslint-disable-next-line
        console.log(res)
      })
    // eslint-disable-next-line
      console.log(res)
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
    const path = 'api/hubspotBlogSignup/createSubscriber'
    await createBlogSubscriber({ state, commit }, payload, path)
  },
  async createMailchimpSubscriber({ state, commit }, payload) {
    const path = 'https://us18.api.mailchimp.com/3.0/lists/d5263ee7ce/members'
    // eslint-disable-next-line
    console.log('2 calling axios', path)
    await createMailChimpMember({ state, commit }, payload, path)
  }
}
