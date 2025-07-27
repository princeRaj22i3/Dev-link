"use client"
import React,{useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import './style.css'

type Inputs = {
    username: string,
    password: string,
}

const SignIn: React.FC = () => {
    const [message, setMesaage] = useState<string>('');
    const [messageType, setMessageType] = useState<'success'|'error'|''>('');
    const [show,setShow] = useState(false); // last left here 


    const{
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<Inputs>();

    const delay = (t:number) => {
        return new Promise <void> ((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },t*1000)
        })
    }

    const onSubmit:SubmitHandler <Inputs> = async (data) => {
        await delay(2);
        const response = await fetch('http://localhost:3001/signin',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        let res = await response.json()
        if(response.ok){
            setMesaage(res.message);
            setMessageType('success');
        }else{
            setMesaage(res.message);
            setMessageType('error')
        }
    }

    return (
        <div className='c'>
            {isSubmitting&&<div>Submitting...</div>}
            <div><h1>SignIn</h1></div>
            <div className='authContainer'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='username'>
                        <label>Username: </label>
                        <input type="text" placeholder='Enter Username' {...register("username",{required:{value:true,message:"This field cannot be empty"}})}/>
                        {errors.username&&<div>{errors.username.message}</div>}
                    </div>
                    <div className='password'>
                        <label>Password: </label>
                        <input type="password" placeholder='Enter Password' {...register("password",{required:{value:true,message:"This field cannot be empty"}})} />
                        {errors.password&&<div>{errors.password.message}</div>}
                    </div>
                    <input disabled={isSubmitting} type="submit" />
                </form>
            </div>
        </div>
    )
}

export default SignIn