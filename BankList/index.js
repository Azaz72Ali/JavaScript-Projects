'use strict';

const account1 = {
  owner: 'Rahul Sharma',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-07-01T21:31:17.178Z',
    '2022-06-23T07:42:02.383Z',
    '2022-06-28T09:15:04.904Z',
    '2022-06-01T10:17:24.185Z',
    '2022-06-08T14:11:59.604Z',
    '2022-06-28T17:01:17.194Z',
    '2022-06-29T23:36:17.929Z',
    '2022-06-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};
const account2 = {
  owner: 'Jon Dravid',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-04-01T13:15:33.035Z',
    '2022-04-30T09:48:16.867Z',
    '2022-04-25T06:04:23.907Z',
    '2022-04-25T14:18:46.235Z',
    '2022-04-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-04-25T18:49:59.371Z',
    '2022-04-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Sam Tinker Root',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2022-03-18T21:31:17.178Z',
    '2022-03-23T07:42:02.383Z',
    '2022-03-28T09:15:04.904Z',
    '2022-03-01T10:17:24.185Z',
    '2022-03-08T14:11:59.604Z',
    '2022-03-26T17:01:17.194Z',
    '2022-03-28T23:36:17.929Z',
    '2022-03-01T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-GB',
};

const account4 = {
  owner: 'Shivam Sharma',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2022-06-01T13:15:33.035Z',
    '2022-06-30T09:48:16.867Z',
    '2022-06-25T06:04:23.907Z',
    '2022-06-25T14:18:46.235Z',
    '2022-06-05T16:33:06.386Z',
    '2022-06-10T14:43:26.374Z',
    '2022-06-25T18:49:59.371Z',
    '2022-06-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'hi-IN',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/************************************************************************************ */

/*********DATE FORMATTING */
function formatDate(date, locale) {
  const days = (date, date2) =>
    Math.round(Math.abs(date - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = days(date, new Date());
  // console.log(daysPassed);
  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}
/******************CURRENCY FORMAT********************************************* */
function formatCurr(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}
/****************SET TIMER******************************************************** */
const setTimer = function () {
  const tick = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time == 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    time--;
  };
  let time = 300;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

/*****************************DISPLAY*********************************************** */
const display = function (acco, sort = false) {
  containerMovements.innerHTML = ''; // to erase all old precoded data
  const movs = sort
    ? acco.movements.slice().sort((a, b) => a - b)
    : acco.movements;
  movs.forEach(function (mov, index) {
    const date = new Date(acco.movementsDates[index]); //'string format like tue 12

    const displaydate = formatDate(date, acco.locale);
    const formatCurrency = formatCurr(mov, acco.locale, acco.currency);

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__date">${displaydate}</div>
    <div class="movements__value">${formatCurrency}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
/*******************DISPLAY BALANCE********************************************************** */
const calcDisplayBalance = function (acco) {
  acco.balanceAdd = acco.movements.reduce((acc, curr) => acc + curr);

  labelBalance.textContent = formatCurr(
    acco.balanceAdd,
    acco.locale,
    acco.currency
  );
};

/*********************DISPLAY SUMMARY************************************************************ */

const calcDisplaySummary = function (ac) {
  const incomes = ac.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, ac.locale, ac.currency);

  const out = ac.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(out), ac.locale, ac.currency);
  //

  const interestAmount = ac.movements
    .filter(x => x > 0)
    .map(dep => (dep * ac.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc + curr);
  labelSumInterest.textContent = formatCurr(
    interestAmount,
    ac.locale,
    ac.currency
  );
};

/*********************CREATE USERNAME**************************************************************** */
const createUsername = function (acc) {
  acc.forEach(function (ac) {
    ac.username = ac.owner
      .toLowerCase()
      .split(' ')
      .map(x => x[0])
      .join('');
    // console.log(ac);
  });
};

createUsername(accounts);
/*********************** */
let currentAccount, runTimer;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    /******CURRENT DATE AND TIME */
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const showDate = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const dayy = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = showDate;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //timer
    if (runTimer) clearInterval(runTimer);
    runTimer = setTimer();
    updateUI(currentAccount);
  }
});

/**************************** TRANSFER ********************************************************************** */

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(receiverAcc, amount);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balanceAdd &&
    receiverAcc.username !== currentAccount.username
  ) {
    // console.log('hihii');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    /****DATE PUSH-TRANSFER DATE */
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    // RESET TIMER
    clearInterval(runTimer);
    runTimer = setTimer();
  }
});
/*****************************CLOSE ACCOUNT************************************************************************ */

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  // console.log(accounts);
});
/****************************LOAN************************************************************************ */
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amt = Math.floor(+inputLoanAmount.value);
  const eligible = currentAccount.movements.some(mov => mov >= amt * 0.1);
  if (amt > 0 && eligible) {
    setTimeout(() => {
      currentAccount.movements.push(amt);
      /***LOAN DATE */
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      // reset timer
      clearInterval(runTimer);
      runTimer = setTimer();
    }, 1500);
  }
  inputLoanAmount.value = '';
});

/**************************SORTING  ******************************************************** */
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  display(currentAccount, !sorted);
  sorted = !sorted;
});
/*************************UPDATE FUNCTION******************************************************* */
function updateUI(acc) {
  display(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// display(account2.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
