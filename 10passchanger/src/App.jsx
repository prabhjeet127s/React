
import { useEffect, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*"

    for (let i = 0; i < length; i++) {
      let char = Math.ceil(Math.random() * str.length)
      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    
    window.navigator.clipboard.writeText(password)
  }, [password])



  useEffect(() => {

    passwordGenerator()
  }, [length, number, character, passwordGenerator])



  return (
    <><div className='w-screen h-screen flex bg-black justify-center '>

      <div className=' overflow-hidden  m-15 w-1/2 h-1/2  bg-gray-700' >
        <h1 className=' text-center text-white p-4 text-3xl'>Password Generator</h1>
        <div className="flex shadow rounded-2xl overflow-hidden px-3.5 mb-5 gap-3">
          <input type="text"
            placeholder='password'
            value={password}

            className='bg-white w-full outline-none'
          />
          <button  onClick={copyPasswordToClipboard}  className=' rounded-l bg-blue-600 p-1 text-white  mr-2'>click</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>
    </div>

    </>
  )
}

export default App
