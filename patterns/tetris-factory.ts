
interface IFigure {
  name: string;
  color: string;
  coords: number[][]
  getInfo: () => void;
} 


class OrangeRicky implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'orange ricky';
    this.color = 'orange'
    this.coords = [
      [0,0,1],
      [1,1,1]
    ]
  }

  getInfo() {
    console.log('this is orange ricky')
  }
}

class BlueRicky implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'blue ricky';
    this.color = 'blue'
    this.coords = [
      [1,0,0],
      [1,1,1]
    ]
  }

  getInfo() {
    console.log('this is blue ricky')
  }
}

class Cleveland implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'Cleveland';
    this.color = 'red'
    this.coords = [
      [1,1,0],
      [0,1,1]
    ]
  }

  getInfo() {
    console.log('this is cleveland')
  }
}

class RhodeIsland implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'RhodeIsland';
    this.color = 'green'
    this.coords = [
      [0,1,1],
      [1,1,0]
    ]
  }

  getInfo() {
    console.log('this is rhode island')
  }
}

class Hero implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'Hero';
    this.color = 'lightblue'
    this.coords = [
      [1,1,1,1],
    ]
  }

  getInfo() {
    console.log('this is hero')
  }
}

class Teewee implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'Teewee';
    this.color = 'purple'
    this.coords = [
      [0,1,0],
      [1,1,1],
    ]
  }

  getInfo() {
    console.log('this is hero')
  }
}

class SmashBoy implements IFigure {
  name = ''
  color = ''
  coords = [[0,0,0,0], [0,0,0,0]]

  constructor() {
    this.name = 'SmashBoy';
    this.color = 'yellow'
    this.coords = [
      [1,1],
      [1,1],
    ]
  }

  getInfo() {
    console.log('this is smashboy')
  }
}


class TetrisFigures {
  static list: any = {
    orangeRicky: OrangeRicky,
    blueRicky: BlueRicky,
    cleveland: Cleveland,
    rhodeIsland: RhodeIsland,
    hero: Hero,
    teewee: Teewee,
    smashBoy: SmashBoy
  }

  create(type = 'orangeRicky') {
    const FigureInstance = TetrisFigures.list[type] || TetrisFigures.list.orangeRicky
    return new FigureInstance()
  }
}


function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const figures = [
  'orangeRicky',
  'blueRicky',
  'cleveland',
  'rhodeIsland',
  'hero',
  'teewee',
  'smashBoy',
]


const index: number = getRandomIntInclusive(0, figures.length)
const index1: number = getRandomIntInclusive(0, figures.length)
const index2: number = getRandomIntInclusive(0, figures.length)
const figure = new TetrisFigures()

const firstFigure = figure.create(figures[index])
const secondFigure = figure.create(figures[index1])
const thirdFigure = figure.create(figures[index2])

firstFigure.getInfo()
secondFigure.getInfo()
thirdFigure.getInfo()