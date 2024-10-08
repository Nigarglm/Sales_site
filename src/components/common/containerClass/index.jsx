import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto max-w-[1600px] px-4'>
        {children}
    </div>
  )
}

export default Container