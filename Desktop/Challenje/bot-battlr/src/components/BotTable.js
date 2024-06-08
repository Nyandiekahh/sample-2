// BotTable.js
import React from 'react';
import BotCard from './BotCard';

const BotTable = ({ bots, enlistBot }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Health</th>
          <th>Damage</th>
          <th>Armor</th>
          <th>Class</th>
          <th>Catchphrase</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bots.map(bot => (
          <tr key={bot.id}>
            <td><img src={bot.avatar_url} alt={bot.name} width="50" /></td>
            <td>{bot.name}</td>
            <td>{bot.health}</td>
            <td>{bot.damage}</td>
            <td>{bot.armor}</td>
            <td>{bot.bot_class}</td>
            <td>{bot.catchphrase}</td>
            <td>
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BotTable;