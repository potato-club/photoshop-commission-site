interface filter {
  value: string;
  label: string;
}
export const dummyFilter: filter[] = [
  {
    value: 'title',
    label: '제목',
  },
  {
    value: 'writer',
    label: '작성자',
  },
  {
    value: 'date',
    label: '날짜',
  },
];
