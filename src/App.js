import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/shamiullahms

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((resp) => resp.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return <h1>No user found!!!</h1>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>
        {data.id}:{data.login} - {data.location}
      </p>
      <img alt={data.login} src={data.avatar_url} height="200px" />
    </div>
  );
}

export default App;
