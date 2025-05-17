
import {pureAddUserCallback, UserType} from '../HW3'
import React from "react";

let initialState: UserType[]
const setName = (a: any) => {
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
