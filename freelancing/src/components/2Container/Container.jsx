import React from 'react'
import "./Container.scss"


function Container() {
  return (
    <>
    <div className="features">
        <div className="container">
            <div className="item">
                <h1>A whole world of freelance talent at your fingertips</h1>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    The best for every budget
                </div>
                <p>
                    Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </p>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    The best for every budget
                </div>
                <p>
                    Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </p>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    The best for every budget
                </div>
                <p>
                    Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </p>
                <div className="title">
                    <img src="./img/check.png" alt="" />
                    The best for every budget
                </div>
                <p>
                    Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </p>
            </div>
        
            <div className="item">
                <video src='./img/video.mp4' controls></video>
            </div>
        </div>
    </div>

   {/* second container */}
    <div className="features dark">
        <div className="container">
            <div className="item">
               <h1>Taskio business</h1>
              <h1 style={{}}>A business solution designed for teams</h1>
              <p>Upgrade to curated experince packed with tools and benefits, dedicated to business</p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business expreience
              </div>
              <div className="title">
                <img src='./img/check.png' alt=""/>
                Get matched with the perfect talent by a customer success manager
              </div>

              <div className="title">
              <img src='./img/check.png' alt=""/>
                Manage teamwork and boost productivity with one powerful workspace
              </div>
              <button>Explore Takio Business</button>
              </div>
            

            <div className="item">
                <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png' />
            </div>

            {/* Third component */}
            
        </div>
    </div>
    
    </>
  )
}


export default Container