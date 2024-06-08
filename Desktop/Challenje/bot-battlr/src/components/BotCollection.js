// BotCollection.js
import React from 'react';
import BotTable from './BotTable';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <BotTable bots={bots} enlistBot={enlistBot} />
    </div>
  );
};

export default BotCollection;