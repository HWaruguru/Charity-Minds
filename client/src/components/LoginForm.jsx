const LoginForm = ()=>{

    return(<>
     <main class="auth-content">
        <form id="loginForm"  action="" novalidate>
            <div class="form-group">
                <label for="email">Email:</label>
                <input  type="email"  id="email" placeholder="johnwick@gmail.com" required/>
                <p id="message" class="text-center text-sm mt-3"></p>
            </div>
           
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="**************" name="password" />
            </div>

            <button id="button" type="submit">Login</button>
            
            <p class="text-center mt-4">
                Don't have an account? <a href="register.html">Register.</a>
            </p>
          
        </form>
    </main>
    </>)
}
export {LoginForm}