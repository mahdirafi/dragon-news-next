'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const { register, handleSubmit, watch,
        formState: { errors, isSubmitting }, } = useForm();

    const handleFormFunc = async (data) => {
        const { email, name, url, password } = data;

        try {
            const { data: res, error } = await authClient.signUp.email({
                name: name,
                email: email,
                password: password,
                image: url,
                callbackURL: "/",
            });

            console.log(res, error);

            if (error) {
                toast.error("This email already exists!");
                return;
            }

            if (res) {
                toast.success("Registration Successful!");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Register Your Account</h2>

                <form className='space-y-4 mt-4' onSubmit={handleSubmit(handleFormFunc)}>
                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Your Name</legend>
                        <input
                            type='text'
                            placeholder='write your Name'
                            {...register("name", { required: "Name field is required" })}
                            className="input"
                        />
                        {errors.name && (<p className='text-red-500'>{errors.name.message}</p>)}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Photo URL</legend>
                        <input
                            type='text'
                            placeholder='write your PhotoURL'
                            {...register("url", { required: "Photo field is required" })}
                            className="input"
                        />
                        {errors.url && (<p className='text-red-500'>{errors.url.message}</p>)}
                    </fieldset>

                    <fieldset className='fieldset'>
                        <legend className='fieldset-legend'>Email Address</legend>
                        <input
                            type="email"
                            placeholder='Type your email'
                            {...register("email", { required: "Email field is required" })}
                            className="input"
                        />
                        {errors.email && (<p className='text-red-500'>{errors.email.message}</p>)}
                    </fieldset>

                    <fieldset className='fieldset relative'>
                        <legend className='fieldset-legend'>Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder='Type your password'
                            {...register("password", {
                                required: "Password field is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="input"
                        />
                        <span
                            className='cursor-pointer absolute right-6 top-5'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye />: <FaEyeSlash /> }
                        </span>

                        {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}
                    </fieldset>

                    <button
                        disabled={isSubmitting}
                        className='btn bg-gray-900 text-white w-full shadow-2xl'
                    >
                        {isSubmitting ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className='mt-6 text-zinc-800'>
                    If you have an account!
                    <Link className='text-blue-900' href={'/login'}> Login.</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;