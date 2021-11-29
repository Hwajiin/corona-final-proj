// yyyymmdd 형식으로 변환해주기 위한 두 가지 종류의 함수
const generateDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${month}${day}`;
};

const altGenterateDate = () => {
  const date = new Date().toLocaleDateString();
  return date
    .split(".")
    .map((item) => item.trim())
    .join("");
};

export default generateDate;
