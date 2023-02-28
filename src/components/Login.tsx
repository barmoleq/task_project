import {Form} from "./Form";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../store/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth);
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/admin');
            })
            .catch()
    }

    return(
        <Form
            title="sign in"
            handleClick={handleLogin}
            />
    )
}

export {Login}