# memory-game

**Live Website**: [link](https://memory-game-gosmac.netlify.app)

Pokemon memory game on `react`.

## Create Deck Function

```js
  const createDeck = () => {
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

    // Get 4 random pokemon.
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
```

## Screenshots

![ss](https://raw.githubusercontent.com/Gosmacx/memory-game/master/screenshots/ss.png)
