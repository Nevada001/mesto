
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
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
      .then(this._validateRes.bind(this))

      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }

  setUserInfo(newName, newAbout) {
    return fetch(`${this._baseUrl}/users/me`, 
    {
      method: 'PATCH', 
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    })

      .then(this._validateRes.bind(this))


    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }
}