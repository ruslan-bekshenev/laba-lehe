var OrangeRicky = /** @class */ (function () {
    function OrangeRicky() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'orange ricky';
        this.color = 'orange';
        this.coords = [
            [0, 0, 1],
            [1, 1, 1]
        ];
    }
    OrangeRicky.prototype.getInfo = function () {
        console.log('this is orange ricky');
    };
    return OrangeRicky;
}());
var BlueRicky = /** @class */ (function () {
    function BlueRicky() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'blue ricky';
        this.color = 'blue';
        this.coords = [
            [1, 0, 0],
            [1, 1, 1]
        ];
    }
    BlueRicky.prototype.getInfo = function () {
        console.log('this is blue ricky');
    };
    return BlueRicky;
}());
var Cleveland = /** @class */ (function () {
    function Cleveland() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'Cleveland';
        this.color = 'red';
        this.coords = [
            [1, 1, 0],
            [0, 1, 1]
        ];
    }
    Cleveland.prototype.getInfo = function () {
        console.log('this is cleveland');
    };
    return Cleveland;
}());
var RhodeIsland = /** @class */ (function () {
    function RhodeIsland() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'RhodeIsland';
        this.color = 'green';
        this.coords = [
            [0, 1, 1],
            [1, 1, 0]
        ];
    }
    RhodeIsland.prototype.getInfo = function () {
        console.log('this is rhode island');
    };
    return RhodeIsland;
}());
var Hero = /** @class */ (function () {
    function Hero() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'Hero';
        this.color = 'lightblue';
        this.coords = [
            [1, 1, 1, 1],
        ];
    }
    Hero.prototype.getInfo = function () {
        console.log('this is hero');
    };
    return Hero;
}());
var Teewee = /** @class */ (function () {
    function Teewee() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'Teewee';
        this.color = 'purple';
        this.coords = [
            [0, 1, 0],
            [1, 1, 1],
        ];
    }
    Teewee.prototype.getInfo = function () {
        console.log('this is hero');
    };
    return Teewee;
}());
var SmashBoy = /** @class */ (function () {
    function SmashBoy() {
        this.name = '';
        this.color = '';
        this.coords = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this.name = 'SmashBoy';
        this.color = 'yellow';
        this.coords = [
            [1, 1],
            [1, 1],
        ];
    }
    SmashBoy.prototype.getInfo = function () {
        console.log('this is smashboy');
    };
    return SmashBoy;
}());
var TetrisFigures = /** @class */ (function () {
    function TetrisFigures() {
    }
    TetrisFigures.prototype.create = function (type) {
        if (type === void 0) { type = 'orangeRicky'; }
        var FigureInstance = TetrisFigures.list[type] || TetrisFigures.list.orangeRicky;
        return new FigureInstance();
    };
    TetrisFigures.list = {
        orangeRicky: OrangeRicky,
        blueRicky: BlueRicky,
        cleveland: Cleveland,
        rhodeIsland: RhodeIsland,
        hero: Hero,
        teewee: Teewee,
        smashBoy: SmashBoy
    };
    return TetrisFigures;
}());
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
var figures = [
    'orangeRicky',
    'blueRicky',
    'cleveland',
    'rhodeIsland',
    'hero',
    'teewee',
    'smashBoy',
];
var index = getRandomIntInclusive(0, figures.length);
var index1 = getRandomIntInclusive(0, figures.length);
var index2 = getRandomIntInclusive(0, figures.length);
var figure = new TetrisFigures();
console.log(index, index1, index2);
var firstFigure = figure.create(figures[index]);
var secondFigure = figure.create(figures[index1]);
var thirdFigure = figure.create(figures[index2]);
firstFigure.getInfo();
secondFigure.getInfo();
thirdFigure.getInfo();
