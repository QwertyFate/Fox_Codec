import React from "react";
import LandingPagePic from "../Pictures/Landing_Page/landing_page_chatapp.png"
import FormLogin from "../components/formlogin";

const LandingPage = () => {
    return (
      <div>
        <img src={LandingPagePic} className="h-screen w-screen -z-10 absolute top-0"/>
        <div className="flex flex-row justify-evenly">
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