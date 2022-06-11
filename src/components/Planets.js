import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets/");
  return response.json();
};

const Planets = () => {
  // 'Planets' is the key for the Query, second argument is an async function to grab the data
  const { data, status } = useQuery("Planets", fetchPlanets);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {/* // status of query e.g loading */}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <div key={planet.name}>{planet.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
