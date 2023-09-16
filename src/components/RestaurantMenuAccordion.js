import { RESTAURANT_MENU_ITEM_IMAGE } from "../utils/links";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

const RestaurantMenuAccordion = ({
  title,
  content,
  id,
  isOpen,
  handleOpenAccordion,
}) => {
  const dispatch = useDispatch();

  function handleAddToCart(id, itemName, itemPrice) {
    const newItem = {
      id,
      name: itemName,
      unitPrice: itemPrice / 100,
      quantity: 1,
      totalPrice: itemPrice / 100,
    };

    dispatch(addItem(newItem));
  }

  return (
    <>
      <div>
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleOpenAccordion(id)}>
            <div className="p-4">
              <h2 className="text-[1.2rem] font-semibold">
                {title} ({content.length})
              </h2>
            </div>
            <div className="pe-4">
              {/* {isActive ? ( */}
              {isOpen ? (
                <BiSolidDownArrow className="text-gray-500" />
              ) : (
                <BiSolidUpArrow className="text-gray-500" />
              )}
            </div>
          </div>

          {isOpen && (
            <div className="p-4">
              {content.map((item) => {
                return (
                  <div key={item?.card?.info?.id} className="mb-12 px-4">
                    <div className="flex justify-between items-center gap-16 mb-12">
                      <div>
                        <p className="text-[1rem]  font-medium mb-2">
                          {item?.card?.info?.name}
                        </p>
                        <p className="text-xs   font-light mb-2">
                          {item?.card?.info?.description}
                        </p>

                        <div>
                          {item?.card?.info?.finalPrice ? (
                            <p className="text-[0.875rem]">
                              <del className="me-2 text-xs text-gray-500">
                                ₹{item?.card?.info?.price / 100}
                              </del>
                              ₹{item?.card?.info?.finalPrice / 100}
                            </p>
                          ) : (
                            <p className="text-[0.875rem]">
                              ₹{item?.card?.info?.price / 100}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-28 h-24 mb-2">
                          <img
                            src={
                              RESTAURANT_MENU_ITEM_IMAGE +
                              item?.card?.info?.imageId
                            }
                            alt="menu item"
                            className="w-full h-full block object-cover rounded-lg"
                          />
                        </div>

                        <button
                          onClick={() => {
                            handleAddToCart(
                              item?.card?.info?.id,
                              item?.card?.info?.name,
                              item?.card?.info?.finalPrice ||
                                item?.card?.info?.price
                            );
                          }}
                          className="absolute -bottom-2 left-2 bg-white border border-green-400 rounded-md px-8 py-1 text-green-600 font-medium">
                          ADD
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="h-5 bg-gray-100"></div>
    </>
  );
};
export default RestaurantMenuAccordion;
