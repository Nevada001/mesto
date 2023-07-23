export default class UserInfo {
  constructor({name, about}) {
    this._userName = document.querySelector(name);
    this._userInfo = document.querySelector(about);
  };

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent
      }   
       
  };

  setUserInfo(name, about) {
    this._userName.textContent = name;
    this._userInfo.textContent = about;
  }
}