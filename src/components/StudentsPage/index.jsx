import StudentForm from '../StudentForm';
import Student from '../Student';
import { useState } from 'react';

const Students = () => {
    const [students, setStudents] = useState( [
        {
          id:1,
          firstName:'Анна',
          lastName:'Иванова',
          age:12,
          course:'Рисование'
      
        },
        {
          id:2,
          firstName:'Кирил',
          lastName:'Никитин',
          age:22,
          course:'Программирование'
      
        },
        {
          id:3,
          firstName:'Ксения',
          lastName:'Петрова',
          age:32,
          course:'Бухгалтер'
      
        },
        {
          id:4,
          firstName:'Анна',
          lastName:'Серова',
          age:28,
          course:'Секретарь'
      
        }])
    
        const deleteStudent = (id) => {
       const filteredStudents = students.filter(student => student.id !== id)
       setStudents(filteredStudents)
        }
    
    const addStudent = (student) => {
      setStudents([...students, student]) 
    }
   return (
   <div className='max-w-screen-lg mx-auto min-h-screen'>
   <StudentForm addStudent={addStudent}/>
   {students.length === 0 && (
   <div className='mt-20 text-center text-7xl text-gray-400 font-thin'>Нет студентов</div>
   )}
       {students.length > 0 && students.map ((student) => {
         return(
         <Student key={student.id} student={student} deleteStudent={deleteStudent}/>
         )
       })}
  </div>
  ) 
}

export default Students