// NB:
// const generates a smaller JS code ... Use with const
// without it there'd be a lot iffy code
const enum PlanetRadius {
    mercury = 1002, // Without assign a value mercury would be 0 and so on
    venus = 2123,
    earth = 6784,
    mars = 5022,
    saturn = 7823,
    jupiter = 102323,
    neptune = 7602,
    uranus = 3123,
    pluto = "590"
};

const earthRadius = PlanetRadius.earth;

