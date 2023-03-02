import React, { FC } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { useLocalState } from '../contexts/useLocalState';

interface Props {
  user: string;
}

const HeartIcon: FC<Props> = ({ user }) => {
  const {
    states: { likedUsers },
    actions: { addUserAction, removeUserAction }
  } = useLocalState();

  const liked = likedUsers.includes(user);

  return (
    <div
      className={'aspect-square w-5 md:w-10 flex flex-col items-center justify-center'}
      onClick={() => (liked ? removeUserAction(user) : addUserAction(user))}
    >
      <HeartIconOutline
        className={`hover:animate-wiggle transition duration-500 ease-in ${
          liked ? 'fill-white opacity-100' : 'fill-none opacity-50'
        }`}
      />
    </div>
  );
};

export default HeartIcon;
