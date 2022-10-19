/*
 * @Author: bo.yu yb@sxw.cn
 * @Date: 2022-09-29 16:19:33
 * @Description:
 */
// A mock function to mimic making an async request for data
function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    setTimeout(() => resolve({ data: amount }), 500);
  });
}

export default fetchCount;
