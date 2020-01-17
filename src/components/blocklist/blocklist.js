import React, { Component } from 'react';

import ListComponent from './ListComponent';
import {Link} from 'react-router-dom';

class BlockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      moreItemsLoading: false,
      hasNextPage: true
    };

    this.loadMore = this.loadMore.bind(this);
  }
  
  loadMore() {
    this.setState({ moreItemsLoading: true }, () => {
    
    fetch('https://blockchain.info/blocks?format=json&cors=true')
      .then(res => res.json())
      .then(data => this.setState({ 
        moreItemsLoading: false,
        items: [...this.state.items, ...data.blocks] 
      }));
    });
  }

  render() {
    const { items, moreItemsLoading, hasNextPage } = this.state;
    return (
      <>
      
      <Link to="/block-detail/latest" className="btn btn-primary mt-4 mb-4">
            Get Latest Block
          </Link>
          <div className="row text-left border-bottom pb-3 mb-3 font-weight-bolder">
                <div className="col-sm-2 ">Height</div>
                <div className="col-sm-8">Hash</div>
                <div className="col-sm-2">Time</div>
            </div>
        <ListComponent 
          items={items} 
          moreItemsLoading={moreItemsLoading} 
          loadMore={this.loadMore}
          hasNextPage={hasNextPage}
        />


      
      </>
    );
  }
}

export default BlockList;
