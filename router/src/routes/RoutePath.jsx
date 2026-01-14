import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Home from '../home/Home'
import About from '../about/About'
import Services from '../services/Services'
import Contact from '../contact/Contact'

export default function RoutePath() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}
