import React, { useEffect } from 'react';
import { Container, Input, Button, NavBar, Select } from '../Components/index';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, removeExpense } from '../store/expenseSlice';

function Home() {
  const options = [
    { label: 'Food', value: 'food' },
    { label: 'Transport', value: 'transport' },
    { label: 'Shopping', value: 'shopping' },
    { label: 'Bills', value: 'bills' },
    { label: 'Others', value: 'others' }
  ];
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenseSlice.expenses);

  const [amount, setAmount] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [allExpenses, setAllExpenses] = React.useState();
  const [totalExpenditure, setTotalExpenditure] = React.useState(0);

  useEffect(() => {
    let total = 0;
    expenses.forEach(expense => {
      total += expense.amount;
    });
    setTotalExpenditure(total);
  }, [expenses]);

  useEffect(() => {
    setAllExpenses(expenses);
  }, [expenses]);

  const handleAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleCategory = (e) => {
    setCategory((e.target.value));
  };

  const handleAddExpense = () => {
    if (amount && category) {
      const expense = {
        id: Math.random(),
        amount,
        category,
        date: new Date().toLocaleDateString(),  // Add the current date
        time: new Date().toLocaleTimeString()   // Add the current time
      };
      dispatch(addExpense(expense));
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className='w-screen bg-black py-10'>
      <Container className="w-[50%] mx-auto p-5 bg-white/75 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Money Tracker | Track Your Expenses</h1>

        <div className="mb-4">
          <Input
            type="number"
            label="Amount"
            onChange={handleAmount}
            className="border-2 border-blue-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>

        <div className="mb-6">
          <Select
            label="Category"
            onChange={handleCategory}
            options={options}
            className="border-2 border-blue-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>

        <Button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-md w-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          onClick={handleAddExpense}
          name="Add Expense"
        />

        <h2 className="text-2xl font-semibold text-center text-gray-700 mt-8">Expenses</h2>
        
        <div className="mt-6">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              <tr>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {allExpenses && allExpenses.map(expense => (
                <tr key={expense.id} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="py-2 px-4 text-center">{expense.amount}</td>
                  <td className="py-2 px-4 text-center">{expense.category.toUpperCase()}</td>
                  <td className="py-2 px-4 text-center">{expense.date}</td>
                  <td className="py-2 px-4 text-center">{expense.time}</td>
                  <td className="py-2 px-4 text-center">
                    <Button
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all duration-200"
                      onClick={() => dispatch(removeExpense(expense.id))}
                      name="Remove"
                    />
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-200">
                <td className="py-2 px-4 text-center font-semibold">Total Expenditure</td>
                <td colSpan="4" className="py-2 px-4 text-center font-semibold">{totalExpenditure}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default Home;
