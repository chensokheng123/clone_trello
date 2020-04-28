import React, { useState } from 'react';
import List from './components/List/List';
import store from './utils/store';
export default function App() {
  const [data, setData] = useState(store);
  return (
    <div>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />;
      })}
    </div>
  );
}
