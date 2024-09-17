import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = 'https://maze-verbena-rainstorm.glitch.me'; //'http://192.168.100.14:5000'
const FormLogin = () => {
    const navigate = useNavigate()
    const {register,  handleSubmit,resetField,reset , formState: {errors}, watch} = useForm();
    const [registerbutton, setRegisterbutton] = useState(false);
    


    const handleRegisterButton = () =>{
        setRegisterbutton(!registerbutton)
    }
    const onSubmit = (event) => {
        if(registerbutton){
            axios.post(`/Register`, event)
            .then(res => {
                console.log(res)
                handleRegisterButton();
            })
        } else {
            axios.post(`/Login`, event)
            .then( res => {
                if(res.data.authenticationprocess) {
                    localStorage.setItem("userID",res.data.userID)
                    localStorage.setItem("isauthentication", true)
                    console.log(localStorage.getItem("isauthentication"))
                    reset();
                    navigate("/home");
                   

                }else{
                    alert("wrong password please try again");
                    navigate("/");
                    resetField("password")
                }})
        }
        
    }

    const password = watch("password");
    return(
        <div className="p-20  bg-white rounded-md border-2 border-red-600">
        <form onSubmit={handleSubmit(onSubmit)} className="items-center flex flex-col" >
                 <h2 className="text-black text-2xl py-6 font-extrabold">{!registerbutton? "Login Now!" : "Register Now" }</h2>
                <input className="w-50 px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " 
                {...register("username", {required: "Username is required"})} 
                placeholder="Username" autoComplete="off"/>
                {errors.username && <span className="text-red-700">{errors.username.message}</span>}
                <input className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                 type="password"
                 {...register("password", {required: "Password is required", minLength: {value: 8 , message: "Password must have at least 8 characters"}})}
                 placeholder="Password"/>
                 {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                 {registerbutton && (
                    <input className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                    type="password"
                    {...register("confirmpassword", {required: "Please check your password", validate: value => value === password || "Passwords do not match"})}
                    placeholder="Confirm Password"/>
                   
                )}
                 {errors.confirmpassword && <span className="text-red-700">{errors.confirmpassword.message}</span>}
                 

            <input type="submit" value={registerbutton ? "Register" : "Login"} className="bg-amber-500 hover:bg-amber-400 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]" />
        </form>
        <h3 className="text-center"> or </h3>
        <button onClick={handleRegisterButton} className="bg-amber-500 hover:bg-amber-400 text-white text-[19px] px-5 py-2.5 mt-2 rounded-lg transition-colors w-full">{registerbutton? "Login" : "Register"}</button>
        </div>
    )
}

export default FormLogin;