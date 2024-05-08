import { useRef } from 'react';

function Uncontrolled() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef}/><br />
      <button type="Submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Uncontrolled;
