import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const ContractsProvider = ({ children }) => {
  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;
  const contract = localStorage.getItem('CONTRACT_ID');
  !contract && localStorage.setItem('CONTRACT_ID', defaultContractId);

  const defaultRegistryContractId = process.env.REACT_APP_REGISTRY_CONTRACT_ID;
  const registryContract = localStorage.getItem('REGISTRY_CONTRACT_ID');
  !registryContract && localStorage.setItem('REGISTRY_CONTRACT_ID', defaultRegistryContractId);

  const [data, setData] = useState({
    contractId: contract ?? defaultContractId,
    registryContractId: registryContract ?? defaultRegistryContractId,
  });

  const setContracts = (contractId, registryContractId) => {
    localStorage.setItem('CONTRACT_ID', contractId);
    localStorage.setItem('REGISTRY_CONTRACT_ID', registryContractId);
    setData({ registryContractId, contractId });
  };

  return <DataContext.Provider value={{ data, setContracts }}>{children}</DataContext.Provider>;
};

export const useContract = () => useContext(DataContext);
