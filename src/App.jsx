import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/page'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import SpecificAnnouncementsPage from './pages/specific-announcements/page'
import DetailsPage from './pages/announcement/page'
import SignInPage from './pages/sign-in/page'
import SignUpPage from './pages/sign-up/page'
import SalePage from './pages/forSale/page'
import RentPage from './pages/rent/page'
import DailyRentPage from './pages/daily-rent/page'

const App = () => {

  return (
    <>
    <Header/>
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/sign-in' element={<SignInPage/>}/>
   <Route path='/sign-up' element={<SignUpPage/>}/>
   <Route path='/specifics' element={<SpecificAnnouncementsPage/>}/>
   <Route path='/announcements/:id' element={<DetailsPage/>}/>
   <Route path='/for-sale' element={<SalePage/>}/>
   <Route path='/rent' element={<RentPage/>}/>
   <Route path='/daily' element={<DailyRentPage/>}/>




   </Routes>
     <Footer/>
    </>
  )
}

export default App