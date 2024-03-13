import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function TodoItem ({ todo, remove, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;

    const removeTodo = () => {
        remove(todo.id);
    };
    
    return (
        <ListItem
            key={todo.id}
            secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                <DeleteOutlineIcon sx={{color: '#eb5e28'}} />
            </IconButton>
            }
            disablePadding
        >
            <ListItemButton 
                role={undefined} 
                dense
            >
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={toggle}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleOutlineIcon />}
                    color='warning'
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}
