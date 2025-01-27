/**
 * 生成0-10的随机整数
 * @returns {number} 0到10之间的随机整数
 */
export const getRandomNumber = (end: number) => {
  return Math.floor(Math.random() * end);
};
