import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {removeUser} from "../store/slices/userSlice";
import {useAppDispatch} from "../hooks/redux-hooks";
import {AdminForm} from "../components/AdminForm"

const AdminPage = () => {
    const dispatch = useAppDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Карточки пациентов</h1>

            <AdminForm/>

            <button
                onClick={()=> dispatch(removeUser())}
            >Выйти из {email}</button>
        </div>
    ) :(
        <Navigate to="/login"/>
    )
}

export default AdminPage