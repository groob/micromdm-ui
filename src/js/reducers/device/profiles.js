'use strict';

const initialState = {
  lastUpdated: null,
  loading: false,
  error: false,
  errorDetails: {},
  items: []
};

export default function profiles (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
