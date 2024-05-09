import { useEffect, useState } from "react";
import Content from "../RightContent/content";
import Sidebar from "../Sidebar/sidebar";
import styles from "./main.module.scss";
import axios from "axios";

export default function Main() {
  const [data, setData] = useState<Data[]>([]);
  const [clickedId, setclickedId] = useState(1);
  const getEmployeeData = async () => {
    try {
      const response = await axios.get<Data[]>(
        "https://dbeb-47-247-159-210.ngrok-free.app/",{headers: {
          "ngrok-skip-browser-warning": "skip-browser-warning",
        },}
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const getNames= async () => {
  try {
    const response = await axios.get<Data[]>(
      "https://dbeb-47-247-159-210.ngrok-free.app/",{headers: {
        "ngrok-skip-browser-warning": "skip-browser-warning",
      },}
    );
    setData(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    getEmployeeData();
  }, []);
  useEffect(() => {
    getNames();
  }, []);

  function handleClick(id: number) {
    setclickedId(id);
  }

  function handlePrevious(id: number) {
    if (id > 0 ) {
      --id;
      setclickedId(id);
    }
  }
  
  function handleNext(id: number) {
    ++id;
    setclickedId(id);
  }

  function handleDelete(id:number){
   setData(data.filter(item=>item.id!==id))
   ++id;
   setclickedId(id)
  }
  return (
    <div className={styles.Main}>
      <Sidebar data={data} handleClick={handleClick} />
      <Content
        data={data}
        id={clickedId}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleDelete={handleDelete}
      />
    </div>
  );
}
