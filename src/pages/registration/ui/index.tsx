import {FC} from 'react';
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE} from "@/shared/utils/consts.ts";

export const Registration: FC = () => {
    return (
        <div>
            <div>Registration</div>
            <div>
                <input type="text" className="text" id='first_name' placeholder='First Name'/>
            </div>
            <div>
                <input type="text" className="text" id='last_name' placeholder='Last Name'/>
            </div>
            <div>
                <input type="text" className="text" id='login' placeholder={"email@example.com"}/>
            </div>
            <div>
                <input type="password" className="text" id='password' placeholder='Password'/>
            </div>
            <div>
                <button>Sign Up</button>
            </div>
            <NavLink to={AUTH_ROUTE}>Log in</NavLink>
        </div>
    );
};
