import images from './images'

const games = [
  {
    title: 'Deathloop',
    price: '2 499',
    genre: 'Экшн',
    rate: 5,
    publisher: '07th Expansion',
    imgUrl: images.deathloop,
    label: 'новинка'
  },
  {
    title: 'Grand Theft Auto V: Premium Edition + Megalodon Shark Card Bundle',
    price: '2 609',
    genre: 'Приключения',
    rate: 3,
    publisher: '505 Games',
    imgUrl: images.gta5,
    label: 'новинка'
  },
  {
    title: 'Red dead redemption 2',
    price: '2 499',
    startingPrice: '3 500',
    genre: 'Инди',
    rate: 2,
    publisher: '505 Games, All In! Games',
    oldPrice: '3 500',
    imgUrl: images.rdr2,
    label: 'скидка'
  },
  {
    title: 'Gamedec',
    price: '1 124',
    genre: 'Карточная игра',
    rate: 4,
    publisher: 'Alawar Entertainment',
    imgUrl: images.gamedec,
    label: ''
  },
  {
    title: 'Tales of Arise',
    price: '1 999',
    genre: 'Ролевая',
    rate: 10,
    publisher: 'BANDAI NAMCO Entertainment',
    imgUrl: images.talesOfArise,
    label: ''
  },
  {
    title: 'Pathfinder: Wrath of the Righteous',
    price: '1 499',
    genre: 'Стратегия',
    rate: 18,
    publisher: 'Capcom',
    imgUrl: images.pathfinder,
    label: 'акция'
  },
  {
    title: 'Severed Steel',
    price: '418.50',
    genre: 'Открытый мир',
    rate: 1,
    publisher: 'Electronic Arts',
    imgUrl: images.severedSteel,
    label: ''
  },
  {
    title: 'Aragami 2',
    price: '557',
    genre: 'Казуальная',
    rate: 5,
    publisher: 'Dungeon Crawler',
    imgUrl: images.aragami2,
    label: ''
  }
]

const genres = [
  {
    id: 0,
    title: 'Экшн'
  },
  {
    id: 1,
    title: 'Приключения'
  },
  {
    id: 2,
    title: 'Инди'
  },
  {
    id: 3,
    title: 'Карточная игра'
  },
  {
    id: 4,
    title: 'Ролевая'
  },
  {
    id: 5,
    title: 'Стратегия'
  },
  {
    id: 6,
    title: 'Открытый мир'
  },
  {
    id: 7,
    title: 'Казуальная'
  }
]

const publisher = [
  {
    id: 0,
    title: '07th Expansion'
  },
  {
    id: 1,
    title: '505 Games'
  },
  {
    id: 2,
    title: '505 Games, All In! Games'
  },
  {
    id: 3,
    title: 'Alawar Entertainment'
  },
  {
    id: 4,
    title: 'BANDAI NAMCO Entertainment'
  },
  {
    id: 5,
    title: 'Capcom'
  },
  {
    id: 6,
    title: 'Electronic Arts'
  },
  {
    id: 7,
    title: 'Dungeon Crawler'
  }
]

export default { games, genres, publisher }
