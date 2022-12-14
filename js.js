let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  while (isNaN(money) || money === "" || money === null) {
    money = +prompt("Ваш бюджет на месяц", "");
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  income: [],
  optinalExpenses: {},
  timeData: time,
  savings: true,
  chooseExpenses: function(){
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", "");
      let b = prompt("Во сколько это обойдется?", "");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },

  detectDayBudget: function (){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневый бюджет: " + appData.moneyPerDay);
  },

  checkSavings: function(){
    if (appData.savings === true){
      let save = +prompt("Какова сумма накоплений?")
      let percent = +prompt ("Под какой процент?")
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита " + appData.monthIncome)
  }
  },

  chooseIncome: function(){
    let items = prompt ('Что принесет допольнительный доход? (перечислите через запятую)');
    appData.income = items.split(', ')
  }


};


