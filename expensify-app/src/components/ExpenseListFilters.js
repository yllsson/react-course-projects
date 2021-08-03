import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={(event) => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(event) => {
        if (event.target.value === 'amount') {
          props.dispatch(sortByAmount());
        } else if (event.target.value === 'date') {
          props.dispatch(sortByDate());
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
