import BagSummary from "./BagSummary";
import Footer from "./Footer";
import Header from "./Header";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item}></BagItem>
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
