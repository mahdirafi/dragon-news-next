'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const [isShowPassword , setIsShowPassword ]= useState(false) ;


    const { register, handleSubmit,watch, 
        formState: { errors },} = useForm();

    const handleFormFunc =async (data) =>{
        // console.log(data, "data");

         const {email,name, url ,password} = data;    
        
            const {data:res ,error} = await authClient.signIn.email({
                name: name,          
                email: email,        
                password: password,  
                rememberMe:true ,       
                callbackURL: "/",
            });
            console.log(res,error);
            if(res){
             toast.success("Login Successful!")
         }
           if(error){
            toast.error("This email is Not Register!")
        }  
            return;
    };

    // const handleFormFunction = (e) =>{
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //      console.log(email, password);

    // }
   
//  console.log(errors, "errors");
 console.log(watch('email'));
 console.log(watch('password'));
    
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Login Your Account</h2>

                <form className='space-y-4 mt-4' onSubmit={handleSubmit(handleFormFunc) } >
                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Email Address </legend>
                            <input 
                            type="email"  
                            placeholder='Type your email'
                            // name='email'
                            {...register("email",{ required: "Email field is required" })}
                            className="input"/>
                            {errors.email && (<p className='text-red-500'>{errors.email.message}</p>)}

                    </fieldset>
                    <fieldset className='fieldset relative'>
                        <legend className='fieldset-legend'>Password </legend>
                            <input 
                            type={isShowPassword ? "text" :"password"}
                            placeholder='Type your password'
                            // name='password'
                            {...register("password",{ required: "Password field is required" })}
                            className="input" 
                            />
                            <span className='cursor-pointer absolute top-5 right-4' 
                            onClick={()=>setIsShowPassword(!isShowPassword)}>
                                {isShowPassword? <FaEye />: <FaEyeSlash />}
                            </span>

                            {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}


                    </fieldset>

                    <button className='btn bg-gray-900 text-white w-full shadow-2xl'>Login</button>

                </form>
                <p className='mt-6 text-zinc-800'>Do not have an account? 
                    <Link className='text-blue-900' href={'/register'}> Register.</Link>
                </p>

            </div>
            
            
        </div>
    );
};

export default LoginPage;