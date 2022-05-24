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
          "http://localhost:8080/api/search/listPlantsByClassifications",
          {
            headers: {
              "x-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjhjMzFlNThmZWM5MjRhMjU2Nzk3YWYiLCJpYXQiOjE2NTMzNjk1NjEsImV4cCI6MTY1MzM4Mzk2MX0.n0rH8QuJjFwYivX3ERdSp8dcWcAgV22LasTx4e6ag3k",
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
      {/* <List />
      <List />
      <List /> */}
    </div>
  );
};

export default Home;
