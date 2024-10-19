import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = ({ apikey, url }) => {
  const [recipedata, setrecipedata] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      const data = await axios.get(`${url}/random`, {
        params: {
          apiKey: apikey,
          number: 10,
        },
      });
      setrecipedata(data.data.recipes);
    };

    fetch_data();
  }, []);

  return (
    <div>
      <div className="text-center font-bold text-5xl mx-6"> Most Searched </div>
      <div className="flex justify-center flex-wrap">
        {recipedata.map((data) => (
          <Link
            key={data.id}
            to={`/recipe/${data.id}`}
            className="inline-block relative rounded-lg m-5 w-[15%] min-w-44 min-h-52 pb-2 hover:scale-105 transition-all hover:cursor-pointer"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover", // Cover the entire div
              backgroundPosition: "center", // Center the background image
            }}
          >
            <div
              className="absolute bottom-0 w-full text-white pt-5 rounded-lg pb-4 p-4"
              style={{
                background: `linear-gradient(to bottom, transparent, black)`,
              }}
            >
              <div>{data.title}</div>
              <div>Time taken: {`${data.readyInMinutes}min`}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
