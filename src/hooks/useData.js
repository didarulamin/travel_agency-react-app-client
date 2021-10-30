import { useState, useEffect } from "react";

//use data hook
const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/allpackages")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return {
    data,
    setData,
  };
};

export default useData;
