import { useCallback, useEffect, useState } from 'react';
import { useContract } from '../context/ContractsProvider';
import { getRecipients, transfer, sendMessage, getOwner } from '../services/near';

export const useRecipients = ({ setApiError }) => {
  const {
    data: { contractId, registryContractId },
  } = useContract();

  const [recipients, setRecipients] = useState();
  // const [messages, setMessages] = useState();
  const [owner, setOwner] = useState();

  const getData = useCallback(async () => {
    try {
      setRecipients(await getRecipients());
      // TODO: fix contract method
      // setMessages(await getMessages());
      setOwner(await getOwner());
    } catch (e) {
      setApiError(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractId, registryContractId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSendMessage = async (values) => {
    try {
      return await sendMessage(values);
    } catch (e) {
      setApiError(e);
    }
  };

  const handleTransfer = async () => {
    try {
      return await transfer();
    } catch (e) {
      setApiError(e);
    }
  };

  return {
    recipients,
    messages: null,
    owner,
    sendMessage: handleSendMessage,
    transferFunds: handleTransfer,
  };
};
