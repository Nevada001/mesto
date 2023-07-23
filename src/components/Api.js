
export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _validateRes(res) {
    if(res.ok) {
      return res.json();
    }
   return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._validateRes.bind(this))

      .then((data) => {
        return data
      })

      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }
}