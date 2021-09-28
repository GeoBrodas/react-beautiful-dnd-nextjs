// filters the data from firebase to "completed", "todo", "in-progress"
export function filterDataByStatus(data, filterOptions) {
  const newItemsArray = data?.filter((item) => item.status === filterOptions);
  return newItemsArray;
}
