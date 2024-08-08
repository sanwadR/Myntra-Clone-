import HomeItems from "../components/HomeItems";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state) => state.items);

  // Check if items is an array
  if (!Array.isArray(items)) {
    console.error("Items is not an array:", items);
    return null; // or handle the error in some way
  }

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItems key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
