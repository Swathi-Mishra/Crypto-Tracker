import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCryptoData } from "../features/crypto/cryptoSlice";
import { mockWebSocket } from "../utils/mockWebSocket";
import { SAMPLE_DATA } from "../utils/sampleData";
import { POLLING_INTERVAL } from "../config/constants";

const useCryptoData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = mockWebSocket(SAMPLE_DATA, POLLING_INTERVAL);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updateCryptoData(data));
    };

    return () => {
      socket.close();
    };
  }, [dispatch]);
};

export default useCryptoData;
