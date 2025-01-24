import dayjs from "dayjs";
const reference = [
  { value: 1, label: "Jan", title: "January" },
  { value: 12, label: "Dec", title: "December" },
  { value: 11, label: "Nov", title: "November" },
  { value: 10, label: "Oct", title: "October" },
  { value: 9, label: "Sep", title: "September" },
  { value: 8, label: "Aug", title: "August" },
  { value: 7, label: "Jul", title: "July" },
  { value: 6, label: "Jun", title: "June" },
  { value: 5, label: "May", title: "May" },
  { value: 4, label: "Apr", title: "April" },
  { value: 3, label: "Mar", title: "March" },
  { value: 2, label: "Feb", title: "February" },
];
const endYear = 2024;
const getDateList = () => {
  const nowMonth = dayjs().format("YYYY-MM");
  const [year, month] = nowMonth.split("-");
  const currentMonth = parseInt(month);
  const currentYear = parseInt(year);

  const middle = [];
  for (let i = 1; i <= currentMonth; i++) {
    const item = reference.find((item) => item.value === i);
    middle.push(item);
  }
  for (let i = endYear + 1; i < currentYear; i++) {
    middle.push({
      label: i.toString(),
      title: i.toString(),
      value: i,
    });
  }
  const start = [{ label: "NOW", title: "Just Launched", value: "NOW" }];
  const end = [{ label: "2024", title: "2024", value: endYear }];
  return [...start, ...middle, ...end];
};
export { getDateList };
