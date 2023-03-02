import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const UserInfoItem: FC<Props> = ({ children }) => {
  return <div className="text-xl flex flex-row px-10">{children}</div>;
};

export default UserInfoItem;
