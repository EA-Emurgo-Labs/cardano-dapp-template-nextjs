import { createReducer } from '@reduxjs/toolkit'
import { toggleTheme, updateAddress } from '@/actions/account.action'

export interface AccountState {
    isDark: boolean
    address: string
}

export const initialState: AccountState = {
    isDark: false,
    address: ''
}

export default createReducer(initialState, builder =>
    builder
        .addCase(toggleTheme, state => {
            state.isDark = !state.isDark
        })
        .addCase(updateAddress, (state, { payload: { address } }) => {
            state.address = address
        }),
)
