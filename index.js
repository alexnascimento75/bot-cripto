const axios= require('axios');
const symbol = "btcusdt";
const buy_price = 34160;
const sell_price = 34501;

const api_url = "https://testnet.binance.vision"; //https://api.binance.com

let isOpened = false;
async function start(){
    const {data} = await axios.get(api_url + "/api/v3/klines?limit=21&interval=15m&symbol=" + symbol ); // Comandos do robô
    const candle = data[data.length - 1];
    const price = parseFloat(candle[4]); // Preço de fechamento do candle

    console.clear();
    console.log("price" + price);

    if(price <= buy_price && isOpened === false){
        console.log("comprar");
        isOpened = true;    
    }
    else if(price >= sell_price)
        console.log("Vender"); 
    else
        console.log("Esperar");

} 

setInterval(start, 3000); // 3 segundos 
start();