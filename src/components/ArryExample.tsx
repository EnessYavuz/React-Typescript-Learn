import React from "react";

type comingArry = {
  arrNesne: {
    firstName: string;
    lastName: string;
  }[];
};

function ArryExample(props: comingArry) {
  return (
    <div>
      {props.arrNesne.map((item) => {
        return <h3>{item.firstName}</h3>;
      })}
    </div>
  );
}

export default ArryExample;
