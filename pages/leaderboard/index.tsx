import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWRImmutable from 'swr';
import ErrorInfo from '../../components/errorInfo';
import LeaderboardTable from '../../components/leaderboard/leaderboardTable';
import Loader from '../../components/loader';
import { fetcher } from '../../network/fetcher';
import type { LeaderboardData, ExtendedError } from '../../types';

interface swrTypes {
  isLoading: boolean;
  data: LeaderboardData;
  error: ExtendedError;
}
const Leaderboard: FC = () => {
  const { data, error, isLoading } = useSWRImmutable<LeaderboardData>('/api/leaderboard', fetcher, {
    refreshInterval: 20000
  });

  if (error) return <ErrorInfo info={error.info} status={error.status} />;
  if (isLoading) return <Loader />;
  return (
    <>
      <div className="w-full h-20 flex flex-col items-center justify-center space-y-12">
        <h1 className="text-4xl font-bold">Leaderboard</h1>
      </div>
      {data?.leaderboard && data.leaderboard.length !== 0 ? (
        <LeaderboardTable data={data?.leaderboard} />
      ) : (
        <div>There isnt doesnt seem to be any data yet</div>
      )}
    </>
  );
};

export default Leaderboard;
