import React from 'react';
import { Typography } from 'src/components';
import { customColor } from 'src/constants';
import { formatDate } from 'src/utils/formatDate';
type Props = {
  createdDate: string;
  modifiedDate: string;
};
export const CheckModifyDate = ({ createdDate, modifiedDate }: Props) => {
  return (
    <Typography size="12">
      {formatDate(modifiedDate)}
      {createdDate !== modifiedDate && (
        <span style={{ color: customColor.gray, marginLeft: 4 }}>(수정됨)</span>
      )}
    </Typography>
  );
};
