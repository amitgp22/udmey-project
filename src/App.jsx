import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <p className="text-orange-400 dark:text-sky-400 border-2 border-blue-600 p-4 w-80   mx-auto mt-1 text-center text-lg font-bold bg-yellow-100 rounded-lg shadow-md mb-1">
            This is my first Vite + React project, and it works! . 
          </p>
        </div>
        <div className="w-80 bg-white shadow-lg rounded-xl overflow-hidden mx-auto">
          <img src="girl.jpg" alt="not found  " />
        </div>
        <div className='text-center mt-4 border-2 border-green-500 p-4 w-80 mx-auto text-lg font-semibold bg-gray-100 rounded-lg shadow-md'>
          <button className='hover:bg-pink-500 text-green-500 ' onClick={()=>alert('clicked')}>OPEN ME</button>
        </div>
        


     
    </>
  )
}

export default App
