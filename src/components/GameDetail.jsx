import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import playstation from '../img/playstation.svg'
import nintendo from '../img/nintendo.svg'
import gamepad from '../img/gamepad.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import apple from '../img/apple.svg'

function GameDetail({pathId}) {
    const navigate = useNavigate()
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            navigate('/')
        }
    }
    const {screen,game, isLoading} = useSelector(state => state.detail)

    const getPlatform = (platform) => {
        switch (platform) {
            case "Playstation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

  return (

    <>
    {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <div className='flex items-center justify-between mx-auto'>
                    <div className='rating'>
                        <h3 className='font-bold mb-4 '>{game.name}</h3>
                        <p >rating: {game.rating}</p>
                    </div>
                    <div className="text-center font-bold">
                        <h3>Platforms</h3>
                        <div className="w-16 mt-3 grid grid-cols-3 sm:grid-cols-4 sm:w-20 gap-2 justify-evenly ">
                            {game.platforms.map(data => (
                                <img key={data.platform.id}
                                src={getPlatform(data.platform.name)} 
                                alt={data.platform.name}></img>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <img className='w-[100%] h-[60vh] object-cover' src={game.background_image} alt={game.background_image} />
                </div>
                <div className="my-2">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={screen.image} key={screen.id} alt="game" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
    </>
  )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: #fff;
    }
`

const Detail = styled(motion.div)`
    width: 90%;
    border-radius: 1rem;
    padding: 2rem 1rem;
    background: white;
    position: absolute;
    left: 5%;
    color: black;
    z-index: 100;
    img{
        width: 100%;
        
    }
`

const Stats = styled(motion.div)`
    display: 'flex';
    align-items: center;
    justify-content: space-between;
`

export default GameDetail