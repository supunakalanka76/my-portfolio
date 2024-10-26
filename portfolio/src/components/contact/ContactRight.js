import React, { useState } from 'react'

function ContactRight() {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    //---Email Address Validation---//

    const emailValidation=(email)=> {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    //---Email Address Validation End---//

    //---Submit Form---//

    const handleSend=(e)=> {
        e.preventDefault()
        if (username === "") {
            setErrMsg('Please enter your name!');
        }else if (phoneNumber === "") {
            setErrMsg('Please enter your phone number!');
        }else if (email === "") {
            setErrMsg('Please enter your email!');
        }else if (emailValidation(email)) {
            setErrMsg('Invalid email format!');
        }else if (subject === "") {
            setErrMsg('Please enter your message title!');
        }else if (message === "") {
            setErrMsg('Please type your message!');
        }else {
            setSuccessMsg(`Thank you ${username}, Your Message has been sent Successfully!`);
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
            setErrMsg('');
        }
    };

  return (
    <div className='w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 rounded-lg p-8 shadow-shadowOne'>
        <form className='w-full flex flex-col gap-6 py-5'>
            {
                errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
            )}

            {/* {
                successMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
            )} */}
            <div className='w-full flex gap-10'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name:</p>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} 
                    className={`w-full h-12 ${errMsg === "Please enter your name!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="text" placeholder='Enter Your Name'/>
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number:</p>
                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} 
                    className={`w-full h-12 ${errMsg === "Please enter your phone number!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="text" placeholder='Enter Your Phone Number' />
                </div>
            </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email Address:</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} 
                    className={`w-full h-12 ${errMsg === "Please enter your email!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="email" placeholder='Enter Your Email Address'/>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject:</p>
                    <input onChange={(e) => setSubject(e.target.value)} value={subject} 
                    className={`w-full h-12 ${errMsg === "Please enter your message title!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`} type="text" placeholder='Enter Your Message Title'/>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Message:</p>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`w-full ${errMsg === "Please type your message!" && "outline-designColor"} rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none`} cols="30" rows="8" placeholder='Enter Your Massege Here...'></textarea>
                </div>
                <div className='w-full'>
                    <button onClick={handleSend} className='w-full h-12 rounded-lg bg-bgBlack text-base font-bold text-gray-100 tracking-wide uppercase hover:text-black duration-300 hover:bg-designColor'>Send It Now</button>
                </div>
                    {
                        errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                    )}

                    {
                        successMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                    )}
            </form>
        </div>
  )
}

export default ContactRight
