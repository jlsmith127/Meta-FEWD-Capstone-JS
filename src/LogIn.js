function LogIn() { 
    return (
        <article>
        <h1 id="Log-h1">Log In</h1>
        <form className="LogInForm">
            <label>Email:</label>
            <input type="email"></input>
            <label>Password:</label>
            <input type="password"></input>
            <button>Log In</button>
            <button>Create Account</button>
        </form>
        </article>
    );
    }

    export default LogIn;