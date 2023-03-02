import { ArrowUturnLeftIcon, CakeIcon, InboxIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWRImmutable from 'swr';
import UserInfoItem from '../../components/userProfile/userInfoItem';
import HeartIcon from '../../components/heartIcon';
import { fetcher } from '../../network/fetcher';
import type { ProfileData } from '../../types';
import ErrorInfo from '../../components/errorInfo';
import Loader from '../../components/loader';

const User: FC = () => {
  const router = useRouter();
  const { username } = router.query;
  const { data, error, isLoading } = useSWRImmutable<ProfileData>(`/api/profile/${username}`, fetcher);

  if (error) return <ErrorInfo info={error.info} status={error.status} />;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10 py-2">
      <h1 className="text-4xl font-bold py-10">User</h1>
      <div className="w-full h-full bg-slate-800 rounded-2xl">
        {data && (
          <>
            <div className="flex flex-row  py-10 ">
              <div className="px-2">
                <div className="h-20 relative object-contain aspect-square rounded-full overflow-hidden sm:h-40">
                  <Image
                    src={`/users/${data.username}.png`}
                    height={500}
                    width={500}
                    alt={`${data?.username} profile image`}
                  ></Image>
                </div>
                <div className="flex flex-row justify-center">
                  <span className="text-3xl sm:text-5xl">{data.username}</span>
                  <HeartIcon user={data.username} />
                </div>
              </div>
              <div className="sm:p-10 p-2">
                <p>{data.bio}</p>
              </div>
            </div>
            <div className="flex flex-col w-full p-2 lg:p-10 max-lg:divide-none lg:flex-row lg:divide-x lg:justify-evenly sm:justify-start ">
              <UserInfoItem>
                <svg
                  className=" aspect-box w-6 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                </svg>
                <span className="px-2">{data.twitter}</span>
              </UserInfoItem>
              <UserInfoItem>
                <InboxIcon className="aspect-box w-6" /> <span className="px-2">{data.email}</span>
              </UserInfoItem>
              <UserInfoItem>
                <CakeIcon className="aspect-box w-6 " /> <span className="px-2">{data.birthday}</span>
              </UserInfoItem>
            </div>

            <div className="w-full flex justify-center p-5">
              <button
                type="button"
                className="bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-xl text-center inline-flex items-center"
                onClick={() => router.back()}
              >
                <ArrowUturnLeftIcon className="w-5" /> <span className="px-4">Go Back</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default User;
