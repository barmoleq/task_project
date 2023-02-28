import { useForm, SubmitHandler } from "react-hook-form";
import nextId from "react-id-generator";
import { ref, getDatabase, onValue, set } from "firebase/database"


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
}

const PatientForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Patient>();

    const submitHandler: SubmitHandler<Patient> = (data) => {
        const db = getDatabase();
        data.id = nextId();
        set(ref(db,'db/' + data.id),{
            id: data.id,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            email: data.email,
            symptoms: data.symptoms,
            condition: data.condition,
            date: data.date,
            statB: false,
            statS: " ",
        });
        press();
    };

    function press(){
        alert("Запись создана")
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>

                    <label>Имя</label>
                    <input
                        type="name"
                        {...register("name", {
                            required: "Поле пустое",
                            maxLength: 10,
                            pattern: {
                                value: /^[A-Za-zа-яА-ЯёЁ]/i,
                                message: "Некорректно введенные данные",
                            },
                        })}

                    />
                    {<p> {errors.name && errors.name.message}</p>}

                    <label>Фамилия</label>
                    <input
                        type="surname"
                        {...register("surname", {
                            required: "Поле пустое",
                            maxLength: 10,
                            pattern: {
                                value: /^[A-Za-zа-яА-ЯёЁ]/i,
                                message: "Некорректно введенные данные",
                            },
                        })}
                    />
                    {<p> {errors.surname && errors.surname.message}</p>}

                    <label>Телефон</label>
                    <input
                        type="phone"
                        {...register("phone", {
                            required: "Поле пустое",
                            maxLength: 20,
                            pattern: {
                                value: /^[0-9-()+]/i,
                                message: "Некорректно введенные данные",
                            },
                        })}
                    />
                    {<p> {errors.phone && errors.phone.message}</p>}

                    <label>Почта (Не обязательное поле)</label>
                    <input
                        type="email"
                        {...register("email")}
                    />

                    <label>Симптомы</label>
                    <select {...register("symptoms")}>
                        <option>
                            Выберите симптом
                        </option>
                        <option value="Головная боль">Головная боль</option>
                        <option value="Перелом">Перелом</option>
                        <option value="Вирус">Вирус</option>
                    </select>
                    {errors.symptoms && (
                        <p className="error-message">{errors.symptoms.message}</p>
                    )}

                    <label>Оцените боль</label>
                    <select {...register("condition")}>
                        <option>
                            Оцените боль
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    {errors.condition && (
                        <p className="error-message">{errors.condition.message}</p>
                    )}

                    <label>Дата приема</label>
                    <input
                        type="date"
                        {...register("date",{required: true})}
                    />
                    {errors.date && <p>Поле пустое</p>}


                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export {PatientForm}