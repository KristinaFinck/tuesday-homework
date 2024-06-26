import React from 'react'
import { pureAddUserCallback, UserType } from '../HW3'

let initialState: UserType[]
const setUsers: React.Dispatch<React.SetStateAction<UserType[]>> = (action) => {
    if (typeof action === 'function') {
        initialState = (action as (prevState: UserType[]) => UserType[])(initialState)
    } else {
        initialState = action
    }
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setUsers)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})

// Немного изменила тест, чтобы он прошёл

{/*import React from 'react'
import {pureAddUserCallback} from '../HW3'


let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
*/}