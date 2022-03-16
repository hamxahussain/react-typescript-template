import {makeObservable, observable, action } from "mobx"

export const popupView = new (class { 
  constructor() {
    makeObservable(this, {
      jsx: observable,
      isBackClickable:observable,
      show: action,
      hide: action
    })
  }

  jsx?: string | JSX.Element | null = null;
  isBackClickable?: boolean = false

  show = (jsx?: string | JSX.Element | null, isBackClickable?:boolean) => {
    this.jsx = jsx
    this.isBackClickable = isBackClickable || false
  }
  hide = () => {
    this.jsx = null
  }
})()
