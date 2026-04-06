import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/inflictt")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <h3 className="text-7xl text-center">
        This is your github page
      </h3>
      <h4>Github followers are {data.followers}</h4>
      <h4>Github following are {data.following}</h4>
      <img src={data.avatar_url }alt="saksham_img" />
    </>
  );
}