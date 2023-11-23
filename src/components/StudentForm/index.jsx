import { useState } from "react"
import Button from "../Button/Button"
import { Form, Field } from 'react-final-form'


const courses = ['Рисование', 'Программирование', 'Психология', 'Математика', 'Дизайн']

const StudentForm = ({ addStudent }) => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')
const [course, setCourse] = useState(courses[1])

    const handleClick = event => {
         event.preventDefault()


         
        const student = {
            firstName, 
            lastName,
            age,
            course 
        }

        addStudent(student)
        setFirstName('')
        setLastName('')
        setAge('')
        setCourse(courses[1])
    }
   
    return(
        <div>
                <form className="max-w-sm mx-10 gap-y-4 flex flex-col">
                    <h2 className="font-bold text-xl mb-5">Добавить нового студента</h2>
                    <div className="grid grid-cols-3 gap-y-1 mb-5">
                         <label className="col-span-1">Имя</label>
                         <input
                         onChange={(event) => setFirstName(event.target.value)} 
                         value={firstName}  
                         name="firstName" 
                         type="text" 
                         className="col-span-2 border border-solid border-gray-400 rounded"
                             />
                    </div>
                    <div className="grid grid-cols-3 gap-y-1 mb-5">
                         <label className="col-span-1">Фамилия</label>
                         <input
                         onChange={(event) => setLastName(event.target.value)} 
                         value={lastName}  
                         name="lastName" 
                         type="text" 
                         className="col-span-2 border border-solid border-gray-400 rounded"
                             />
                    </div>
                    <div className="grid grid-cols-3 gap-y-1 mb-5">
                        <label className="col-span-1">Возраст</label>
                        <input 
                         onChange={(event) => setAge(event.target.value)} 
                         value={age} 
                        name="age" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded"
                        />
                    </div>
            <div className="grid grid-cols-3 gap-y-4 mb-5">
                <label className="col-span-1">Курс</label>
                   <select 
                   value={course} 
                   onChange={event => setCourse(event.target.value)} 
                   className="col-span-2 border border-solid border-gray-400 rounded"
                   >
                    {courses.map(course => (
                        <option key={course}>{course}</option>
                    ))}
                   </select>
            </div>
        <Button  title="Добавить студента" handleClick={handleClick} type="submit"/>
       </form>
        </div>
          )
        }
       
export default StudentForm