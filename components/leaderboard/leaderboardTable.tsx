import React, { FC } from 'react';
import type { LeaderboardData, UserDetails } from '../../types';
import LeaderboardEntry from './leaderboardEntry';

interface Props {
  data: UserDetails[];
}
const LeaderboardTable: FC<Props> = ({ data }) => {
  return (
    <>
      <table className="table-auto w-full border-separate border-spacing-y-4 p-10">
        <thead>
          <tr>
            <th className="text-left"></th>
            <th className="text-left">User</th>
            <th className="text-left">Score</th>
            <th className="text-left">Liked</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: UserDetails, index: number) => (
            <LeaderboardEntry userData={item} position={index} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LeaderboardTable;
