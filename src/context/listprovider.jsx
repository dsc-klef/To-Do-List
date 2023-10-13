import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ListContext = createContext([]);

const ListProvider = (props) => {
  const [list, setList] = useState([]);

  const value = useMemo(() => {
    const addToList = (item) => {
      setList([...list, item]);
    };

    const removeFromList = (index) => {
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    };

    return { list, addToList, removeFromList };
  }, [list]);

  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
};

ListProvider.propTypes = {
  children: PropTypes.node,
};
export default ListProvider;
