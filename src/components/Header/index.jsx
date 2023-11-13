import Button from "../Button/Button"

const Header = () => {
    return(
        <header className='bg-indigo-700 text-white font-semibold text-xl py-10 flex px-20 justify-between'>
        <nav className='max-w-screen-lg mx-auto flex gap-8'>
          <div>
            Список студентов
          </div>
  
          <div>
            Контакты
          </div>
  
          <div>
            Отзывы
          </div>
          <Button title='Связаться с нами'/>
        </nav>
        
       </header>
    )
}

export default Header