import {FC, useContext} from "react";
import {AppContext} from "@/app";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE} from "@/shared/utils/consts.ts";


export const Header: FC = observer(() => {
    const {user} = useContext(AppContext);
    const navigate = useNavigate();

    const onLogout = () => {
        user?.setIsAuth(false);
        navigate(HOME_ROUTE);
    }

    return (
        <>
            {
                user?.isAuth() ?
                    <div>
                        <button onClick={() => navigate(ADMIN_ROUTE)}>
                            Admin panel
                        </button>
                        <button onClick={onLogout}>
                            Log out
                        </button>
                    </div>
                    :
                    <div>
                        <button onClick={() => user?.setIsAuth(true)}>
                            Authorization
                        </button>
                    </div>
            }
        </>
    );
});