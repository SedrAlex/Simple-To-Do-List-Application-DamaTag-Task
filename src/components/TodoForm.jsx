import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { InputAdornment } from '@mui/material';
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    sx={{
                        width: '470px'
                    }}
                    color='warning'
                    id='outlined-basic' 
                    label='add task' 
                    variant='outlined' 
                    onChange={handleChange}  
                    value={text}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                                <IconButton 
                                    aria-label="create todo" 
                                    edge="end" 
                                    type="submit"
                                >
                                    <CreateOutlinedIcon sx={{color: '#eb5e28'}} />
                                </IconButton>
                            </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    );
}