import React, { FC } from 'react';
interface Props {
  info: string;
  status: number;
}
const ErrorInfo: FC<Props> = ({ info, status }) => {
  return (
    <div>
      <div>Whoops we seem to have run into an issue</div>
      {status} : {info}
    </div>
  );
};

export default ErrorInfo;
