import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setlists] = useState([]);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          "https://mexplant-api.herokuapp.com/api/search/listPlantsByClassifications",
          {
            headers: {
              "x-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjhjMzFlNThmZWM5MjRhMjU2Nzk3YWYiLCJpYXQiOjE2NTM0MzA2NDksImV4cCI6MTY1MzUxNzA0OX0.pBAtgHjIb5d4Gf-mc9YXpLXHDBjSsu1qMlVx4BfSReA",
            },
          }
        );
        // console.log(res.data.list);
        setlists(res.data.list);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  });

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
      {/* <List list={{name:"",plants:[{"_id":""}]}}/> */}
    </div>
  );
};

export default Home;
