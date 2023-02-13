function getFlexItemDelay(index, flexItemsCountInRow) {
  let delayNumber = index;

  if (index > flexItemsCountInRow - 1 && index % flexItemsCountInRow === 0) {
    delayNumber = 0;
  }
  if (index % flexItemsCountInRow !== 0) {
    delayNumber = index % flexItemsCountInRow;
  }

  return delayNumber;
}

export default getFlexItemDelay;
