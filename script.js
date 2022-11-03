/*---------------
VARIABLES
-----------------*/
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');
const submitBtn = document.querySelector('[type=submit]');
const main = document.querySelector('.main');
const complete = document.querySelector('.complete');
const continu = document.getElementById('continue')




/*---------------
EVENT LISTENERS CALL
-----------------*/
numberInput.addEventListener('keyup', counter);
submitBtn.addEventListener('click', checkInfo);
continu.addEventListener('click', completeForm);


/*---------------
CARD SPACE ADDER
-----------------*/
function counter(e) {
  if (e.key != 'Backspace') {
    if (e.target.value.replace(/\s/g, '').length % 4 == 0) {
      e.target.value = e.target.value + ' ';
    }
  }
}


/*---------------
ON FORM COMPLETION
-----------------*/
function completeForm() {
  main.classList.remove('none')
  complete.classList.add('none');
  document.getElementById('form').reset();
  valueAdder(false);
}


/*---------------
ALL DATA CHECKER
-----------------*/
function checkInfo(e) {
  e.preventDefault();
  checkName(nameInput);
  checkNumber(numberInput);
  checkYear(yearInput);
  checkMonth(monthInput);
  checkCvc(cvcInput);
  const allChecks = checkName(nameInput) && checkNumber(numberInput) && checkYear(yearInput) && checkMonth(monthInput) && checkCvc(cvcInput);
  console.log(allChecks);

  if (allChecks) {
    valueAdder(true);
    main.classList.add('none')
    complete.classList.remove('none');
  }

}


/*----------------
YEAR CHECKER
-----------------*/
function checkYear(year) {
  const regex = new RegExp('[0-9]{2}');
  let checker = regex.test(year.value) && year.value >= 23 && year.value <= 30;
  if (year.value.length == 0) {
    warningAdder(year);
  } else if (!checker) {
    errorAdder(year);
  } else {
    errorRemover(year);
    return true;
  }
}

/*---------------
MONTH CHECKER
-----------------*/
function checkMonth(month) {
  const regex = new RegExp('[0-9]{2}');
  const checker = regex.test(month.value) && month.value >= 1 && month.value <= 12;
  if (month.value.length == 0) {
    warningAdder(month);
  } else if (!checker) {
    errorAdder(month);
  } else {
    errorRemover(month);
    return true;
  }
}

/*---------------
CVC CHECKER
-----------------*/
function checkCvc(cvc) {
  const regex = new RegExp('[0-9]{3}');
  const checker = regex.test(cvc.value);
  if (cvc.value.length == 0) {
    warningAdder(cvc);
  } else if (!checker) {
    errorAdder(cvc);
  }
  else {
    errorRemover(cvc);
    return true;
  }
}

/*---------------
CARD NUMBER CHECKER
-----------------*/
function checkNumber(number) {
  const regex = new RegExp('[0-9]{14,18}');
  let checker = regex.test(number.value.replace(/\s/g, ''));
  if (number.value.length == 0) {
    warningAdder(number);
  } else if (!checker) {
    errorAdder(number);
  } else {
    errorRemover(number);
    return true;
  }
}


/*---------------
CARD HOLDER CHECKER
-----------------*/
function checkName(name) {
  const regex = new RegExp('[a-z]', 'i');
  let checker = [...name.value.replace(/\s/g, '')].every(item => regex.test(item));


  if (name.value.length == 0) {
    warningAdder(name);
  } else if (!checker) {
    errorAdder(name)
  }
  else {
    errorRemover(name)
    return true;
  }
}

/*---------------
ERROR AND WARNING ADDER
-----------------*/
function errorAdder(elem) {
  const alert = document.querySelector(`#${elem.id} ~ p`);
  alert.innerHTML = 'Invalid Value'
  elem.style.borderColor = 'red';
}

function errorRemover(elem) {
  const alert = document.querySelector(`#${elem.id} ~ p`);
  alert.innerHTML = ''
  elem.style.borderColor = 'unset';
}

function warningAdder(elem) {
  const alert = document.querySelector(`#${elem.id} ~ p`);
  alert.innerHTML = 'Empty value!'
}

/* ---------------
VALUE ADDER
---------------- */
function valueAdder(val) {
  const name = document.querySelector('.card__holder')
  const number = document.querySelector('.card__number')
  const date = document.querySelector('.card__date')
  const cvc = document.querySelector('.card__cnc')

  if (val) {
    name.innerHTML = `${nameInput.value}`;
    number.innerHTML = `${numberInput.value}`;
    date.innerHTML = `${monthInput.value}/${yearInput.value}`;
    cvc.innerHTML = `${cvcInput.value}`;
  } else if (!val) {
    name.innerHTML = 'Default';
    number.innerHTML = `0000 0000 0000 0000`;
    date.innerHTML = `00/00`;
    cvc.innerHTML = `000`;
  }
}