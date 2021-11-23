import { useCallback, useEffect, useState } from 'react';
import { getRecipients, getMessages, transfer, sendMessage } from '../services/near';

export const useRecipients = () => {
  const [recipients, setRecipients] = useState();
  const [messages, setMessages] = useState();
  const [apiError, setApiError] = useState();

  const getData = useCallback(async () => {
    try {
      setRecipients(await getRecipients());
      setMessages(await getMessages());
    } catch (e) {
      setApiError(e);
    }
  }, []);

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
    apiError,
    sendMessage: handleSendMessage,
    transferFunds: handleTransfer,
  };
};
