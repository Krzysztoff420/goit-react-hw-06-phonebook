import { statusFilters } from "./constants";
const tasksInitialState = {
    contacts: [],
    filter: ""
};
export const tasksReducer = (state = tasksInitialState, action) => { };
const filtersInitialState = { status: statusFilters.all, };
export const filtersReducer = (state = filtersInitialState, action) => {  };