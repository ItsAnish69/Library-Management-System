import React from 'react'

const Demo = () => {
  return (
    <>
     <section className='w-full h-screen flex justify-center items-center bg-indigo-900'>
        <div className='w-100 h-100 rounded-xl border border-indigo-400 outline outline-white-400 px-5 sm:'>
            <h1 className='font-bold text-white text-xl py-8'>Payment Method</h1>
            <div className='flex flex-col justify-center items-center gap-y-5'>
            <label className='w-full h-15 rounded text-white flex justify-between p-5 items-center text-left hover:bg-[#2b2e2c] hover:border border-indigo-100 '>Google pay
                <input type="radio" name='radio'/>
            </label>
            <label className='w-full h-15 rounded text-white flex justify-between p-5 items-center text-left hover:bg-[#2b2e2c] hover:outline outline-indigo '>Apple Pay
            <input type="radio" name='radio'/>

            </label>
            <label className='w-full h-15 rounded text-white flex justify-between p-5 items-center text-left hover:bg-[#2b2e2c] hover:outline outline-indigo '>Credit Card
            <input type="radio" name='radio'/>  
            </label>
        </div>
        </div>
     </section>
    </>
  )};

export default Demo;
