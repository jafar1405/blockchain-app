import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'

const TransactionDetail = (props)=>{
    
    const onClickGoBack = () => {
        props.history.goBack()
      }

    console.log(props)

    const [transaction, setTransaction] = useState([])

    useEffect(()=>{
        fetch(`https://blockchain.info/rawtx/${props.match.params.id}?format=json&cors=true`)
        .then(res=> res.json())
        .then(transaction => setTransaction(transaction))
    },[])

    const renderDetail = (transaction) => {
        if (!transaction) return <div>Loading...</div>;
        /* eslint-disable camelcase */
        const {
          ver,
          vin_sz,
          vout_sz,
          lock_time,
          size,
          relayed_by,
          block_height,
          tx_index,
        } = { ...transaction };
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Version: </strong>
              {ver}
            </li>
            <li className="list-group-item">
              <strong>VIN Size: </strong>
              {vin_sz}
            </li>
            <li className="list-group-item">
              <strong>VOUT Size: </strong>
              {vout_sz}
            </li>
            <li className="list-group-item">
              <strong>Lock Time: </strong>
              {lock_time}
            </li>
            <li className="list-group-item">
              <strong>Size: </strong>
              {size}
            </li>
            <li className="list-group-item">
              <strong>Relayed By: </strong>
              {relayed_by}
            </li>
            <li className="list-group-item">
              <strong>Block Height: </strong>
              {block_height}
            </li>
            <li className="list-group-item">
              <strong>Transaction Index: </strong>
              {tx_index}
            </li>
          </ul>
        );
        /* eslint-enable camelcase */
      }

    return(
        <div>
            <Link to="#" onClick={onClickGoBack} className="btn btn-primary mt-4 mb-4">
            Go Back to Block
          </Link>
            {renderDetail(transaction)}
        </div>
    )
}

export default TransactionDetail;