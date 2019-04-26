import Request from './helpers/request'
import Contacts from './hubspot-contact-endpoint'
import Blog from './hubspot-blog-endpoint'
import Deals from './hubspot-deal-endpoint'
import Tickets from './hubspot-ticket-endpoint'

const NodeHubSpotApi = (apiKey = null) => {
  const api = new Request(apiKey)

  return {
    calendar: null,
    companies: null,
    contacts: Contacts(api),
    blog: Blog(api),
    domains: null,
    files: null,
    deals: Deals(api),
    tickets: Tickets(api)
  }
}

module.exports = NodeHubSpotApi
