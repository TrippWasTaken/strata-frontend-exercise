import React, { FC } from 'react';
import type { UserDetails } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import HeartIcon from '../heartIcon';
import { useLocalState } from '../../contexts/useLocalState';

interface Props {
  userData: UserDetails;
  position: number;
}
const LeaderboardEntry: FC<Props> = ({ userData, position }) => {
  const user = userData.username;

  return (
    <tr className="rounded-lg bg-slate-800 text-sm sm:text-xl duration-200 transition-colors ease-in hover:bg-slate-600">
      <td className="rounded-l-lg text-right w-10">#{position + 1}</td>
      <td className="h-full py-1">
        <Link href="/profile/[username]" as={`/profile/${user}`}>
          <div className="h-full w-full flex justify-start items-center px-2">
            <div className="relative aspect-square w-10 sm:w-20 object-contain rounded-full overflow-hidden">
              <Image src={userData.profileImage} alt={`${user} profile image`} height={200} width={200} />
            </div>
            <div className="mr-auto px-2">{user}</div>
          </div>
        </Link>
      </td>
      <td>{userData.score}</td>
      <td className="rounded-r-lg hover:cursor-pointer">
        <HeartIcon user={user} />
      </td>
    </tr>
  );
};

export default LeaderboardEntry;
