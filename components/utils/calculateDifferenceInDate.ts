const calculateDifferenceInDays = (startTime: string, endTime: string) => {
  console.log(startTime, endTime);
  const today = new Date().getTime();
  const startDate = new Date(startTime).getTime();
  const endDate = new Date(endTime).getTime();

  //   check difference between now and start date
  const differenceInTimeStart = startDate - today;

  //   if start date is less than zero that means it has started then we check whether it has ended or is ongoin
  if (differenceInTimeStart < 0) {
    const differenceInTimeEnd = endDate - today;

    console.log("diff", differenceInTimeEnd);
    // if the difference between now and the end date is greater than zero, means it has not ended, else it is ongoing
    if (differenceInTimeEnd > 0) {
      const differenceInDays = differenceInTimeEnd / (1000 * 3600 * 24);
      return `Ends in ${Math.round(differenceInDays) + 1} days`;
    } else {
      return "";
    }
  } else {
    // it has not started
    // return the difference between start date and now

    const differenceInDays = differenceInTimeStart / (1000 * 3600 * 24);
    return `Starts in ${Math.round(differenceInDays) + 1} days`;
  }
};

export default calculateDifferenceInDays;
