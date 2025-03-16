Authentication is a critical part of most web applications. Whether you're building a simple app or a complex system, ensuring that users can securely log in and access their data is essential. In this guide, we'll walk through how to set up authentication in a React application using **JSON Web Tokens (JWT)** and **React Context API**. By the end, you'll have a fully functional authentication system with secure and persistent login.



## **What We'll Build**
We'll create a React app with the following features:
1. User login.
2. Protected routes that only authenticated users can access.
3. Persistence of user sessions using JWT.



## **Prerequisites**
Before we start, make sure you have:
- Basic knowledge of React and JavaScript.
- Node.js and npm installed on your machine.
- A backend API for handling authentication (This blog will only be focused on the Frontend Authentication).



## **Step 1: Set Up Your React App**
If you don’t already have a React app, create one using Create React App:

```bash
npx create-react-app react-auth-demo
cd react-auth-demo
```


## **Step 2: Install Required Dependencies**
We'll need a few libraries to handle routing and HTTP requests:

```bash
npm install react-router-dom axios
```

- `react-router-dom`: For routing and protecting routes.
- `axios`: For making HTTP requests to the backend.


## **Step 3: Create the Auth Context**
In this step, we will create a login page that sets the access token and refresh token in the state management library. In this project, I am using Redux. However, I will not be covering anything about Redux in this blog.

Create a file called `SignIn.jsx`:

```javascript
import React, {useState, useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuth } from '../features/auth/authSlice'
import axios from '../utils/axios'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const signInClick = async (e) =>{
        e.preventDefault();
        if (email == "" || pass == "") {
            console.log("Empty Inputs")
            return
        }

        try {
            const response = await axios.post(
                'auth/login', 
                {
                email: email,
                password: pass,
                },
                {
                    withCredentials: true, // ✅ Sends cookies with the request
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
,);

                console.log(response)

                const accessToken = response.data.accessToken
                const refreshToken = response.data.refreshToken

            dispatch(setAuth({accessToken,refreshToken}))
            navigate("/")
        } catch (error){
            console.error('Error during login:', error.response ? error.response.data : error.message);
            alert('Login failed. Please try again.');
        }
    }

    return (
        <section className='w-full h-fit bg-[#0F1117]'>
            <section className='sign-in min-h-screen max-h-fit flex justify-center w-full p-6 flex-col items-center'>
                <form className='bg-[#151821] w-[90%] h-4/5 flex flex-col gap-3 max-w-[450px] mt-5 pt-[50px] pb-[70px] px-[60px] rounded-[20px] left-2/4 top-2/4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="text-white font-medium text-2xl ">Sign In</h1>
                            <p className='text-[#858EAD]'>to Continue Networking</p>
                        </div>
                        <h1 className='text-white'>logo</h1>
                    </div>
                    <div className='input-group'>
                        <div className='flex items-center mx-0 my-[15px]'>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='bg-[#212734] text-[#858EAD] rounded-md w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <div className='flex gap-3 flex-col justify-center mx-0 my-[15px] rounded-[3px]'>
                            <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" className='bg-[#212734] rounded-md text-[#858EAD] w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                            <Link to={"forgot-password"} className='self-end text-[#1DA1F2]'>Forgot Password</Link>
                        </div>
                    </div>
                    <div className='w-full '>
                        <button onClick={signInClick} className='bg-gradient-to-r from-[#FF7000] to-[#E2995F] text-sm basis-[48%] h-10 w-full rounded-md text-white font-medium border-0 outline-none' type="button" id="signInBtn">Continue</button>
                        <p className='text-sm text-center mt-3 text-[#FFFFFF]'>Don't have an account? <Link className='text-center text-[#FF7000] text-sm text-decoration-line: underline' to={"/Signup"}>Sign Up</Link> Here.</p>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default SignIn
```


## **Step 4: Create the ProtectedRoute.jsx**
In this step, we will create a new component that will serve as the parent component for the protected routes, so we will name it `ProtectedRoute.jsx`.

```javascript
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = () => {
    const auth = useSelector((state) => state.auth)
    console.log("auth from protected route ", auth)
    const location = useLocation();

    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/signin"/>
    );
}

export default ProtectedRoute;
```



## **Step 5: Creating useRefreshHook.js**
As the name suggests, it will use the refresh token. You might be wondering why we need a refresh token. The reason becomes clear in the next step when we implement persist login. In that case, we will need to generate a new access token upon reloading. This hook will return a function that generates an access token whenever it is called.

```javascript
import axios from '../utils/axios.js';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../features/auth/authSlice';

const useRefreshToken = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        const response = await axios.get('auth/refresh', {
            withCredentials: true
        });
        dispatch(setAccessToken(
            {
                accessToken: response.data.accessToken 
            }
        ));

        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
```

## **Step 6: Creating PersistLogin.jsx**
The authentication will function correctly even without PersistLogin; however, the issue is that users will be redirected to the login page upon reloading.

To address this, create a PersistLogin.jsx component as a parent for protected routes. This component will ensure that when a user reloads the page, it triggers a refresh hook to generate a new access token. Before issuing the new token, it will verify the existing access token on the backend, as it remains stored in an HTTP-only cookie—accessible only by the backend.

```javascript
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../hooks/useRefreshToken';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../features/auth/authSlice";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const auth = useSelector((state) => state.auth)

    useEffect(() => {

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, [auth?.accessToken])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])

    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />
                    
            }
        </>
    )
}

export default PersistLogin
```



## **Step 7: Routes**


```javascript
 <>
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="collections" element={<Collections />} />
              <Route path="ask-a-question" element={<AskAQuestion />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="communitiesbytags" element={<CommunitiesByTags/>} />
              <Route path="communities/:TagName" element={<Communities />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/tagSection/:id" element={<TagSection />} />
              <Route path="/blog" element={<Blog/>} />
            </Route>
          </Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
      
    </>
```



## **Step 8: Test Your App**
Run your app:

```bash
npm run dev
```

Log in with valid credentials.
Access the protected Routes.

## **Summary**
There are other ways to set up authentication, but this is one of the easiest and most secure methods to authenticate users and allow them to perform certain actions that only logged-in users can access. Many of you may be wondering what is actually happening.

To put it simply, when we log in, we receive an access token and a refresh token from the backend. These tokens are included in the response, and the refresh token is stored as an HttpOnly secure cookie. The best practice is to keep the access token in memory, such as in state management, to avoid prop drilling and ensure a seamless authentication flow.

After that, we created a React component, ProtectedRoute.jsx. This component acts as a wrapper for routes that require authentication. It checks if the user has a valid access token before allowing them to access protected pages. If the token is missing or expired, the user is redirected to the login page.

To enhance this functionality, we implemented a PersistLogin.jsx component. This component ensures that even if the user refreshes the page, they remain logged in. It does this by utilizing the refresh token, which allows the backend to generate a new access token without requiring the user to log in again. Since the refresh token is stored in an HttpOnly cookie, only the backend can access it, making it more secure.

With this setup, we have a robust authentication system in place that maintains user sessions securely while minimizing the risk of token exposure.

## **Conclusion**
You’ve successfully set up authentication in a React app! This example uses JWT for session management and React Context API for state management. The login is secure and persist, ensuring users remain logged in even after refreshing the page.

## If you are still confused about this topic

I would suggest you to [--Watch This Video--](https://youtu.be/brcHK3P6ChQ?si=YY376yNQ9Ii0Cg8c).  
It's a playlist for React authentication for beginners.


Thanks for Reading,
Happy coding! 🚀
