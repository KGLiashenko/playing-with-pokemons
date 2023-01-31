export const getValidParamValue = (value: string | string[] | undefined) => {
  let pageIndex = 0;
  if (value) {
    if (value instanceof Array<string>) pageIndex = +value[0];
    else pageIndex = +value;
  }

  return pageIndex;
};
