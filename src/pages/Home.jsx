import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import {useLocation} from 'react-router-dom'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'

function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    const {popular, upcoming, newGames} = useSelector(state => state.games)
    const location = useLocation()
    const pathId = location.pathname.split("/")[2];
    
  return (
    <>
      <motion.div className='px-8'>
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId}/>}
          </AnimatePresence>
            <h1 className='text-3xl font-bold py-4'>Upcoming Games</h1> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-0'>
              {upcoming.map(game => (
                <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image}/>
              ))}
            </div>
            <h1 className='text-3xl font-bold py-4'>Popular Games</h1> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {popular.map(game => (
                <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image}/>
              ))}
            </div>
            <h1 className='text-3xl font-bold py-4'>New Games</h1> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {newGames.map(game => (
                <Game key={game.id} name={game.name} released={game.released} id={game.id} image={game.background_image}/>
              ))}
            </div>
          </AnimateSharedLayout>
      </motion.div>
    </>
  )
}

export default Home