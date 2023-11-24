import { useState } from "react"
import Button from "../Button/Button"
import { Form, Field } from 'react-final-form'


const courses = ['Рисование', 'Программирование', 'Психология', 'Математика', 'Дизайн']

const StudentForm = ({ addStudent }) => {
    const handleClick = async (values) => {
   const student = {
    id:100,
    ...values
   }
   addStudent(student)
    }


   
    return(
        <div>
            <Form 
            onSubmit={handleClick}
            render={({ handleSubmit }) => (
             <form className="max-w-sm mx-10 gap-y-4 flex flex-col">
                    <h2 className="font-bold text-xl mb-5">Добавить нового студента</h2>
                    <div className="grid grid-cols-3 gap-y-1 mb-5">
                         <label className="col-span-1">Имя</label>
                         <Field 
                         name="firstName"
                         component="input"
                         type="text"
                         className="col-span-2 border border-solid border-gray-400 rounded"
                         />
                        
                    </div>

                    <div className="grid grid-cols-3 gap-y-1 mb-5">
                         <label className="col-span-1">Фамилия</label>
                         <Field 
                         name="lastName"
                         component="input"
                         type="text"
                         className="col-span-2 border border-solid border-gray-400 rounded"
                         />
                         
                    </div>

                    <div className="grid grid-cols-3 gap-y-1 mb-5">
                        <label className="col-span-1">Возраст</label>
                        <Field 
                         name="age"
                         component="input"
                         type="text"
                         className="col-span-2 border border-solid border-gray-400 rounded"
                         />
                       
                    </div>

            <div className="grid grid-cols-3 gap-y-4 mb-5">
                <label className="col-span-1">Курс</label>
                <Field 
                         name="course"
                         component="select"
                         type="text"
                         className="col-span-2 border border-solid border-gray-400 rounded"
                         >
                       
            {courses.map(course => (
                        <option key={course}>{course}</option>
                    ))}
                   </Field>
            </div>
        <Button  title="Добавить студента" handleClick={handleSubmit} type="submit"/>
       </form>
            )}
            />
        </div>
          )
        }
       
export default StudentForm