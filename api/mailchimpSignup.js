// require('dotenv').config()

export function setupMailchimpPopup() {
  const mailchimpConfig = {
    baseUrl: 'mc.us18.list-manage.com',
    uuid: '35f22d84b4fdb209da5977e3b',
    lid: 'd5263ee7ce'
  }

  const chimpPopupLoader = document.createElement('script')
  chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js'
  chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false')
  const chimpPopup = document.createElement('script')
  chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' + mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'))

  chimpPopupLoader.onload = function () {
    document.body.appendChild(chimpPopup)
  }
  document.body.appendChild(chimpPopupLoader)
}
