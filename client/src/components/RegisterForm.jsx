const RegisterForm = ()=>{

    return(<>
     <main class="auth-content">
        <form id="registerForm">
            <div class="grouped">
                <div class="form-group">
                    <label for="fName">First Name:</label>
                    <input type="text" id="fName" placeholder="John" />
                </div>

                <div class="form-group">
                    <label for="lName">Last Name:</label>
                    <input type="text" id="lName" placeholder="Wick" />
                </div>
            </div>

            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="johnwick" />
            </div>

            <div class="grouped">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="john@wick.com" />
                </div>

                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" placeholder="+254712345678" />
                </div>
            </div>

            <div class="form-group">
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" />
            </div>

            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender">
                    <option value="0">--Select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div class="grouped">
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="**************" />
                </div>

                <div class="form-group">
                    <label for="messageReturn">Confirm Password:</label>
                    <input type="password" id="confirmPassword" placeholder="**************" />
                </div>
            </div>
            <div class="form-group">
                <p id="messageText" class="mt-2 text-sm"></p>
            </div>

            <button type="submit">Create Account</button>
            <p class="text-center mt-4">
                Already have an account? <a href="login.html">Login.</a>
            </p>
        </form>
    </main>
    </>)
}
export {RegisterForm}