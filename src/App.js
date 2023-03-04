import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((data) => {
      setCoins(data)
      setLoading(false);
    })
  }, [])


  const onChange = (event) => setValue(event.target.value);
  const onChange2 = (event) => {
    setMoney(event.target.selectedIndex)
  };
 // console.log(coins[money].quotes.)


  const onSubmit = (event) => {
    event.preventDefault();
    if (value === 0) {
      return;
    }
    setValue(0);
  }


  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length}ea)`}</h1>
      <div>
        <label htmlFor="id"><h3>How much do you have?</h3></label>
        <form onSubmit={onSubmit}>
          $<input
            id="id"
            type="number" 
            value={value}
            onChange={onChange}
          />
        </form>
      </div>
      <div>
        <h3>What do you want to buy?</h3>
        {loading ? 
          <strong>loading...</strong> :
          <select onChange={onChange2}>
            {coins.map(
              (item) => 
                <option key={item.id} selectedindex={money}> 
                  {item.name} ({item.symbol}): ${item.quotes.USD.price}USD 
                </option>
              )
            }
          </select>
        }
      </div>
      <div>
        <h3>
          You can buy{" "}
          {loading ? null : value / coins[money].quotes.USD.price}
          {" "}
          {loading ? null : coins[money].name}!
        </h3>
      </div>
    </div>
  );
}

export default App;
