//llamamos el modulo http
const http = require('http'); 
//Establecemos la url o ip de nuestro servidor local, de la pc 
//que corre el programa 192.168..
const hostname = '192.168.1.105'; 
//Establecemos el puerto de escucha
const port = 3000; 
//Creamos una instancia HTTP con un reques y un response
const server = http.createServer((req,res) =>{
    //el servidor responderá un codigo 200
    res.statusCode = 200; 
    //El servidor respondera con un texto plano 
    res.setHeader('Content-Type', 'text/plain'); 
    //El servidor responderá el mensaje hola mundo 
    res.end('Hola Mundo\n'); 
}); 
server.listen(port, hostname,()=>{
    console.log('El servidor se está ejecutando en http://${hostame}:${port}/')
});