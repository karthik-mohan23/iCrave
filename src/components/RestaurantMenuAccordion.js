import { useState } from "react";
const RestaurantMenuAccordion = ({ title, content }) => {
  //   console.log(content);
  const display = Boolean(title && content);
  console.log(display);
  // to close and open accordion
  const [isActive, setIsActive] = useState(false);
  return (
    display && (
      <div className="my-8">
        <div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => setIsActive((prevValue) => !prevValue)}>
            <div className="p-4">{title ? title : ""}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="p-4">
              {content.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item?.card?.info?.name}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    )
  );
};
export default RestaurantMenuAccordion;
