export default class UserInfo {
  constructor({name, about, avatar}) {
    this._userName = document.querySelector(name);
    this._userInfo = document.querySelector(about);
    this._userAvatar = document.querySelector(avatar);
    this._buttonAvatarText = document.querySelector('#buttonSaveAvatar')
  };

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent
      }        
  };

  _renderLoading() {
    this._buttonAvatarText.textContent = "Сохранение..." 
  }

  setUserInfo(userData) {
    const {name, about, avatar} = userData;
    this._userName.textContent = name;
    this._userInfo.textContent = about;
    this._userAvatar.src = avatar;
    this._renderLoading();
  }
}