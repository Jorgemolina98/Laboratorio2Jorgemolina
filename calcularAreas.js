
//Crear funcion para llamar 
// funciones y calcular areas

let calcSurface = (figure) => {
    const surfaces = require('./surfaces.js');


  process.stdin.resume();
  process.stdin.setEncoding('utf8');


  //validar la figura a calcular 

  switch (figure) {
      case 'square':
          process.stdout.write('por favor ingrese el lado de un cuadrado');
          process.stdin.on('data', (chunk) => {
              let side = parseFloat(chunk);
              let surface = surfaces.square(side);

              process.stdout.write(`la superficie de el cuadrado es ${surface} metros cuadrados`);
            process.stdin.destroy();

            
          }); 
          break;
          case 'triangle':
              process.stdout.write('por favor ingrese la base y la altura de un triangulo, separado por un espacio');
              process.stdin.on('data',(chunk) => {
                  var baseAndHeight = chunk.split(' ');
                  var base = parseFloat(baseAndHeight[0]);
                  var height = parseFloat(baseAndHeight[1]);
                  var surface = surfaces.triangle(base, height);
                  process.stdout.write(`la superficie del triangulo es ${surface} metros cuadrado`);
                  process.stdin.destroy();
              });

              break;
          case 'circle':
                process.stdout.write('ingrese el radio del circulo:');
                process.stdin.on('data', (chunk) => {
                    var surface = surfaces.circle(parseFloat(chunk));
                    process.stdout.write(`la superficie del circulo es ${surface} metros cuadrado`);
                    process.stdin.destroy();


                });

                break;

                case 'rectangle':
                        process.stdout.write('por favor ingrese la base y la altura de el rectangulo: ');
                        process.stdin.on('data', function (chunk) {
                            var baseAndHeight = chunk.split(' ');
                            var base = parseFloat(baseAndHeight[0]);
                            var height = parseFloat(baseAndHeight[1]);
                            var surface = surfaces.rectangle(base, height);
                            process.stdout.write(`la superficie del rectangulo es ${surface} metros cuadrados`);
                            process.stdin.destroy();
                        });
                        break


                        case 'ellipse':
                            process.stdout.write('ingrese la longuitud del elipse, separandos por un espacio: ');
                            process.stdin.on('data', (chunk) => {
                                let baseAndHeight = chunk.split(' ');
                                let base = parseFloat(baseAndHeight[0]);
                                let height = parseFloat(baseAndHeight[1]);
                                let surface = surfaces.ellipse(base, height);
            
                                process.stdout.write(`la superficie del ellipse es ${surface}  metros cuadrados`);
                                process.stdin.destroy();
                            });
                            break


      default:
          process.stdout.write('opcion no valida. por favor intente de nuevo');
          process.exit();
          break;
  }
}

calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write(' hasta la proxima\n');
})