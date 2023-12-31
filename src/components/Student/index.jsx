const Student = (props) => {
    const { student, deleteStudent } = props

    return(
                <div className='bg-indigo-50 m-10 py-6 px-8 rounded-md shadow-md flex justify-between'>
                <div className='flex flex-col items-start'>
                  <p className='text-indigo-800 bg-indigo-200 font-semibold rounded-full px-3 py-1 shadow'>Курс: {student.course}</p>
                       <p className='text-2xl font-bold mt-4'>{student.firstName} {student.lastName}</p>
                       <p>{student.age}</p>
</div>
<button className="hover:underline cursor-pointer" onClick={() => deleteStudent(student.id)}>Удалить</button>
                 </div>
    )
}

export default Student