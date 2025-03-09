import { useState } from "react";

import { fetchAddress } from "../utils/api";

function useFetchAddress() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);

  async function fetchFunction(cep) {
    try {
      setIsLoading(true);
      const responseData = await fetchAddress(cep);
      setData(responseData);
    } catch (error) {
      setIsError(true);
      console.error("Error:", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, data, isError, fetchFunction };
}

export default useFetchAddress;
