import { ref, getDatabase, onChildAdded, onChildChanged, onChildRemoved, query, update } from "firebase/database"
import { useForm, SubmitHandler } from "react-hook-form";

interface Patient {
    id: string;
    name: string;
    surname: string;
    phone: number;
    email: string;
    symptoms: string;
    condition: number;
    date: string;
    statB: boolean;
    statS: string;
};

const AdminForm = () => {

    const db = getDatabase()
    const dbRef = ref(db)
    const patientFormArchive: [] = [];
    const patientForm: [] = [];
    let id: string;

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm<Patient>();

    onChildAdded(query(dbRef), (snapshot) => {

        const query_clientsList = snapshot.val();
        for (let key in query_clientsList){
            query_clientsList[key].stat ? (
                // @ts-ignore
                patientFormArchive.push(query_clientsList[key])
            ):(
                // @ts-ignore
                patientForm.push(query_clientsList[key])
            )
        }
    });

    const submitHandler: SubmitHandler<Patient> = (data) => {
        const db = getDatabase();
        console.log(id)
        update(ref(db,'db/' + id),{
            statB: true,
            statS: data.statS,
        });
    };

    let patComp = patientForm.map(function (item) {
        id = item['id'];


        return <tr key={item['id']}>

            <p>Имя: {item['name']}</p>
            <p>Фамилия: {item['surname']}</p>
            <p>Телефон: {item['phone']}</p>
            <p>Почта: {item['email']}</p>
            <p>Симптомы: {item['symptoms']}</p>
            <p>Состояние: {item['condition']}</p>
            <p>Дата: {item['date']}</p>
            <label>Оцените боль</label>

            <select {...register("statS")}>
                <option>
                    Статус записи
                </option>
                <option value="Запись подтверждена">Запись подтверждена</option>
                <option value="Запись отменена">Запись отменена</option>
            </select>
            {errors.condition && (
                <p className="error-message">{errors.condition.message}</p>
            )}

            <button onClick={() => id = item['id']}>Submit</button>
        </tr>

    })

    return(
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
            {patComp}
            </form>
        </div>
    )
}

export {AdminForm}

