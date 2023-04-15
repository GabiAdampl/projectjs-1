class Expense {
	constructor(name, amount) {
		this.name = name;
		this.amount = amount;
	}
}

class BudgetApp {
	constructor() {
		this.incomes = [];
		this.expenses = [];
	}

	addIncome(name, amount) {
		this.incomes.push(new Expense(name, amount));
	}

	addExpense(name, amount) {
		this.expenses.push(new Expense(name, amount));
	}

	editExpense(index, name, amount) {
		if (index >= 0 && index < this.expenses.length) {
			this.expenses[index].name = name;
			this.expenses[index].amount = amount;
		} else {
			console.log('Nieprawidłowy indeks pozycji wydatku');
		}
	}

	deleteExpense(index) {
		if (index >= 0 && index < this.expenses.length) {
			this.expenses.splice(index, 1);
		} else {
			console.log('Nieprawidłowy indeks pozycji wydatku');
		}
	}

	calculateBalance() {
		let totalIncomes = 0;
		let totalExpenses = 0;

		for (let income of this.incomes) {
			totalIncomes += income.amount;
		}

		for (let expense of this.expenses) {
			totalExpenses += expense.amount;
		}

		let balance = totalIncomes - totalExpenses;

		if (balance > 0) {
			console.log(`Możesz jeszcze wydać ${balance} złotych`);
		} else if (balance === 0) {
			console.log('Bilans wynosi zero');
		} else {
			console.log(`Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance)} złotych`);
		}
	}

	getRemainingBalance() {
		let totalIncomes = 0;
		let totalExpenses = 0;

		for (let income of this.incomes) {
			totalIncomes += income.amount;
		}

		for (let expense of this.expenses) {
			totalExpenses += expense.amount;
		}

		return totalIncomes - totalExpenses;
	}
}
