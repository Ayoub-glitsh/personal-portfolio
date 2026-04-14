const fs = require('fs');
const b64 = fs.readFileSync('public/signature.png').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150">
  <image href="data:image/png;base64,${b64}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
fs.writeFileSync('public/signature.svg', svg);
