

function List({ item, className }) {
  return <li className={`${className}`}>{item.name}</li>;
}

export default List;
