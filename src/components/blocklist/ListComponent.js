import React from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

import RowComponent from './RowComponent';
 
const ListComponent = ({ items, moreItemsLoading, loadMore, hasNextPage }) => {
  const Row = ({ index, style }) => (
   
    <RowComponent blocks={items[index]} num={index} style={style} loading={index === items.length} />
    
  );
  
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <InfiniteLoader
      isItemLoaded={index => index < items.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (

        <AutoSizer>
        {({ height, width }) => (
            <FixedSizeList
            height={500}
            width={width}
            itemCount={itemCount}
            itemSize={50}
            className="list-container"
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
              {Row}
            
          </FixedSizeList>
        )}
        </AutoSizer>
        
      )}
  </InfiniteLoader>
  )
};

export default ListComponent;