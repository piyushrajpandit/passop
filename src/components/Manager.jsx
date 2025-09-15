import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))

        }
    }, []
    )

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast('🦄 copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }



    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyes.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyes.png"
            passwordRef.current.type = "text"
        }
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const savePassword = () => {
        if (form.site.length === 0 || form.username.length === 0 || form.password.length === 0) {

            
            setPasswordArray([...passwordArray,{...form, id: uuidv4()}])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
            console.log([...passwordArray, form])
            setForm({ site: "", username: "", password: "" })
            toast('🦄 saved password successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
        }
        else{

             toast('🦄 Error : Password not saved')
        }
    }

    
    const deletePassword = (id) => {
        console.log("deleteing password with id ", id)
        let c =confirm("Are you sure you want to delete this password?")
        if(c){

        setPasswordArray(passwordArray.filter((item) => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))
        // console.log([...passwordArray, form])
          toast('🦄 password deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }
        

        }


    
    const editPassword = (id) => {
        
        console.log("Editing password with id ", id)
        setForm(passwordArray.filter(item => item.id === id)[0])
          setPasswordArray(passwordArray.filter((item) => item.id !== id))

    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <ToastContainer/>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className="p-3 md:p-0 md:mycontainer min-h-[88.2vh]">
                <h1 className='text-4xl text font-bold text-center '> <span className='text-green-800'>   &lt; </span>

                    <span className='text-white'>Pass</span>
                    <span className='text-green-800'>OP/ &gt; </span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your own password manager</p>

                <div className=" flex flex-col p-4  text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="username" id="username" />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name="password" id="password" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer ' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eyes.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className="bg-green-500 text-white px-8 py-2 rounded-full flex items-center justify-center gap-4 hover:bg-green-600 transition w-fit border border-green-700">
                        <lord-icon
                            src="https://cdn.lordicon.com/vjgknpfx.json"
                            trigger="hover"
                        >
                        </lord-icon>
                    save password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <p className='text-gray-500'>No passwords saved yet</p>}
                    {passwordArray.length > 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                            <thead className=" bg-green-800 text-white">
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-50'>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='border border-white py-2 text-center w-32'>
                                                <div className='lordiconcopy flex items-center justify-center'>
                                                    <a href={item.site} target='_blank' rel="noopener noreferrer">{item.site}</a>
                                                    <button
                                                        onClick={() => copyText(item.site)}
                                                        className="inline-flex items-center justify-center bg-transparent border-none cursor-pointer text-gray-900 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        aria-label="Copy site"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="1.6" aria-hidden="true">
                                                            <path d="M9 9H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
                                                            <rect x="9" y="3" width="11" height="11" rx="1.5" ry="1.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>

                                            <td className='border border-white py-2 text-center w-32'>
                                                <div className='lordiconcopy flex items-center justify-center'>
                                                    <span>{item.username}</span>
                                                    <button
                                                        onClick={() => copyText(item.username)}
                                                        className="inline-flex items-center justify-center bg-transparent border-none cursor-pointer text-gray-900 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        aria-label="Copy username"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="1.6" aria-hidden="true">
                                                            <path d="M9 9H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
                                                            <rect x="9" y="3" width="11" height="11" rx="1.5" ry="1.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>

                                            <td className='border border-white py-2 text-center w-32'>
                                                <div className='lordiconcopy flex items-center justify-center'>
                                                    <span>{item.password}</span>
                                                    <button
                                                        onClick={() => copyText(item.password)}
                                                        className="inline-flex items-center justify-center bg-transparent border-none cursor-pointer text-gray-900 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        aria-label="Copy password"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            strokeWidth="1.6" aria-hidden="true">
                                                            <path d="M9 9H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
                                                            <rect x="9" y="3" width="11" height="11" rx="1.5" ry="1.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='border border-white py-2 text-center w-32'>
                                                <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/exymduqj.json"
                                                        trigger="hover"
                                                    style={{"width":"25px","height":"25px"}}>
                                                    </lord-icon>
                                                </span>
                                                <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jzinekkv.json"
                                                        trigger="hover"
                                                    style={{"width":"25px","height":"25px"}}>
                                                    </lord-icon>
                                                </span>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    }

                </div>
            </div>
        </>

    )
}

export default Manager
