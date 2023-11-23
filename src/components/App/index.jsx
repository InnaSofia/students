import './styles.css';
import Header from '../Header';
import { useState } from 'react';
import Student from '../Student';
import Footer from '../Footer';
import StudentForm from '../StudentForm';


function App() {

const [students, setStudents] = useState( [
    {
      id:1,
      fitstName:'Анна',
      lastName:'Иванова',
      age:12,
      course:'Рисование'
  
    },
    {
      id:2,
      fitstName:'Кирил',
      lastName:'Никитин',
      age:22,
      course:'Программирование'
  
    },
    {
      id:3,
      fitstName:'Ксения',
      lastName:'Петрова',
      age:32,
      course:'Бухгалтер'
  
    },
    {
      id:4,
      fitstName:'Анна',
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
    <div>
         <Header />
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
         <Footer />
    </div>
  );
}

export default App;
