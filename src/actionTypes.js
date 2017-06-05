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

export class Action {
    type: ActionType;
    constructor(actionType: ActionType) {
        this.type = actionType;
    }
}


export class AddTodo extends Action {
    text: string;
    constructor(text: string) {
        super(Actions.ADD_TODO);
        this.text = text;
    }
}

export class CompleteTodo extends Action {
    id: idx;
    constructor(id: idx) {
        super(Actions.COMPLETE_TODO);
        this.id = id;
    }
}


export class ToggleTodo extends Action {
    id: idx;
    constructor(id: idx) {
        super(Actions.TOGGLE_TODO);
        this.id = id;
    }
}

export class SetVisibilityFilter extends Action {
    visibilityFilter: VisibilityFilter;
    constructor(visibilityFilter: VisibilityFilter) {
        super(Actions.SET_VISIBILITY_FILTER);
        this.visibilityFilter = visibilityFilter;
    }
}
