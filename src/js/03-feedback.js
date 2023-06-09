import throttle from 'lodash.throttle';

const formEL = document.querySelector(`.feedback-form`);
const emailEl = document.querySelector(`input[type="email"]`);
const messageEl = document.querySelector(`textarea`);

const infoToLocal = throttle(() => {
  const formState = {
    email: emailEl.value,
    message: messageEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const infoLoad = () => {
  const infoFromeLocal = localStorage.getItem('feedback-form-state');
  // console.log(infoFromeLocal);
  const formState = infoFromeLocal
    ? JSON.parse(infoFromeLocal)
    : { email: '', message: '' };

  emailEl.value = formState.email;
  messageEl.value = formState.message;
};

infoLoad();

emailEl.addEventListener(`input`, infoToLocal);
messageEl.addEventListener(`input`, infoToLocal);

formEL.addEventListener(`submit`, event => {
  event.preventDefault();
  const dataObj = {
    email: emailEl.value,
    message: messageEl.value,
  };

  console.log(dataObj);

  localStorage.removeItem('feedback-form-state');
  emailEl.value = '';
  messageEl.value = '';
});
