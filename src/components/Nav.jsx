import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useDispatch } from 'react-redux'
import {fetchSearch} from '../actions/searchAction'

function Nav() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(input))
        setInput('')
    }

    const clearSearch = () => {
        dispatch({type: 'CLEAR_SEARCH'})
    }

  return (
    <>
        <div className='navbar bg-neutral shadow-md'>
            <div className='flex flex-col items-center mt-6 mx-auto'>
                    <h1 onClick={clearSearch} className='text-3xl font-bold uppercase text-white cursor-pointer'>Gamify</h1>
                <form onSubmit={searchHandler}>
                    <div className="form-control w-screen max-w-md mt-4">
                        <input 
                        onChange={inputHandler}
                        value={input}
                        type="text" 
                        placeholder="Search Game, then 'Enter'" 
                        className="input input-bordered w-screen max-w-md font-bold" />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Nav