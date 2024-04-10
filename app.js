    const portfolioItems = document.querySelectorAll('.portfolio-item');
let currentIndex = 0;

function showNextItem() {
  const current = portfolioItems[currentIndex];
  current.classList.remove('active');
  current.classList.add('hidden');

  currentIndex = (currentIndex + 1) % portfolioItems.length;

  const next = portfolioItems[currentIndex];
  next.classList.remove('hidden');
  setTimeout(() => next.classList.add('active'), 50);
}

setInterval(showNextItem, 5000); // Change slide every 5 seconds

// form validation
// const form = document.querySelector('#form')
// const name = document.querySelector('#name')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const confirmPassword = document.querySelector('#confirmPassword')

// form.addEventListener('submit', (e) =>{
//   e.preventDefault()


//   checkInputs()
// })

// function checkInputs(){
//   const nameValue = name.value.trim()
//   const emailValue = email.value.trim()
//   const passwordValue = password.value.trim()
//  const confirmPasswordValue = confirmPassword.value.trim()

//  if (name === ''){


//   setErrorFor(name, 'Name cannot be blank')
//  }else {
//   setSuccessFor(name)
//  }
// }

// function setErrorFor (input, message){
//   const formControl = input.parentElement
//   const small = form.querySelector('small')
//   small.innerText = message
//   formControl.className = 'form-control error'
// }

// function setSuccessFor(input){
//   const formControl = input.parentElement
// }

  const form = document.querySelector('#form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirmPassword');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true

    if (nameValue === '') {
      setErrorFor(name, 'Name cannot be blank');
      isValid = false
    } else {
      setSuccessFor(name);
    }

    if (emailValue === ''){
      setErrorFor(email, 'Email cannot be blank')
      isValid = false
    }else if (isEmail(emailValue)){
      setErrorFor(email,'Email is not valid' )
      isValid = false
    }else{
      setSuccessFor(email)
    }

    if (passwordValue === ''){
      setErrorFor(password, 'Password cannot be blank')
      isValid = false
    }else if(isPassword(passwordValue)){
      setErrorFor(password, 'Password should be more than eight characters')
      isValid = false
    }
    else{
      setSuccessFor(password)
    }

    if (confirmPasswordValue === ''){
      setErrorFor(confirmPassword, 'Confirm Password')
      isValid = false
    }else if (passwordValue !== confirmPasswordValue){
      setErrorFor(confirmPassword, ' Password does not match')
      isValid = false
    }else{
      setSuccessFor(confirmPassword)
    }

      if (isValid) {
    form.submit(); // Submit the form if all inputs are valid
  }

  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const email = formControl.querySelector('email')



    const small = formControl.querySelectorAll('small');
    small.innerText = message;
    formControl.className = 'form-control error';
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function isEmail (email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  function isPassword (password){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
  }