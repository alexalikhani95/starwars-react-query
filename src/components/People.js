import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/");
  return response.json();
};

const People = () => {
  // 'People' is the key for the Query, second argument is an async function to grab the data
  const { data, status } = useQuery("People", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>People</h2>
      {/* // status of query e.g loading */}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
