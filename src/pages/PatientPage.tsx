import {PatientForm} from "../components/PatientForm";
import {Link} from "react-router-dom";

const PatientPage = () => {
    return (
        <div>
            <h1>Анкета</h1>

            <PatientForm/>

            <p>
                Вернуться <Link to="/">назад</Link>
            </p>
        </div>
    )
}

export default PatientPage