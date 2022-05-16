import React from 'react'
import { DetailPage } from 'src/containers';
import { DetailDummy } from 'src/dummy/detailDummy';
export default function detail() {
  return (
      <DetailPage data={DetailDummy} />
  );
}