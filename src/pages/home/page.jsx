import React, { useState } from 'react'
import HeroSection from '../../components/home/hero'
import MainAnnouncements from '../../components/home/main-announcements'


const HomePage = () => {

const[searchTerm, setSearchTerm] = useState("");


  return (
    <div>
      <HeroSection onSearch={setSearchTerm} />
      <MainAnnouncements searchTerm={searchTerm} />
    </div>
  );
}

export default HomePage