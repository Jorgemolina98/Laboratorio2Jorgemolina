//Este sera nuestro archivo que 
// contiene las funciones para
// calcular  el area de las figuras
//geometricas

const square = (s) => {
    return s * s;
};

const rectangle = (b, h) => {
    return b * h;
};

const triangle = (b, h) => {
    return b * h / 2;
};

const circle = (r) => {
    return Math.PI * r * r;
};

const ellipse = (a, b) => {
    return Math.PI * a * b;
};


module.exports = {
    rectangle,
    square,
    circle,
    triangle,
    ellipse,

}
