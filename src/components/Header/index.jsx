import Button from "../Button/Button"

const Header = () => {
    return(
        <header className='bg-indigo-700 text-white font-semibold text-xl py-10 flex px-20 justify-between'>
        <nav className='flex gap-8 justify-center items-center'>
          <div>
            Список студентов
          </div>
  
          <div>
            Контакты
          </div>
  
          <div>
            Отзывы
          </div>
        </nav>
        <Button title='Связаться с нами'/>
       </header>
    )
}

export default Header