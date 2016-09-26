const API = require('./api')

class Razorpay {
  constructor({ key_id, key_secret }) {
    this.api = new API({
      hostUrl: 'https://api.razorpay.com/v1/',
      key_id,
      key_secret
    })
    this.addResources()
  }

  addResources() {
    Object.assign(this, {
      payments: require('./resources/payments')(this.api)
    })
  }
}

module.exports = Razorpay