const form = document.getElementById('form');
const buttonModel = document.querySelector('.button-model');
const emailModel = document.getElementById('email');

const nameholder = document.getElementById('name');
const emailholder = document.getElementById('email');
const messageholder = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailModel.value !== emailModel.value.toLowerCase()) {
    if (!document.querySelector('.error')) {
      const errorAlert = document.createElement('p');
      errorAlert.innerText = 'Email must be lowercase';
      buttonModel.appendChild(errorAlert);
      errorAlert.classList.add('error');
    }
  } else {
    form.submit();
  }
});

let localData = JSON.parse(localStorage.getItem('userInput'));
let formInput = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
};

const onChangeInput = (input) => {
  input.addEventListener('change', (e) => {
    formInput = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    formInput[input.name] = e.target.value;
    localStorage.setItem('userInput', JSON.stringify(formInput));
    localData = JSON.parse(localStorage.getItem('userInput'));
  });
};

onChangeInput(nameholder);
onChangeInput(emailholder);
onChangeInput(messageholder);

if (localData !== null) {
  nameholder.value = localData.name;
  emailholder.value = localData.email;
  messageholder.value = localData.message;
}

