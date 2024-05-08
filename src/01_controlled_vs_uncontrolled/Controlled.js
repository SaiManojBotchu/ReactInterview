// https://youtu.be/eNTYVNFADcI?si=2ADtFxkj88UMvpg7
import { useState } from 'react';

function Controlled() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={handleChange} />;
}

export default Controlled;
