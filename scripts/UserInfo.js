export default class UserInfo {
  constructor({userName, infoAboutUser}) {
    this._name = userName;
    this._info = infoAboutUser;
  };

  getUserInfo() {
    this._nameTitle = document.querySelector(".profile__title");
    this._infoTitle = document.querySelector(".profile__info-text");
    this._name.value = this._nameTitle.textContent;
    this._info.value = this._infoTitle.textContent;
  };

  setUserInfo() {
    this._nameTitle.textContent = this._name.value;
    this._infoTitle.textContent = this._info.value;
  }
}