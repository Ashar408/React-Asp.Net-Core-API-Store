
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
interface Props{
    darkMode: boolean;
    handleThemeChange:()=>void;
}
const midLink=[
    {title:'catalog', path: '/catalog'},
    {title:'about', path: '/about'},
    {title:'contact', path: '/contact'}
]

const rightLink=[
    {title:'login', path: '/login'},
    {title:'register', path: '/register'}
]
const navStyles={
    color: 'inherit',
    typography: 'h6',
    textDecoration:'none',
    '&:hover':{
        color:'grey.500'
    },
    '&.active':{
        color:'text.secondary'
    }
    }

export default function Header({darkMode, handleThemeChange}:Props){
 
    return(
    
        <AppBar position='static' sx={{mb:3}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

        <Box sx={{display:'flex', alignItems:'center'}}>
        <Typography variant="h6" component={NavLink} to={'/'} sx={navStyles}>
                Mark-Store
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Box>

        <Box>
           <List sx={{display:'flex'}}>
                {midLink.map(({title, path}) =>(
                    <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}    
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
        </Box>

        <Box sx={{display:'flex', alignItems:'center'}}> 
            <IconButton size="large" sx={{color:'inherit'}}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart/>
                </Badge>
            </IconButton>
            <List sx={{display:'flex'}}>
                {rightLink.map(({title, path}) =>(
                    <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}    
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
        </Box> 
        </Toolbar>
        </AppBar>
        
    )
}