import { createAction } from '@reduxjs/toolkit'

export const toggleTheme = createAction<void>('account/toggleTheme')
export const updateAddress =
    createAction<{ address: string }>('account/updateAddress')
