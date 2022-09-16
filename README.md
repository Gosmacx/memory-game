# memory-game

**Live Website**: [link](https://memory-game-gosmac.netlify.app)

Pokemon memory game on `react`.

## Create Deck Function

```js
  const createDeck = () => {
    let cache = []

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
            let shuffle = cache.sort(() => Math.random() - 0.5)
            setDeck(cache)
          }
        });
    }

  }
```

## Screenshots

![ss](https://raw.githubusercontent.com/Gosmacx/memory-game/master/screenshots/ss.png)
