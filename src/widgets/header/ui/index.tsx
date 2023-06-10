import {FC, useContext} from "react";
import {AppContext} from "@/app";
import {observer} from "mobx-react-lite";


export const Header: FC = observer(() => {
    const {user} = useContext(AppContext);
    return (
        <>
            {
                user?.isAuth() ?
                    <div>
                        <button>Admin panel</button>
                        <button onClick={() => user?.setIsAuth(false)}>
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