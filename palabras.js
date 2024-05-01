const server = require('http');

const app = server.createServer((req, res)=>{
    if(req.method == 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;

        });

        req.on('end',()=>{
            let mensaje = body.split('=')[1];
            ``


            res.end(mensaje);
        });

    }
    else{
        res.setHeader('Content-type', 'text/html');
        res.end(`<form method="POST">
                <input name="msg" type="text"/>
                <br><br>
                <button type="submit">convertir<button>
                </form>`);

    }
});