import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const BlockDetail = (props)=>{

    const [block, setBlock] = useState({})

    useEffect(()=>{
        const id = props.match.params.id === "latest" ? "latestblock": `rawblock/${props.match.params.id}`
        fetch(`https://blockchain.info/${id}?cors=true`)
        .then(res=> res.json())
        .then(block => setBlock(block))
    },[])

    const onClickGoBack = () => {
        props.history.goBack()
      }

    const renderDetail = (block)=>{
        if (!block) return <div>Loading...</div>;
        /* eslint-disable camelcase */
        const {
          ver,
          prev_block,
          mrkl_root,
          time,
          bits,
          nonce,
          n_tx,
          size,
          block_index,
          main_chain,
          height,
          received_time,
          relayed_by,
          tx,
        } = { ...block };
        return (
          <ul className="list-group">
             <li className="list-group-item">
              <strong>Version: </strong>
              {ver}
            </li>
            <li className="list-group-item">
              <strong>Previous Block: </strong>
              {prev_block}
            </li>
            <li className="list-group-item">
              <strong>MRKL Root: </strong>
              {mrkl_root}
            </li>
             <li className="list-group-item">
              <strong>Time: </strong>
              {time}
            </li>
             <li className="list-group-item">
              <strong>Bits: </strong>
              {bits}
            </li>
             <li className="list-group-item">
              <strong>Nonce: </strong>
              {nonce}
            </li>
             <li className="list-group-item">
              <strong>Number of Transactions: </strong>
              {n_tx}
            </li>
             <li className="list-group-item">
              <strong>Size: </strong>
              {size}
            </li>
             <li className="list-group-item">
              <strong>Block Index: </strong>
              {block_index}
            </li>
             <li className="list-group-item">
              <strong>Main Chain: </strong>
              {main_chain}
            </li>
             <li className="list-group-item">
              <strong>Height: </strong>
              {height}
            </li>
             <li className="list-group-item">
              <strong>Received Time: </strong>
              {received_time}
            </li>
             <li className="list-group-item">
              <strong>Relayed by: </strong>
              {relayed_by}
            </li>
             <li className="list-group-item">{renderTransactions(tx)}</li>
          </ul>
        );
        
      }

      const renderTransactions = (transactions)=>{
        if (!transactions) return <div>No Transactions</div>;
        return (
          <section>
            <h3>Transactions</h3>
            <ul>
              {transactions.map(transaction => (
                <li key={transaction.hash}>
                  <Link 
                    to={`/transactions/${transaction.hash}`}
                    
                  >
                    {transaction.hash}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      }

    return(
        <div>
            <Link to="#" onClick={onClickGoBack} className="btn btn-primary mt-4 mb-4">
            Back to Blocks
          </Link>
            {renderDetail(block)}
        </div>
    )
}

export default BlockDetail;