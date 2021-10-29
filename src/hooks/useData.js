import { useState, useEffect } from "react";

//use data hook
const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/didarulamin/demodata/main/healthcaredata.json"
    )
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return {
    data,
    setData,
  };
};

export default useData;
