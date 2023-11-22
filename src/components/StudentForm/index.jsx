import { useState } from "react"
import Button from "../Button/Button"

const StudentForm = () => {
const [firstName, setFirstName] = useState('')

    const handleClick = () => {
        
    }
    return(
        <div className="max-w-sm mx-10 gap-y-4 flex flex-col">
            <h2 className="font-bold text-xl">Добавить нового студента</h2>
            <div className="grid grid-cols-3 gap-y-1">
                <label className="col-span-1">Имя</label>
                <input
                onChange={(event) => {

                }} 
                value={firstName} 
                name="firstName" 
                type="text" 
                className="col-span-2 border border-solid border-gray-400 rounded"></input><input name="firstName"></input>
            </div>
            <div className="grid grid-cols-3 gap-y-1">
                <label className="col-span-1">Фамилия</label>
                <input name="firstName" type="text" className="col-span-2 border border-solid border-gray-400 rounded"></input><input name="firstName"></input>
            </div>
            <div className="grid grid-cols-3 gap-y-1">
                <label className="col-span-1">Возраст</label>
                <input name="age" type="text" className="col-span-2 border border-solid border-gray-400 rounded"></input><input name="firstName"></input>
            </div>
            
        <Button  title="Добавить студента" handleClick={handleClick} />
       
        </div>
    )
}
export default StudentForm