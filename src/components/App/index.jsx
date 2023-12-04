import Header from "components/Header"
import Footer from "components/Footer"
import StudentsPage from "components/StudentsPage"
import HomePage from "components/HomePage"
import ReviewsPage from "components/ReviewsPage"
import ContactsPage from "components/ContactsPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {



  return (
    <div>
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
    </div>
  );
}

export default App;
