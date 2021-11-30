import React, { useState } from 'react';
import { Info } from '../components/Info';
import { Login } from '../components/Login';
import { Header } from '../components/Header/index';
import { useRecipients } from '../hooks/useRecipients';
import { MessageForm } from '../components/MessageForm';
import { LearnSection } from '../components/LearnSection';
import { mockDonatesHistory } from '../constants/mockData';
import { MessageHistory } from '../components/MessageHistory';

export const HomePage = () => {
  const [user, setUser] = useState();

  const { recipients, messages, sendMessage, transferFunds } = useRecipients();

  return (
    <>
      <div id="nav" className="py-4 p-0 flex justify-end">
        <div className="flex w-1/2 justify-end items-center list-none">
          <Login user={user} setUser={setUser} />
        </div>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          <Header />

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <Info />
            <MessageForm
              recipients={recipients?.map((recipient) => ({
                label: recipient,
                value: recipient,
              }))}
              sendMessage={sendMessage}
              transferFunds={transferFunds}
            />
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <LearnSection />
              {user && messages ? (
                <MessageHistory messages={messages} />
              ) : (
                <MessageHistory messages={mockDonatesHistory} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
