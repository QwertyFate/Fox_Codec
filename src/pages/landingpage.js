import React from "react";
import LandingPagePic from "../Pictures/Landing_Page/landing_page_chatapp.png"
import FormLogin from "../components/formlogin";
// localStorage.setItem('isauthentication',false);
// console.log(localStorage.getItem('isauthentication'));



const LandingPage = () => {
    return (
      <div className="h-screen w-screen bg-cover absolute top-0 left-0" style={{backgroundImage: `url(${LandingPagePic})`}}>
        <div className="flex flex-row justify-evenly pt-40">
          <h2 className="font-bold text-5xl text-white italic leading-[100px] justify-center flex items-center ">
            Connect with Clarity,<br/> Speak with Strategy.
            </h2>
          <div className="bg-blueGray-50">
            <FormLogin />
          </div>
        </div>
      </div>
    )
};

export default LandingPage;