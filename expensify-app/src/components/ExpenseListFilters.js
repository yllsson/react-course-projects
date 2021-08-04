import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(event) => {
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(event) => {
            if (event.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            } else if (event.target.value === 'date') {
              this.props.dispatch(sortByDate());
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId='your_unique_start_date_id'
          endDate={this.props.filters.endDate}
          endDateId='your_unique_end_date_id'
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
