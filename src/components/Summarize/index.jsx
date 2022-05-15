import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { useToasts } from 'react-toast-notifications';
import { getSummarize, transfer } from '../../services/near';

export const Summarize = ({ user, owner }) => {
  const { addToast } = useToasts();

  const [summarize, setSummarize] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleTransfer = async () => {
    setLoading(true);
    try {
      const res = await transfer();
      addToast(`Transfer success \n ${res}`, {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 30000,
      });
    } catch (error) {
      const errorMessage = error?.kind?.ExecutionError;
      addToast(errorMessage.slice(0, errorMessage.match(/, filename/).index), {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 30000,
      });
    }
    setLoading(false);
  };

  const getData = async () => {
    try {
      const res = await getSummarize();
      setSummarize(Object.entries(res?.contributions));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user && owner === user && getData();
  }, [owner, user]);

  return user && owner === user ? (
    <div className="shadow overflow-hidden sm:rounded-md mt-4">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="flex flex-col items-center">
          <Button isLoading={isLoading} onClick={handleTransfer}>
            Transfer to owner (Me)
          </Button>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {summarize
              ? summarize.map(([key, value]) => (
                  <>
                    <span className="text-right">{key}:</span>
                    <span className="text-left">{value}</span>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
