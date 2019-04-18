import axios from '~/plugins/axios'
import request from 'request-promise'
import { eventNames } from 'cluster';
require('dotenv').config()

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

export const actions = {
  async newProject({ state, commit }, payload) {
    const path = '/.netlify/functions/email'
    await sendEmail({ state, commit }, payload, path)
  },
  async contactUs({ state, commit }, payload) {
    const path = '/.netlify/functions/contact'
    await sendEmail({ state, commit }, payload, path)
    await tryHubspot()
  },
  async subsribeTo({ state, commit }, payload) {
    const path = '/.netlify/functions/blog'
    await sendEmail({ state, commit }, payload, path)
  }
}

async function tryHubspot() {
  try {
    const endpoint = '/deals/v1/deal/recent/modified'

    const deals = await request({
      method: 'GET',
      url: `https://api.hubapi.com${endpoint}`,
      qs: {
        hapikey: process.env.hubspotapikey,
        count: 100,
        since: '1463680280365'
      },
      json: true
    })

    console.log(deals)
  } catch (e) {
    alert(e)
  }
}
