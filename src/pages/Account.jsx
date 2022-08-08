import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/83dcfc3c-a4a8-4c7a-9ef6-ae46d47cab9c/PK-en-20220801-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
      </div>
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md: text-5xl font-bold text-white'>My Shows</h1>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account