import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage(){
    const[validationerror, setValidationerror] = useState<string[]>([]);
    function getValidationError()
    {
        agent.TestErrors.getValidationError()
        .then(() => console.log('Should not see'))
        .catch(error => setValidationerror(error));
    }
    return(
        <Container>
            <Typography gutterBottom variant="h2">Error for Testing Purpose</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={()=> agent.TestErrors.get400Error()}>Click For 400</Button>
                <Button variant="contained" onClick={()=> agent.TestErrors.get401Error()}>Click For 401</Button>
                <Button variant="contained" onClick={()=> agent.TestErrors.get404Error()}>Click For 404</Button>
                <Button variant="contained" onClick={()=> agent.TestErrors.get500Error()}>Click For 500</Button>
                <Button variant="contained" onClick={getValidationError}>Click For Validation</Button>
            </ButtonGroup>
            {validationerror.length > 0 &&
            <Alert severity="error">
                <AlertTitle>Validation Error</AlertTitle>
                <List>
                    {validationerror.map(error=>(
                        <ListItem key={error}>
                            <ListItemText>{error}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Alert>
            }
        </Container>
    
    )
}