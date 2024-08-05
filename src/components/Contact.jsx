import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const sendMessage = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d8a03d7f-cd48-444e-8266-1dfdedfe2b3f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",        
      });
    }
  };
  return (
    <>
    <div className='w-full h-screen bg-[#151515] flex justify-center items-center px-10 py-4'>
      <div>
        <p className='text-center text-3xl font-bold text-white mb-3'>Contact Me</p>
        <form onSubmit={sendMessage} className='flex flex-col w-full'>
          <input type='text' className='my-2 p-2 w-72 sm:w-80 md:w-96 focus:outline-none bg-[#ececec] focus:border-[#8644A2] border-2 rounded-xl' placeholder='Enter your name' name="name" required />
          <input type='email' className='my-2 p-2 w-72 sm:w-80 md:w-96 focus:outline-none bg-[#ececec] focus:border-[#8644A2] border-2 rounded-xl' placeholder='Enter your email' name="email" required />
          <textarea rows="10" className='my-2 p-2 w-72 resize-none sm:w-80 md:w-96 bg-[#ececec] focus:outline-none focus:border-[#8644A2] border-2 rounded-xl' placeholder='Enter your message' name="message" ></textarea>
          <button type="submit" className='text-white px-6 mt-2 py-2 border-2 hover:bg-[#8644A2] hover:border-[#8644A2] rounded-full'>Send Message</button>
        </form>
      </div>      
    </div>
    <ToastContainer />
    </>
  )
}

export default Contact
