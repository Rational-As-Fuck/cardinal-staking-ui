import {useState} from 'react';

const Menu = () => {
  // 👇️ initial value of empty string (first option)
  const [selected, setSelected] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelected(event.target.value);
    location = event.target.value;
  };

  return (
    <div>
      <select className='navselect' value={selected} onChange={handleChange}>
        <option disabled value="">Choose Collection</option>
        <option value="meta-chimp-champions">Meta Chimp Champions</option>
        <option value="imsoevolved">IMSO Evolved Chimps</option>
        <option value="meta-overlord-clones">Meta Overlord Clones</option>
        <option value="unique-overlord">Unique Meta Overlords</option>
      </select>
    </div>
  );
};

export default Menu;