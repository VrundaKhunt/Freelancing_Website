import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';


function Navbar() {
  const[active,setActive] = useState(false);
  const[open, setOpen] = useState(false);

  const {pathname} = useLocation()
  const navigate = useNavigate()

  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll",isActive);
    }
  },[])

  // const currentUser= {
  //   id: 1,
  //   username:"Vrunda Khunt",
  //   isSeller: true
  // }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const handleLogout = async ()=>{
    try{
      await newRequest.post("/auths/logout")
      localStorage.setItem("currentUser",null);
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
          <span className='text'>taskio</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Taskio Business</span>
          <span>Explore</span>
          <span>English</span>
          {/* <span>Sign in</span> */}
          {!currentUser ?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
      </div>
      </div>
     {(active || pathname !== "/") && (
     <>
      <hr />
      <div className="menu">
       <Link to="/" className='link menuLink'>
        Graphics & Design
       </Link>
       <Link to="/" className='link'>
        Video & Animation
       </Link>
       <Link to="/" className='link'>
        Writing & Translation
       </Link>
       <Link to="/" className='link'>
        AI Services
       </Link>
       <Link to="/" className='link'>
        Digital Marketing
       </Link>
       <Link to="/" className='link'>
        Music & Audio
       </Link>
       <Link to="/" className='link'>
        Programming & Tech
       </Link>
       <Link to="/" className='link'>
        Business
       </Link>
       <Link to="/" className='link'>
        Lifestyle
       </Link>
      </div>
      <hr/>
     </>
     )
}
      
    </div>

  )
}

export default Navbar