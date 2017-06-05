import {AddTodo, CompleteTodo, VisibilityFilters, SetVisibilityFilter, ToggleTodo, idx, Actions} from "./actionTypes";
import type {VisibilityFilter, ActionType} from "./actionTypes";
import { Map } from 'immutable';

class Todo {
    text: string;
    completed: boolean;
    constructor(text: string) {
        this.text = text;
        this.completed = false;

    }
}

class AppState {
    visibilityFilter: VisibilityFilter;
    todos: Map<number, Todo>;
    todoSeq: number;
    constructor() {
        this.visibilityFilter = VisibilityFilters.SHOW_ALL;
        this.todos = new Map();
        this.todoSeq = 1;
    }
}

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: new Map(),
    todoSeq: 1,
};

console.log(initialState);
/*
function visibilityFilter(state = initialState, action: {type: ActionType, filter: VisibilityFilter}) {
    if (action.type !== Actions.SET_VISIBILITY_FILTER)
        return state;

    return {...state, visibilityFilter: action.filter};
}

function toggleTodo(state = initialState, action: {type: ActionType, id: idx}) {
    if (action.type !== Actions.TOGGLE_TODO)
        return state;

    console.log(action);
    console.log(state);
    const todo: Todo = state.todos.get(action.id);
    return {...state,
        todos: state.todos.set(toggleTodo.id, {...todo, completed: !todo.completed})
    };
}

function addTodo(state = initialState, action: {type: ActionType}) {
    if (action.type !== Actions.ADD_TODO)
        return state;

    return {...state,
        todoSeq: state.todoSeq + 1,
        todos: state.todos.set(state.todoSeq, new Todo(addTodo.text))
    };
}
*/

export function todoApp(state = initialState, action: {type: ActionType}) {
    switch (action.type) {
        case Actions.SET_VISIBILITY_FILTER:
            return {...state, visibilityFilter: action.filter};
        case Actions.TOGGLE_TODO:
            const todo: Todo = state.todos.get(action.id);
            return {...state,
                todos: state.todos.set(action.id, {...todo, completed: !todo.completed})
            };
        case Actions.ADD_TODO:
            return {...state,
                todoSeq: state.todoSeq + 1,
                todos: state.todos.set(state.todoSeq, new Todo(action.text))
            };
    }
}

/*
export function todoApp(state : AppState = initialState, action ?: Action) {
    switch (action.type) {
        case SetVisibilityFilter:
            const setVisibilityFilter = ((action: any): VisibilityFilter);
            return {...state, visibilityFilter: setVisibilityFilter.visibilityFilter};

        case AddTodo:
            const addTodo = ((action: any): AddTodo);
            return {...state,
                todoSeq: state.todoSeq + 1,
                todos: state.todos.set(state.todoSeq, new Todo(addTodo.text))
            };
        case ToggleTodo:
            const toggleTodo = ((action: any): ToggleTodo);
            const todo: Todo = state.todos.get(toggleTodo.id);

            return {...state,
                todos: state.todos.set(toggleTodo.id, {...todo, completed: !todo.completed})
            };
        default:
            console.log(action);
            console.log(action.type);
            return state;
    }
}
*/
export default todoApp;
