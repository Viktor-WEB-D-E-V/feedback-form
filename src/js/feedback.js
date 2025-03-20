import throttle from 'lodash.throttle';
import { load, save, remove } from './storage';

const KEY_STORAGE = 'feedback-form-state';

const form = document.querySelector('form'),
  emailValue = form.querySelector('input[name="text"]'),
  textareaValue = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

restoreInputs();

function restoreInputs() {
  const data = load(KEY_STORAGE) || {};

  emailValue.value = data.text || '';
  textareaValue.value = data.message || '';
}

function onInput(e) {
  const target = e.target;

  const saveData = load(KEY_STORAGE) || {};
  saveData[target.name] = target.value;
  save(KEY_STORAGE, saveData);
}

function onSubmit(e) {
  e.preventDefault();

  load(KEY_STORAGE) === null
    ? console.log('No data provided')
    : console.log(load(KEY_STORAGE));

  remove(KEY_STORAGE);
  e.target.reset();
}
