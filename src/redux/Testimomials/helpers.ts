import { initialState } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
export const handleFullfiled = (state: typeof initialState) => {
    state.loading = false;
}

export const handlePenging = (state: typeof initialState) => {
    state.loading = true;
    state.error = null;
}

export const handleRejected = (state: typeof initialState, action: PayloadAction<any>) => {
    state.loading = false;
    state.error = action.payload;
}