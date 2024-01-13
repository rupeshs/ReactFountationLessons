import { useState } from 'react';

function Header({ title }) {
  console.log(title);
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0); // React hook
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}