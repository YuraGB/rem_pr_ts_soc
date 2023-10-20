function pickPeaks(arr) {
  let newPeak = true;
  let equalValueToRemove = false;
  return arr.reduce(
    (acc, curr, i, origin) => {
      if (i === 0 || !origin.length) {
        return acc;
      }

      const theNext = origin[i + 1];
      const nextIsTheLast = i + 1 === origin.length - 1;

      if (theNext === undefined) {
        return acc;
      }

      if (curr === theNext && !nextIsTheLast) {
        equalValueToRemove = true;
        return acc;
      }

      if (curr > theNext && i === 1) {
        acc.pos.push(i);
        acc.peaks.push(curr);
        equalValueToRemove = false;
      }

      if (curr > theNext && i !== 1) {
        newPeak = true;
        equalValueToRemove = false;
        return acc;
      }

      if (curr < theNext) {
        equalValueToRemove = false;
        if (!nextIsTheLast) {
          if (newPeak) {
            acc.pos.push(i + 1);
            acc.peaks.push(theNext);
            newPeak = false;
          } else {
            acc.pos.pop();
            acc.peaks.pop();
            acc.pos.push(i + 1);
            acc.peaks.push(theNext);
          }
        } else {
          if (
            (acc.peaks[acc.peaks.length - 1] <= 2 &&
              acc.pos[acc.pos.length - 1] !== 1) ||
            equalValueToRemove
          ) {
            acc.pos.pop();
            acc.peaks.pop();
          }
        }
      }

      if (equalValueToRemove) {
        if (
          acc.peaks[acc.peaks.length - 1] <= 2 &&
          acc.pos[acc.pos.length - 1] !== 1
        ) {
          acc.pos.pop();
          acc.peaks.pop();
        }
      }

      return acc;
    },
    { pos: [], peaks: [] }
  );
}

console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), {
  pos: [2],
  peaks: [3],
});
// console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), {
//   pos: [3, 7],
//   peaks: [6, 3],
// });
// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), {
//   pos: [3, 7],
//   peaks: [6, 3],
// });
// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), {
//   pos: [3, 7, 10],
//   peaks: [6, 3, 2],
// });
// console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), {
//   pos: [2, 4],
//   peaks: [3, 2],
// });
// console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
// console.log(
//   pickPeaks([
//     7, 12, 11, 1, -1, 11, 11, 10, 2, -4, -3, 1, 11, -4, 11, -2, 2, 2, 1, -4, 0,
//     -1, 13, 1, 0, 10, 10, 2, 13, -3, 12,
//   ]),
//   {
//     pos: [1, 5, 12, 14, 16, 20, 22, 25, 28],
//     peaks: [12, 11, 11, 11, 2, +0, 13, 10, 13],
//   }
// );
