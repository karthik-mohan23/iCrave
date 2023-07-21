import { useState } from "react";
const RestaurantMenuAccordion = ({ title, content }) => {
  //   console.log(content);
  const display = Boolean(title && content);
  // to close and open accordion
  const [isActive, setIsActive] = useState(false);
  return (
    display && (
      <>
        <div>
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsActive((prevValue) => !prevValue)}>
              <div className="p-4 text-xl font-semibold">
                {title ? title : ""}
              </div>
              <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && (
              <div className="p-4">
                {content.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="text-sm w-[40%] mb-8">
                        {item?.card?.info?.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="h-5 bg-gray-100"></div>
      </>
    )
  );
};
export default RestaurantMenuAccordion;
