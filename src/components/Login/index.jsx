import React from 'react';

export const Login = () => {
  return (
    <div className="px-5 flex w-1/2 justify-end items-center">
      <div v-if="accountId">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center h-12 w-36 rounded-md bg-indigo-500 text-white mx-2">
            {/* <UserIcon className="w-6 h-6 text-black-500" /> */}
            <h4 className="mr-2">id-1234</h4>
          </div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-2">
            {/* <LogoutIcon className="w-6 h-6 text-black-500" click="signOut" /> */}
          </div>
        </div>
      </div>
      <button
        v-else
        click="signIn"
        className="self-end rounded-3xl  py-3 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </div>
  );
};
