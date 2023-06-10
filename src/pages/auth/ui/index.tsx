import {FC} from 'react';
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "@/shared/utils/consts.ts";

export const Auth: FC = () => {

    return (
        <div>
            <div>Authorization</div>
            <div>
                <input type="text" className="text" id='login' placeholder={"email@example.com"}/>
            </div>
            <div>
                <input type="password" className="text" id='password' placeholder='Password'/>
            </div>
            <div>
                <button>Login</button>
            </div>
            <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
        </div>
    );
};
