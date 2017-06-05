// @flow


export const Actions = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    COMPLETE_TODO: 'COMPLETE_TODO',
    SET_VISIBILITY_FILTER : 'SET_VISIBILITY_FILTER'
};

export type ActionType = $Keys<typeof Actions>;

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export type VisibilityFilter = $Keys<typeof VisibilityFilters>;
export type idx = number;

export function addTodo(text: string) {
    return {
        type: Actions.ADD_TODO,
        text
    }
}

export function completeTodo(id: idx) {
    return {
        type: Actions.COMPLETE_TODO,
        id
    }
}

export function toggleTodo(id: idx) {
    return {
        type: Actions.TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter: VisibilityFilter) {
    return {
        type: Actions.SET_VISIBILITY_FILTER,
        filter
    }
}

