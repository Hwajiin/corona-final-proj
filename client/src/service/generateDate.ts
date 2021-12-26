// 10 이하의 숫자 앞자리수에 0을 추가하는 함수
const attachZeroToLeadingDigit = (day: string | number): string => {
  if (typeof day === "string") {
    return parseInt(day) < 10 ? `0${day}` : day;
  } else {
    return day < 10 ? `0${day}` : day.toString();
  }
};

// yyyymmdd 형식으로 변환해주기 위한 함수
const generateDate = (fewDaysAgo: number = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - fewDaysAgo);
  const targetDate = date.toLocaleDateString();

  return targetDate
    .split(".")
    .map((item) => attachZeroToLeadingDigit(item.trim()))
    .join("");
};

export default generateDate;
