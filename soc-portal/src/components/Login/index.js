// Get the value of both input and password
/*
onChange/onSubmit -> e.target.value

*/

// Loop through login data and compare against username and password
// if true --> find common property (email) then we want to grab userData with relevant login account.



function Login ({handleLogin}){
// write a function to check details


    return (
        <div>
            <form onSubmit = {handleLogin}>
               <label>Username:<input type="text" id = "username"></input></label>
                <label>Password:<input type="text" id = "password"></input></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    
    
    }
    
    
    
    
    
    
    
    
    export default Login;