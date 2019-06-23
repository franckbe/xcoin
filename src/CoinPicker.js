

import React from 'react';

const CoinPicker= (props)=>(
<div>
    <label>
        from Coin
        <select value = {props.fromCoin}
                        onChange={props.setFromCoin}>
            <option value = ''> select Coin to convert from</option>
            <option value = 'USD'>USD</option>
            <option value = 'EUR'>EUR</option>
            <option value = 'ILS'>ILS</option>
            <option value = 'BTC'>BTC</option>
            <option value = 'ETH'>ETH</option>
            <option value = 'WINGS'>WINGS</option>
        </select>
    </label>



<label>
        to Coin
        <select value = {props.toCoin}
                        onChange={props.setToCoin}>
            <option value = ''> select Coin to convert from</option>
            <option value = 'USD'>USD</option>
            <option value = 'EUR'>EUR</option>
            <option value = 'ILS'>ILS</option>
            <option value = 'BTC'>BTC</option>
            <option value = 'ETH'>ETH</option>
            <option value = 'WINGS'>WINGS</option>
        </select>
    </label>
    
 </div>


)
export default CoinPicker;
