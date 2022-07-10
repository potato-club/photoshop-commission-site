const printDate = (date: Date) => {
  const formattedDate = [ date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
  return formattedDate;
};

const printTime = (date: Date) => {
  if(date.getMinutes() < 10) {
    const formattedTime = [date.getHours(), ('0' + date.getMinutes())].join(':');
    return '오늘 ' + formattedTime;
  }
  const formattedTime = [date.getHours(), date.getMinutes()].join(':');
  return "오늘 " + formattedTime;
}

export const formatDate = (date: Date) => {
  if (new Date().getTime() - date.getTime() > 86400000) return printDate(date);
  else return printTime(date);
};




