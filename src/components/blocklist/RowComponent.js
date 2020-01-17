import React from 'react';
import {Link} from 'react-router-dom';

const Loader = ({style}) => (
  <div style={style} className="list-group-loader">
    <div className="loader"></div>
  </div> 
);

const Item = ({ blocks, num, style, loading }) => {
    return(

        <div style={style}>
            <div className="row text-left border-bottom">
                <div className="col-sm-2">
                {blocks.height}
                </div>
                <div className="col-sm-8">
                <Link to={`/block-detail/${blocks.hash}`}>{blocks.hash}</Link>
                </div>
                <div className="col-sm-2">
                {blocks.time}
                </div>
            </div>
        </div>
      );
}

const RowComponent = ({ blocks, num, style, loading }) => { 

  return loading ? <Loader style={style} /> : <Item blocks={blocks} num={num} style={style} loading={loading} />;
}

export default RowComponent;