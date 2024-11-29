import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, TextField, Select, Button } from "@mui/material";

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}>

                <TextField
                    label="Habbit Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter habit name"
                />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                    >
                        <MenuItem value="daily">Daily </MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Add Habit
                </Button>
            </Box>
        </form>
    );
};

export default AddHabitForm;