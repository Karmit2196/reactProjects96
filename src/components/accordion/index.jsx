import data from "./data";
import { useState } from "react";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function getCurrentSelection(id) {
    setSelected(id === selected ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span onClick={() => getCurrentSelection(dataItem.id)}>+</span>
              </div>
              {selected === dataItem.id ? (
                <h4 className="content">{dataItem.answer}</h4>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
