const ImageTracer = require('imagetracerjs');
const fs = require('fs');

ImageTracer.imageToSVG(
    'public/signature.png',
    function(svgstr){ fs.writeFileSync( 'public/signature.svg', svgstr ); },
    { ltres:0.1, qtres:1, pathomit:8, colorsampling:1, numberofcolors:2, mincolorratio:0, colorquantcycles:3 }
);
