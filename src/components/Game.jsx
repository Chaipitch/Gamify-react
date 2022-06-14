import React from 'react'
import {useDispatch} from 'react-redux'
import loadDetail from '../actions/detailsAction'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Game({name,released,image,id}) {
    const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

  return (
    <motion.div layoutId={id} onClick={loadDetailHandler} className='min-h-[30vh] shadow-lg rounded-lg overflow-hidden bg-white/30 backdrop-opacity-60 backdrop-blur-sm z-0'>
      <Link to={`/game/${id}`}>
        <div>
          <h3 className='text-lg my-1 px-4 text-center py-4 font-bold'>{name}</h3>
          <p className='px-4 pb-4 text-center text-sm'>{released}</p>
        </div>
        <img className='h-[40vh] object-cover' src={image} alt={name} />
      </Link>
    </motion.div>
  )
}

export default Game