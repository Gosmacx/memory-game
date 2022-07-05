import { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {
  const [card1, set1] = useState(null)
  const [card2, set2] = useState(null)
  const [turnCount, setCount] = useState(0)
  const [deck, setDeck] = useState([])

  const createDeck = () => {
    setDeck([])
    setCount(0)
    let cache = []

    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    for (let index = 0; index < 4; index++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`)
        .then(response => response.json())
        .then(function (data) {
          let name = data.name;
          let url = data.sprites.other.dream_world.front_default;
          if (name && url) {
            cache.push(url);
            cache.push(url);
          }
          if (cache.length == 8) {
            shuffle(cache)
            setDeck(cache)
          }
        });
    }

  }

  useEffect(() => {
    if (card1 && card2) {
      if (card1.secretId == card2.secretId) {
        set1(null)
        set2(null)
      } else {
        setTimeout(() => {
          reset()
        }, 500);
      }
      setCount(turnCount + 1)
    }
  }, [card1, card2])

  const setCard = (e, secretId) => {
    if (e.classList.contains('flip')) return
    e.classList.toggle('flip')

    let data = {
      classList: e.classList,
      secretId
    }

    if (card1) set2(data);
    else set1(data);

  }

  const reset = () => {
    card1.classList.toggle('flip')
    card2.classList.toggle('flip')
    set1(null)
    set2(null)
  }




  return (
    <div className="h-screen w-full bg-gray-800 flex items-center justify-center">
      <span className='font-bold text-white text-xl absolute top-5' > { turnCount } </span>
      <div className='grid grid-cols-4 gap-2' >
        {
          deck.map((text, id) => {
            return <Card id={id} key={id} secretId={text} setCard={setCard} text={text} />
          })
        }
      </div>

      <button className='absolute bottom-5 w-52 h-12 rounded bg-gray-600 text-white' onClick={createDeck} >Create Deck</button>

    </div>
  )
}

export default App
