import React from 'react'
function ErrorMessage({errorMsg}) {
  return (
    <div className='bg-red-200 text-red-900 p-6 rounded-xl my-4'>
      <h2 className='font-bold'>Wystąpił błąd</h2>
      <p>{errorMsg}</p>
    </div>
  )
}

export default ErrorMessage;
