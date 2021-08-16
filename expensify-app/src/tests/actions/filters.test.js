import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate sort by date action object', () => {
  // Testing with the function added directly into expect call. Cleaner way of doing it than down below (but potentially more confusing?).
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sort by amount action object', () => {
  // Testing with the function added to variable and then variable added into expect call.
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate set text filter action object with provided text value', () => {
  const action = setTextFilter('rent');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
