import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filterChangedHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  const yearsOptions = [
    { value: 2019, label: '2019', selected: false },
    { value: 2020, label: '2020', selected: false },
    { value: 2021, label: '2021', selected: false },
    { value: 2022, label: '2022', selected: false },
  ];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangedHandler} value={props.selectedYear}>
          {yearsOptions.map((yearOption) => {
            return <option value={yearOption.value} key={yearOption.value}>{yearOption.label}</option>
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
