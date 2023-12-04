import Header from "../Header"
import HomePage from "../HomePage"
import ContactsPage from "../ContactsPage"
import ReviewsPage from "../ReviewsPage"
import StudentsPage from "../StudentsPage"
import Footer from "../Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {



  return (
  
    <BrowserRouter>
         <Header />
         <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/students' element={<StudentsPage />}/>
          <Route path='/contacts' element={<ContactsPage />}/>
          <Route path='/reviews' element={<ReviewsPage />}/>
          </Routes>
         <Footer />
         </BrowserRouter>
    
  );
}

export default App;
