import React from 'react';
import { Message } from './Message';
import { RadioGroup } from '@headlessui/react';

export const MessageHistory = ({ messages }) => {
  return (
    <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
      <RadioGroup>
        <RadioGroup.Label className="sr-only">Message History</RadioGroup.Label>
        <RadioGroup.Option>
          {messages?.map((item, id) => (
            <Message key={id} item={item} />
          ))}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
};
