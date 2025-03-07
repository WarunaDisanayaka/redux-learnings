import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit{
    id:string;
    name:string;
    frequency: "daily" | "weekly";
    completeDates:string[];
    createdAt:string
}

interface HabitState{
    habits: Habit[];
}

const initialState: HabitState = {
    habits:[],
}

const habitSlice = createSlice({
    name:"habbits",
    initialState,
    reducers:{
        addHabit: (
            state,
            action: PayloadAction<{name:string; frequency:"daily" | "weekly"}>
        ) =>{
            const newHabit: Habit={
                id: Date.now().toString(),
                name:action.payload.name,
                frequency: action.payload.frequency,
                completeDates:[],
                createdAt:new Date().toISOString(),
            };
            state.habits.push(newHabit);
        },
    },
})

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;