import Button from "../Button/Button"
import { link } from "react-router-dom"

const Header = () => {
    return(
        <header className='bg-indigo-800 text-white font-semibold text-xl py-8 mx-auto'>
       <div className='max-w-screen-lg justify-between px-10 mx-auto flex'>
      
        <nav className='flex gap-8 justify-center items-center'>
         
          <link to='/students'>
            Список студентов
          </link>
  
          <link to='/contacts'>
            Контакты
          </link>
  
          <link to='/reviews'>
            Отзывы
          </link>
          
        </nav>
        <Button title='Связаться с нами'/>
           
        </div>
       </header>
    )
}

export default Header