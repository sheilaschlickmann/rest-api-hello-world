/*exports.handler = async function(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "hello world!",
        }),
    };
};*/

const fs = require('fs');
const path = require('path');

console.log('__dirname:', __dirname);

exports.handler = async (event) => {
    const directoryPath = path.join(__dirname, '/');
    
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            console.log('erro no diretorio: ' + err);
        } 
        
        // List all files and directories
        files.forEach(function (file) {
            console.log('arquivos ' + file);
        });
    });
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Check the logs for the files list!'),
    };
    return response;
};

exports.handler = async (event,context) => {
    const html = fs.readFileSync(path.resolve(__dirname, 'public/index.html'), 'utf-8');
    const css = fs.readFileSync(path.resolve(__dirname, 'public/ui/css/style.css'), 'utf-8');
    const js = fs.readFileSync(path.resolve(__dirname, 'public/ui/js/script.js'), 'utf-8');
     
    

    const response = {
        statusCode: 200, 
        headers: {
            'Content-Type': 'text/html',
        },
        body: html.replace('</head>', `<style>${css}</style></head>`).replace('</body>', `<script>${js}</script></body>`),
    };
    return response;
};
