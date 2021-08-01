export const getLimitItemsHeightPerPage = (itemHeight: number) => Math.round(+document.body.clientHeight / itemHeight);

export const getSkeletonLimitHeightItems = (itemHeight: number) =>
  Array.from({ length: getLimitItemsHeightPerPage(itemHeight) }, (_, i) => i + 1);
