import { useContext } from "react";
import { ListContext } from "../context/listprovider";

const ListBox = () => {
  const { list, removeFromList } = useContext(ListContext);
  const handleRemove = (index, color) => {
    const listItem = document.getElementById(`done-${index}`);
    if (color === "red") {
      listItem.style.backgroundColor = "red";
      setTimeout(() => {
        removeFromList(index);
      }, 2000);
    } else if (color === "green") {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "white";
    }
  };

  return (
    <div className="bottom-box">
      {list.map((item, index) => (
        <div className="list-item" key={index} id={`done-${index}`}>
          {item}
          <div className="btn">
            <button onClick={() => handleRemove(index, "red")}>-</button>
            <button onClick={() => handleRemove(index, "green")}>Done</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListBox;
