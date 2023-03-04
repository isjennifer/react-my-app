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


//  노마드코더 강의 코드챌린지 : 유저가 가지고 있는 돈으로 유저가 선택한 코인을 몇개 살수 있는지 보여지도록 해보는 것이었다.
//  53번줄 option의 selectedindex로 select 된 값의 index를 money로 지정하고
//  21번줄 setMoney함수를 이용해 onChange로 변화가 된 event를 감지하여 event.target.selectedIndex를 money로 변경해줌
//  장장 2시간동안 디버깅한 부분은 다음과 같다.
//  64번줄의 coins[money].quotes.USD.price 를 console에 찍어보려 했더니 quotes를 못찾겠다는 에러 발생
//  그런데 coins[money]까지만 콘솔에 찍어보면 잘 나옴, 바로 이후에 coins[money].quotes.USD.price를 해보면 에러가 안남
//  근데 새로고침을 하면 다시 똑같은 에러 발생.
//  에러 발생 이유는 loading if 로 감싸주지 않아서였다.
//  15번줄 코인 api가 초기값 true에서 setLoading 함수를 통해 false로 바뀌어야만 data로딩이 완료되는건데,
//  loading if 로 감싸주지 않으니 코인 api data가 완전히 로드되지 않은 상태에서 계속 불러오려고 하니 에러가 난 것 같다.
 