// create object called personAccount
// has firstName, lastName, incomes, expenses properties
// has totalIncome, totalExpense, accountInfo, addIncome, addExpense, accountBalance methods
const personAccount = {
    firstName: "Noran",
    lastName: "Abdel-Aziz",
    incomes: [100, 200, 300, 400, 500],
    expenses: [500, 200, 300, 100, 400],
    totalIncome: function(){
        const sum = 0;
        for(const num in this.incomes){
            sum += num;
        }
        return sum;
    },
    totalExpense: function(){
        const sum = 0;
        for(const num in this.expenses){
            sum += num;
        }
        return sum;
    },
    accountInfo: function(){
        return `Name: ${this.firstName} ${this.lastName}\nIncome: ${this.incomes}\nExpenses: ${this.expenses}\nTotal Income: ${this.totalIncome}\nTotal Expenses: ${this.totalExpense}`;
    },
    addIncome: function(newIncome){
        this.incomes.push(newIncome);
    },
    addExpense: function(newExpense){
        this.expenses.push(newExpense);
    },
    accountBalance: function(){
        return this.totalIncome - this.totalExpense;
    }
}


const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
]
  
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
]

// create a function called signUp which allows user to add to the collection
// if user exists, inform the user that he already has an account
function signUp(){
    
}