import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any - СДЕЛАЛА
    switch (action.type) {

        case 'sort': { // by name
            const direction = action.payload; //up or down
            let stateCopy = [...state];
            return stateCopy.sort((a, b) =>
                direction === 'up'
                    ?
                    a.name.localeCompare(b.name)
                    :
                    b.name.localeCompare(a.name)
            );
            // need to fix +
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
            // need to fix +
        }
        default:
            return state
    }
}
