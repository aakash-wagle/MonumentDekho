import { useState } from 'react'
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({});

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setMessage({
                type:'Success',
                msg:'Account registered successfully'
            })
            console.log('Your account is registered');
            console.log(userCredential);
        }).catch((e) => setMessage({
            type:'Error',
            msg:e
        }))

        setEmail('');
        setPassword('');
    }

    return (
        <div className='h-screen w-screen bg-slate-200 content-center items-center gap-y-2'>
            <div className='text-4xl font-bold text-center'>Create An Account</div>
            <center>
            <div className='w-screen content-center space-y-2 items-center h-full'>
                <center><input type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleEmail} 
                    className='w-2/3 lg:w-3/5 px-4 py-2 text-black font-normal text-xl hover:cursor-text border-2 border-slate-300 shadow-none rounded-xl focus:outline-none focus:shadow-none'/></center>
                <center><input type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePassword} 
                    className='w-2/3 lg:w-3/5 px-4 py-2 text-black font-normal text-xl hover:cursor-text border-2 border-slate-300 shadow-none rounded-xl focus:outline-none focus:shadow-none'/></center>
                <center><div onClick={handleRegistration} className='hover:cursor-pointer bg-blue-600 lg:w-1/5 w-2/5 text-center px-4 py-2 rounded-xl font-normal text-2xl text-white'>
                    Register
                </div></center>
                
            </div>
            </center>
        </div>
    )
}

export default SignUp