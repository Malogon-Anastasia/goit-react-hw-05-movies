import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../../views/btn.scss"
export default function MovieSearchForm() {
  const [input, setInput] = useState('');

  let navigate = useNavigate();
  let location = useLocation();

  const onInput = e => {
    const query = e.target.value;
    setInput(query);
  };

  const submitHandler = e => {
    e.preventDefault();

    navigate({ ...location, search: `query=${input}` });

    setInput('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="query" placeholder='Search films' onChange={onInput} value={input} className="input-styles" />
      <button className="btn-sub" type="submit">
        Search
      </button>
    </form>
  );
}