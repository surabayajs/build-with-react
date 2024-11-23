const getApiData = () => {
  const getStarWars = async () => {
    const data = await fetch("https://swapi.dev/api/people/1");
    const result = await data.json();
    console.log(result);
  };

  return <button onClick={getStarWars}>GET API !</button>;
};

export default getApiData;
