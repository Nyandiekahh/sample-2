import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== botId));
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="app">
      <div className="bot-collection">
        <BotCollection bots={bots} enlistBot={enlistBot} />
      </div>
      <div className="bot-army">
        <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
}

export default App;