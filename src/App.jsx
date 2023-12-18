import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Searchbar from './Components/Searchbar'
import JobCard from './Components/Jobcard/JobCard'
import jobDummydata from './jobDummydata'
function App() {


  return (
    <>
      <div>
      <Navbar/>
      <Header/>
    <Searchbar/>

   <JobCard/>

       </div>
    </>
  )
}

export default App;
