let money = prompt ("Ваш бюджет на месяц", '');
time = prompt ('Введите дату в формате YYYY-MM-DD', '');


let appData = {
budget : money,
expenses : {},
optinalExpenses : {},
timeData: time,
savings: false
};

for (let i =0; i<2; i++){
    let a = prompt ("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt ("Во сколько это обойдется?",'');
    if ((typeof(a))==='string'&& (typeof(a))!=null && (typeof(b))!=null && a!='' && b!=''&& a.length<50) {
    appData.expenses[a] = b;
}
}
