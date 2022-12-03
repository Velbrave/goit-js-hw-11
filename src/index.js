import { fetchPikchers } from './js/fetch';
import { countryСardTeemplate } from "./js/markup";

const refs = {
  formEl: document.querySelector('.search-form'),
  inputEl: document.querySelector('#search-text'),
  btnEl: document.querySelector('.btn-search'),
  cardEl: document.querySelector('.galery'),
}

refs.formEl.addEventListener('submit', onSubmit)

function onSubmit(params) {
  
}