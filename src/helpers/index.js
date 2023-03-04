export const formatAmount = (input = "") => {
  if (!input) return input;
  const inputNumber = input
    ?.toString()
    .replace(/,/g, "")
    .replace(/[^0-9]/g, "");

  if (Number(inputNumber) === 0) return "";
  if (inputNumber[0] === "0" || inputNumber[3] === "0")
    return `${Number(inputNumber)
      .toString()
      .replace(/,/g, "")
      .replace(/[^0-9]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  // eslint-disable-next-line consistent-return
  if (inputNumber.length >= 43)
    return `${inputNumber
      .slice(0, -1)
      .replace(/,/g, "")
      .replace(/[^0-9]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  // eslint-disable-next-line consistent-return
  return `${inputNumber
    .replace(/,/g, "")
    .replace(/[^0-9]/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
