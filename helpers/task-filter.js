export function filterDataByStatus(data, filterOptions) {
  const newItemsArray = data.filter((item) => item.status === filterOptions);
  return newItemsArray;
}
