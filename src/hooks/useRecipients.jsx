import { useCallback, useEffect, useState } from 'react';
import { useContract } from '../context/ContractsProvider';
import { getRecipients, getMessages, transfer, sendMessage } from '../services/near';

export const useRecipients = ({ setApiError }) => {
  const {
    data: { contractId, registryContractId },
  } = useContract();

  const [recipients, setRecipients] = useState();
  const [messages, setMessages] = useState();

  const getData = useCallback(async () => {
    try {
      setRecipients(await getRecipients());
      setMessages(await getMessages());
    } catch (e) {
      setApiError(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractId, registryContractId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSendMessage = async ({ message, anonymous, attachedDeposit }) => {
    sendMessage({ message, anonymous, attachedDeposit });
  };

  const handleTransfer = async () => {
    transfer();
  };

  return {
    recipients,
    messages,
    sendMessage: handleSendMessage,
    transferFunds: handleTransfer,
  };
};
