import { useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToPatient = () => {
        navigate('/patient');
    };

    const navigateToAdmin = () => {
        navigate('/admin');
    };

    return (
        <div>
            <h1>Выберите, под какой ролью зайти</h1>

            <button onClick={navigateToAdmin}>Администратор</button>
            <hr />
            <button onClick={navigateToPatient}>Пациент</button>

        </div>
    )
}

export default HomePage