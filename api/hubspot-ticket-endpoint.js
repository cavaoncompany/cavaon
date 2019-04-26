import errorHandler from './helpers/errorHandler'
import responseHandler from './helpers/responseHandler'

const Tickets = (api = null) => {
  if (api === null) throw new Error('Request instance must be provided on constructor.')

  return {
    mapProperties(properties) {
      return Object.keys(properties).map(property => ({
        name: property,
        value: properties[property]
      }))
    },

    getAll(params) {
      const defaultParams = {
        offset: null,
        ...params
      }

      return api.get('crm-objects/v1/objects/tickets/paged', defaultParams)
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    }
  }
}

export default Tickets
