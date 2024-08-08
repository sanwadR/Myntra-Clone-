import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../Store/itemSlice";
import { fetchingStatusAction } from "../Store/fetchStatusSlice";

const FetchItems = () => {
  // const [isFetching, setFetching] = useState(false);

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchingStatusAction.markFetchingDone());
        dispatch(fetchingStatusAction.markFetchingFinished());

        dispatch(itemsAction.addInitialItems(items)); // Pass the entire array

        console.log(items);
      });
    //   .catch((error) => {
    //     console.error("Error fetching items:", error);
    //   })
    //   .finally(() => {
    //     // Update the fetch status once the fetch is done
    //     dispatch(itemsAction.setFetchDone());
    //   }
    // );

    return () => {
      console.log("Cleaning up");
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      {/* <div>
        Fetch Done = {fetchStatus.fetchDone}
        currently Fetching = {fetchStatus.currentlyFetching}
      </div> */}
    </>
  );
};

export default FetchItems;
