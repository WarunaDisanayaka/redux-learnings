import { createSlice } from "@reduxjs/toolkit";

export interface Habit{
    id:string;
    name:string;
    frequency:"daily" | "weekly";
    completeDates:string[];
    createdAt:string
}

interface HabitState{
    habits: Habit[];
}

const initialState = {}

const habitSlice = createSlice({
    name:"habbits",
    initialState,
    reducers:{
        addHabit: () =>{},
    },
})

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;