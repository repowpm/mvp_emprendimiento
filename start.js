const { spawn } = require('child_process');
const path = require('path');

console.log('Iniciando la aplicación Costa del Maule...');

// Ruta al ejecutable de react-scripts
const reactScriptsPath = path.join(__dirname, 'node_modules', '.bin', 'react-scripts');

const child = spawn(reactScriptsPath, ['start'], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('Error al ejecutar react-scripts:', error);
  console.log('Intentando con npx...');
  
  const npxChild = spawn('npx', ['react-scripts', 'start'], {
    stdio: 'inherit',
    shell: true
  });
  
  npxChild.on('error', (npxError) => {
    console.error('Error con npx también:', npxError);
    console.log('Por favor, ejecuta manualmente: npx react-scripts start');
  });
}); 