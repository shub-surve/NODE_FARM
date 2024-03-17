const http = require('http')
const url = require('url')
const fs = require('fs')


const tempOverview = fs.readFileSync(`C:/Users/SHUBHAM/OneDrive/Desktop/Node.js/NODE_FARM/Templets/Overview.html` , 'utf-8');
const tempProduct = fs.readFileSync(`C:/Users/SHUBHAM/OneDrive/Desktop/Node.js/NODE_FARM/Templets/Product.html` , 'utf-8');
const tempCard = fs.readFileSync(`C:/Users/SHUBHAM/OneDrive/Desktop/Node.js/NODE_FARM/Templets/ProductCard.html` , 'utf-8');

const data = fs.readFileSync('C:/Users/SHUBHAM/OneDrive/Desktop/Node.js/NODE_FARM/Templets/data.json' , 'utf-8')
const dataObj = JSON.parse(data)

const ReplaceHTML = (temp , product)=> {
    let output = temp.replace(/{%PRODUCTNAME%}/g , product.productName );
    output = output.replace(/{%IMAGE%}/g , product.image);
    output = output.replace(/{%BRANDNAME%}/g , product.brand);
    output = output.replace(/{%CATEGORY%}/g , product.category);
    output = output.replace(/{%DESCRIPTION%}/g , product.description);
    output = output.replace(/{%PRICE%}/g , product.price);
    output = output.replace(/{%STOCK%}/g , product.stock);
    return output;
}


const server = http.createServer((req , res) => {
    // res.end("HELLO FROM THE SERVER")
    const routeReq = req.url;

    if(routeReq === '/overview'){
        res.writeHead(200 , {'Content-type': 'text/html'});

        const cardsHTML = dataObj.map(el => ReplaceHTML(tempCard , el))
        res.end(cardsHTML.join(''));

    } else if(routeReq === '/product'){
        res.end("PRODUCT REQ")
    } 

 else if(routeReq === '/product'){
        res.end("PRODUCT REQ")

        
    } 
    

})

server.listen(3000 , "127.0.0.1" , () =>{
    console.log("Listning to port 3000")
})