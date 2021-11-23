import React, { useEffect } from 'react';
import { CONTRACT_ID, wallet } from '../../services/near';
import { UserIcon, LogoutIcon } from '@heroicons/react/outline';

export const Login = ({ user, setUser }) => {
  const signIn = () => wallet.requestSignIn(CONTRACT_ID);

  const signOut = () => {
    wallet.signOut();
    localStorage.removeItem(`near-api-js:keystore:${user}:testnet`);
    setUser(null);
  };

  useEffect(() => {
    const userData = wallet.getAccountId();
    setUser(userData);
  }, [setUser]);

  return (
    <div className="px-5 flex w-1/2 justify-end items-center">
      {user ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center cursor-pointer h-12 p-4 rounded-md bg-indigo-500 text-white mx-2">
            <span>
              <UserIcon className="w-6 h-6 text-black-500" />
            </span>
            <h4 className="mr-2">{user}</h4>
          </div>
          <div className="flex items-center justify-center cursor-pointer h-12 w-12 rounded-md bg-indigo-500 text-white mx-2">
            <LogoutIcon className="w-6 h-6 text-black-500" onClick={signOut} />
          </div>
        </div>
      ) : (
        <button
          onClick={signIn}
          className="self-end rounded-3xl  py-3 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      )}
    </div>
  );
};
