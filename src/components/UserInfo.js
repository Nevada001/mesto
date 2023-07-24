export default class UserInfo {
  constructor({name, about, avatar}) {
    this._userName = document.querySelector(name);
    this._userInfo = document.querySelector(about);
    this._userAvatar = document.querySelector(avatar)
  };

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent
      }        
  };

  setUserInfo(userData) {
    const {name, about, avatar} = userData;
    this._userName.textContent = name;
    this._userInfo.textContent = about;
    this._userAvatar.src = avatar;
  }
}