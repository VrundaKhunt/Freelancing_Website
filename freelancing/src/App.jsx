import React from "react"
import { BrowserRouter,Routes,Route, Router } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/gig/Gig"
import Orders from './pages/orders/Orders'
import MyGigs from "./pages/myGigs/MyGigs"
import Add from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import Login from "./pages/login/login"
import "./App.scss"
import Register from "./pages/register/Register"
import Pay from "./pages/pay/Pay"
import Success from "./pages/success/Success"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/gigs" element={<Gigs/>}/>
        <Route path="/gig/:id" element={<Gig/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/mygigs" element={<MyGigs/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/message/:id" element={<Message/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/pay/:id" element={<Pay/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      <Footer/>
          </BrowserRouter>
    </QueryClientProvider>

  
    
    </>

  )
}

export default App
