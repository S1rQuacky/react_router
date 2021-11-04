import React, { useEffect, useState } from "react";

const Stock = (props) => {
    //API key
    const apiKey = "d72c4f18e00278d84f094b0762452f78";
    const symbol = props.match.params.symbol
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
    const [stocks, setStocks] = useState()

    //function to fetch stock data
    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log("hello " + data[0].symbol)
        setStocks(data)
    }
    useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {
        return (
            <div className="data">
                <h1>{stocks[0].name}</h1>
                <h2>{stocks[0].symbol} / Year High: {stocks[0].yearHigh}</h2>
                <h2>Current Price: {stocks[0].price}</h2>
            </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return stocks ? loaded() : loading()
}

export default Stock