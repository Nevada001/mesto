(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers,this._validateRes=this._validateRes.bind(this)}var n,r;return n=t,(r=[{key:"_validateRes",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"setUserInfo",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"addNewCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"removeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t._id),{method:"DELETE",headers:this._headers}).then(this._validateRes).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"changeUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._validateRes)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_invalid",errorClass:"error"};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputErrorClass=e.inputErrorClass,this.__buttonSubmit=n.querySelector(e.submitButtonSelector),this._inactiveButtonClass=e.inactiveButtonClass,this._inputList=n.querySelectorAll(e.inputSelector)}var e,n;return e=t,(n=[{key:"_hideInputError",value:function(t){document.querySelector(".".concat(t.id,"-error")).textContent="",t.classList.remove(this._inputErrorClass)}},{key:"_showInputError",value:function(t){document.querySelector(".".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add(this._inputErrorClass)}},{key:"_removeDisabledButtonState",value:function(){this.__buttonSubmit.removeAttribute("disabled",!0),this.__buttonSubmit.classList.remove(this._inactiveButtonClass)}},{key:"_addDisabledButtonState",value:function(){this.__buttonSubmit.setAttribute("disabled",!0),this.__buttonSubmit.classList.add(this._inactiveButtonClass)}},{key:"toggleButtonState",value:function(){this._formElement.checkValidity()?this._removeDisabledButtonState():this._addDisabledButtonState()}},{key:"_validateInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"resetValidationState",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._validateInput(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._templateSelector=n,this._name=e.name,this._link=e.link,this._likes=e.likes,this._currentUser=r,this._userId=e.owner._id,this._handleCardClick=o,this._handleCardLike=i.handleCardLike,this._handleCardDislike=i.handleCardDislike,this._handleCardDelete=i.handleCardDelete}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardItem=this._element.querySelector(".card__image"),this._cardItem.src=this._link,this._cardItem.alt=this._name,this._cardDeleteButton=this._element.querySelector(".card__delete"),this._cardLike=this._element.querySelector(".card__heart"),this._element.querySelector(".card__name").textContent=this._name,this._counterOfLikes=this._element.querySelector(".card__number-likes"),this._counterOfLikes.textContent=this._likes.length,this._likes.some((function(e){return e._id===t._currentUser}))&&this._cardLike.classList.add("card__heart_active"),this._userId!==this._currentUser&&(this._cardDeleteButton.style.display="none"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardLike.addEventListener("click",(function(){t._checkLikeButton()?t._handleCardDislike(t._data):t._handleCardLike(t._data)})),this._element.querySelector(".card__image").addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._cardDeleteButton.addEventListener("click",(function(){t._handleCardDelete(t._data,t._element)}))}},{key:"deleteCard",value:function(t){t.remove(),t=null}},{key:"_checkLikeButton",value:function(){return this._cardLike.classList.contains("card__heart_active")}},{key:"cardLikeCounter",value:function(t){this._likes=t.likes,this._checkLikeButton()?(this._cardLike.classList.remove("card__heart_active"),this._counterOfLikes.textContent=parseInt(this._counterOfLikes.textContent)-1):(this._cardLike.classList.add("card__heart_active"),this._counterOfLikes.textContent=parseInt(this._counterOfLikes.textContent)+1)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._rendererItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"rendererItems",value:function(){var t=this;this._rendererItems.forEach((function(e){t._renderer(e)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__closed"))&&t.close()}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__picture"),e._popupCaption=e._popup.querySelector(".popup__name"),e}return e=a,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupCaption.textContent=t,_(S(a.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(h);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formSubmit=t,n._inputList=n._popup.querySelectorAll(".popup__input"),n._Submitbutton=n._popup.querySelector(".popup__button"),n._form=n._popup.querySelector(".popup__form"),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.getAttribute("id")]=e.value})),t}},{key:"renderLoading",value:function(t){this._Submitbutton.textContent=t}},{key:"savingData",value:function(t){this._Submitbutton.textContent=t}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmit(t._getInputValues())})),E(L(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){E(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(h);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var I=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o),this._buttonAvatarText=document.querySelector("#buttonSave")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._userName.textContent=e,this._userInfo.textContent=n,this._userAvatar.src=r}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitDelete=t,n._form=n._popup.querySelector(".popup__form"),n._buttonSubmit=n._popup.querySelector(".popup__button"),n}return e=a,(n=[{key:"open",value:function(t,e){this.cardItem=t,this.cardElement=e,D(x(a.prototype),"open",this).call(this)}},{key:"renderLoading",value:function(t){this._buttonSubmit.textContent=t}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitDelete(t.cardItem,t.cardElement),t.renderLoading("Удаление...")})),D(x(a.prototype),"setEventListeners",this).call(this)}},{key:"savingDataText",value:function(t){this._buttonDeleteTextConfirmation.textContent=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(h);function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var A=document.querySelector(".profile__button-edit"),N=document.querySelector(".profile__avatar"),V=document.querySelector(".popup__form_type_edit"),J=document.querySelector("#userName"),H=document.querySelector("#userInfo"),M=document.querySelector(".popup__form_type_add"),z=document.querySelector(".profile__button-add"),$=document.querySelector(".popup__form_type_avatar"),F=new g(".popup_image");function G(t,e){F.open(t,e)}F.setEventListeners();var K,Q,W,X=new n({baseUrl:"https://nomoreparties.co/v1/cohort-71",headers:{authorization:"7b17248a-4f40-4b14-bba1-0f66717e7e72","Content-Type":"application/json"}}),Y=new I({name:".profile__title",about:".profile__info-text",avatar:".profile__avatar"}),Z=new C(tt,".popup_delete");function tt(t,e){X.removeCard(t).then((function(){K.deleteCard(e),et.close()})).catch((function(t){console.log("bad ".concat(t))})).finally((function(){return Z.savingData("Да")}))}var et=new U(tt,".popup_delete");function nt(t){return K=new l(t,"#item",Q,G,{handleCardLike:function(t){X.addLike(t).then((function(t){K.cardLikeCounter(t)})).catch((function(t){console.log("bad ".concat(t))}))},handleCardDislike:function(t){X.removeLike(t).then((function(t){K.cardLikeCounter(t)})).catch((function(t){console.log("bad ".concat(t))}))},handleCardDelete:et.open.bind(et)}),K.generateCard()}et.setEventListeners(),Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,(W=new p({items:i.reverse(),renderer:function(t){W.addItem(nt(t))}},".cards")).rendererItems(),Y.setUserInfo(o)})).catch((function(t){console.log("bad ".concat(t))}));var rt=new C((function(t){rt.renderLoading("Обновление..."),X.changeUserAvatar(t.avatarLink).then((function(t){Y.setUserInfo(t),rt.renderLoading("Сохранение..."),rt.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){return rt.savingData("Сохранить")}))}),".popup_avatar-edit");rt.setEventListeners(),N.addEventListener("click",(function(){rt.open(),at.resetValidationState(),at.toggleButtonState()}));var ot=new C((function(t){ot.renderLoading("Сохранение..."),X.setUserInfo(t.userName,t.userInfo).then((function(t){Y.setUserInfo(t),ot.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){return ot.savingData("Сохранить")}))}),".popup_edit");ot.setEventListeners(),A.addEventListener("click",(function(){ot.open(),ut.resetValidationState();var t=Y.getUserInfo();J.value=t.name,H.value=t.about}));var it=new C((function(t){it.renderLoading("Создание..."),X.addNewCard(t.placeName,t.link).then((function(t){(W=new p({items:t,renderer:function(t){W.addItem(nt(t))}},".cards")).addItem(nt(t)),it.close()})).catch((function(t){console.log("bad ".concat(t))})).finally((function(){return it.savingData("Создать")}))}),".popup_add");it.setEventListeners(),z.addEventListener("click",(function(){it.open(),ct.resetValidationState(),ct.toggleButtonState()}));var at=new a(r,$);at.enableValidation();var ut=new a(r,V);ut.enableValidation();var ct=new a(r,M);ct.enableValidation()})();