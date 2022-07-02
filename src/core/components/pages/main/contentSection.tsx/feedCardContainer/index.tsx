import { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../../../../../axiosConfig";
import { ContractInterface } from "../../../../dto/contract.dto";
import FeedCard from "./feedCard";

const FeedCardContainer = () => {
  const [contracts, setContracts] = useState<ContractInterface[]>();

  const fetchContracts = useCallback(async () => {
    try {
      const res: AxiosResponse<ContractInterface[]> = await client.get(
        "/contract"
      );
      console.log(res.data);
      setContracts(res.data)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <>
      {contracts?.map((contract) => {
        return <FeedCard key={contract.contractId} {...contract} />;
      })}
    </>
  );
};

export default FeedCardContainer;
