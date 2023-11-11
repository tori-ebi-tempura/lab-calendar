/* eslint-disable func-names, no-magic-numbers, max-statements, max-params */
const calcTimeRange = (
  fromHourStr: string,
  fromMinuteStr: string,
  toHourStr: string,
  toMinuteStr: string,
) => {
  const fromHour = Number(fromHourStr);
  const fromMinute = Number(fromMinuteStr);
  let toHour = Number(toHourStr);
  let toMinute = Number(toMinuteStr);

  if (toHour < fromHour) {
    throw new Error("FromHour is later than toHour.");
  } else if (toHour === fromHour) {
    return toMinute - fromMinute;
  } else {
    if (toMinute < fromMinute) {
      toHour -= 1;
      toMinute += 60;
    }
    return (toHour - fromHour) * 60 + (toMinute - fromMinute);
  }
};

/**
 * @param {string} from - Ex: "13:30"
 * @param {string} to - Ex: "17:00"
 */
export default (from: string, to: string) => {
  /** Ex: 13 */
  const fromHour: string = from.slice(0, 2);
  /** Ex: 30 */
  const fromMinute: string = from.slice(-2);
  /** Ex: 17 */
  const toHour: string = to.slice(0, 2);
  /** Ex: 00 */
  const toMinute: string = to.slice(-2);
  return {
    fromHour: Number(fromHour),
    fromMinute: Number(fromMinute),
    toHour: Number(toHour),
    toMinute: Number(toMinute),
    rangeMinute: calcTimeRange(fromHour, fromMinute, toHour, toMinute),
  };
};
