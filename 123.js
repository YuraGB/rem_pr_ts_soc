/*
function pickPeaks(arr) {
  let peakToValidate = null;
  let posToValidate = null;
  let isEqual = false;
  let isUp = null;
  const result = { pos: [], peaks: [] };

  arr.forEach((el, i, origin) => {
    const theNext = origin[i + 1];
    const theLast = i + 1 === origin.length;

    if (theLast) {
      if (el === peakToValidate) {
        return;
      }
      if (el > peakToValidate) {
        return;
      }

      if (isUp) {
        result.peaks.push(peakToValidate);
        result.pos.push(posToValidate);
        return;
      }
    }

    if (i === 0) {
      isUp = el < theNext ? true : el > theNext ? false : null;
      posToValidate = i;
      peakToValidate = el;
      return;
    }

    if (el < theNext) {
      if (isEqual) {
        if (el === peakToValidate) {
          isEqual = false;
          isUp = true;
          return;
        }
      }

      posToValidate = i;
      peakToValidate = el;
      isUp = true;
      return;
    }

    if (el > theNext) {
      if (isEqual && isUp) {
        if (el === peakToValidate) {
          result.peaks.push(peakToValidate);
          result.pos.push(posToValidate);
        }
      }

      if (isUp && !isEqual) {
        if (el > peakToValidate) {
          result.peaks.push(el);
          result.pos.push(i);

          posToValidate = i;
          peakToValidate = el;
        }
      }

      if (isEqual) {
        isEqual = false;
      }

      isUp = false;
      return;
    }

    if (el === theNext) {
      isEqual = true;

      if (el !== peakToValidate) {
        posToValidate = i;
        peakToValidate = el;
      }
      return;
    }
  });

  return result;
}

console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ]),
  { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] }
);
console.log(
  pickPeaks([
    0, -1, -1, -3, -3, 1, 4, 11, 10, 10, 11, -3, 5, -3, -3, 12, 15, 0, 7, 2, 3,
    13, -1, 2, 4, 15, 7, 10, 0, 2, 8, 8, 12, -1, 3, 0, 7, 11, 0, 0, 13, 11, 1,
    -4, 4, 15, 7, -2,
  ]),
  {
    pos: [7, 10, 12, 16, 18, 21, 25, 27, 32, 34, 37, 40, 45],
    peaks: [11, 11, 5, 15, 7, 13, 15, 10, 12, 3, 11, 13, 15],
  }
);
console.log(
  pickPeaks([
    7, 15, 7, 14, 12, 7, -2, -1, 14, 3, 4, 10, 12, -3, 10, 3, 1, 13, 2, 14, 6,
    6, -1, 0, 0,
  ]),
  { pos: [1, 3, 8, 12, 14, 17, 19], peaks: [15, 14, 14, 12, 10, 13, 14] }
);
console.log(
  pickPeaks([
    0, -2, 11, 10, 11, 8, 12, -3, 0, 4, 5, 10, 12, -4, 1, 8, 12, 6, -3, 4, -2,
    14, 3, 13, -3, 0, 0, 4, 4, 2,
  ]),
  {
    pos: [2, 4, 6, 12, 16, 19, 21, 23, 27],
    peaks: [11, 11, 12, 12, 12, 4, 14, 13, 4],
  }
);
console.log(
  pickPeaks([
    -4, 15, 15, 6, 0, 6, 12, 9, 3, 11, 0, 8, -1, 0, 4, 12, 13, 7, 6, 8, -3, 10,
    10, 0, -3, 8, 4, 10, 0, 14, 3, 15, 7, 7, 10, 6, 11,
  ]),
  {
    pos: [1, 6, 9, 11, 16, 19, 21, 25, 27, 29, 31, 34],
    peaks: [15, 12, 11, 8, 13, 8, 10, 8, 10, 14, 15, 10],
  }
);
console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ]),
  { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] }
);
console.log(
  pickPeaks([
    4, 11, 12, 13, 13, 8, 0, 9, 7, 6, -2, 14, 9, 7, -3, 0, 0, 0, 8, 15, 15, 1,
    -2, 11, 0, 0, 0, 4, 12, 4, 1, 12, 12, 7,
  ]),
  { pos: [3, 7, 11, 19, 23, 28, 31], peaks: [13, 9, 14, 15, 11, 12, 12] }
);
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), {
  pos: [2],
  peaks: [3],
});
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), {
  pos: [2],
  peaks: [3],
});
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), {
  pos: [2],
  peaks: [3],
});
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), {
  pos: [2],
  peaks: [3],
});
console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), {
  pos: [3, 7],
  peaks: [6, 3],
});
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), {
  pos: [3, 7],
  peaks: [6, 3],
});
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), {
  pos: [3, 7, 10],
  peaks: [6, 3, 2],
});
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), {
  pos: [2, 4],
  peaks: [3, 2],
});
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
console.log(
  pickPeaks([
    7, 12, 11, 1, -1, 11, 11, 10, 2, -4, -3, 1, 11, -4, 11, -2, 2, 2, 1, -4, 0,
    -1, 13, 1, 0, 10, 10, 2, 13, -3, 12,
  ]),
  {
    pos: [1, 5, 12, 14, 16, 20, 22, 25, 28],
    peaks: [12, 11, 11, 11, 2, +0, 13, 10, 13],
  }
);
console.log(
  pickPeaks([
    0, 10, 2, 0, -2, 0, 13, 14, 12, 2, 15, 12, -1, 0, -3, 8, 15, 8, -3, -2, 14,
    2, 4, 11, 10, 9, 9, 15, 12, 12, -4, 0, 0, 1,
  ]),
  {
    pos: [1, 7, 10, 13, 16, 20, 23, 27],
    peaks: [10, 14, 15, +0, 15, 14, 11, 15],
  }
);
*/
//
// function findNext(number, n) {
//   // Start from the right most digit
//   // and find the first digit that is
//   let x = -1;
//   let i;
//   // smaller than the digit next to it
//   for (i = n - 1; i >= 0; i--) {
//     if (number[i] > number[i - 1]) break;
//   }
//
//   // If no such digit found,then all
//   // numbers are in descending order,
//   // no greater number is possible
//   if (i === 1 && number[i] <= number[i - 1]) {
//     return;
//   }
//
//   // Find the smallest digit on the
//   // right side of (i-1)'th digit
//   // that is greater than number[i-1]
//   x = number[i - 1];
//   let smallest = i;
//
//   for (let j = i + 1; j < n; j++) {
//     if (number[j] > x && number[j] < number[smallest]) smallest = j;
//   }
//
//   // Swapping the above found smallest
//   // digit with (i-1)'th
//   let temp = number[smallest];
//   number[smallest] = number[i - 1];
//   number[i - 1] = temp;
//
//   // X is the final number, in integer datatype
//   x = 0;
//
//   // Converting list upto i-1 into number
//   for (let j = 0; j < i; j++) {
//     x = x * 10 + number[j];
//   }
//
//   // Sort the digits after i-1 in ascending order
//   number = number.slice(i, number.length + 1);
//   number.sort();
//
//   // Converting the remaining sorted
//   // digits into number
//   for (let j = 0; j < n - i; j++) {
//     x = x * 10 + number[j];
//   }
//
//   return x;
// }
//
// function nextBigger(n) {
//   const arr = String(n)
//     .split("")
//     .map((e) => +e);
//
//   const result = findNext(arr, arr.length);
//   return isNaN(result) ? -1 : result;
// }
//
// const sortedDigits = (n) => {
//   let arr = n.toString().split("");
//   arr.sort((a, b) => b - a);
//   return arr;
// };
//
// function nextBigger(n) {
//   let arr = sortedDigits(n);
//   let max = parseInt(arr.join(""), 10);
//
//   for (var i = n + 1; i <= max; i++) {
//     console.log(
//       i,
//       JSON.stringify(sortedDigits(i)) === JSON.stringify(arr),
//       arr
//     );
//     if (sortedDigits(i).every((x, j) => x === arr[j])) {
//       return i;
//     }
//   }
//
//   return -1;
// }

// console.log(nextBigger(12));
// console.log(nextBigger(513));
// console.log(nextBigger(2017));
// console.log(nextBigger(414));
// console.log(nextBigger(144));
// console.log(nextBigger(531));
// console.log(nextBigger(9));
// console.log(nextBigger(111));
// console.log(nextBigger(1234567980), 1234567908);
// console.log(nextBigger(111));
// console.log(nextBigger(111));
// console.log(nextBigger(111));

// function justify(text, width) {
//   const transformInToArray = text
//     .replace(/\n/g, "")
//     .split(" ")
//     .filter((e) => e);
//   const result = [];
//
//   // acc -> one row  only words
//   transformInToArray.reduce((acc, curr, i, origin) => {
//     if (origin.length === 1) {
//       result.push([curr]);
//       return;
//     }
//
//     if (i === 0) {
//       acc.push(curr);
//
//       return acc;
//     }
//
//     // width of words length in one row already added
//     const sumAccLenth = acc.join("").length;
//
//     // minimum one space between
//     const accItems = acc.length;
//
//     const calculation = sumAccLenth + curr.length;
//     if (calculation + accItems - 1 >= width) {
//       result.push(acc);
//
//       if (i === origin.length - 1) {
//         result.push([curr]);
//       }
//
//       return [curr];
//     } else {
//       acc.push(curr);
//     }
//
//     if (i === origin.length - 1) {
//       result.push(acc);
//     }
//
//     return acc;
//   }, []);
//
//   return result
//     .map((el, i) => {
//       if (i === result.length - 1) {
//         return el.join(" ");
//       }
//       const rowWordsLength = el.join("").length;
//       const rowLength = el.length > 1 ? el.length - 1 : el.length;
//       const spacesAmount = width - rowWordsLength;
//       const spacesBetween = Math.ceil(spacesAmount / rowLength);
//       const spaces = Array(spacesBetween).fill(" ").join("");
//       let row = el.join(spaces);
//
//       console.log(row, rowWordsLength, rowLength, row.length);
//       while (row.length > width) {
//         const index = row.lastIndexOf(spaces);
//         row = row.substring(0, index) + row.substring(index + 1);
//       }
//
//       return row + "\n";
//     })
//     .join("");
// }

//console.log(justify("123 45 6", 7));
// justify("", 10);
// justify("12 45 1234 12", 6);
// justify("123", 7);
//
// console.log(
//   justify(
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.",
//     30
//   )
// );
// expected
// 'Lorem  ipsum  dolor  sit amet,\nconsectetur  adipiscing  elit.\nVestibulum    sagittis   dolor\nmauris,  at  elementum  ligula\ntempor  eget.  In quis rhoncus\nnunc,  at  aliquet orci. Fusce\nat   dolor   sit   amet  felis\nsuscipit   tristique.   Nam  a\nimperdiet  tellus.  Nulla  eu\nvestibulum    urna.    Vivamus\ntincidunt  suscipit  enim, nec\nultrices  nisi  volutpat  ac.\nMaecenas   sit   amet  lacinia\narcu, non dictum justo. Donec\nsed  quam  vel  risus faucibus\neuismod.  Suspendisse  rhoncus\nrhoncus  felis  at  fermentum.\nDonec lorem magna, ultricies a\nnunc    sit    amet,   blandit\nfringilla nunc. In vestibulum\nvelit    ac    felis   rhoncus\npellentesque. Mauris at tellus\nenim. Aliquam eleifend tempus\ndapibus. Pellentesque commodo,\nnisi   sit   amet   hendrerit\nfringilla,  ante  odio  porta\nlacus,   ut   elementum  justo\nnulla et dolor.'
// 'Lorem  ipsum  dolor  sit amet,\nconsectetur  adipiscing  elit.\nVestibulum    sagittis   dolor\nmauris,  at  elementum  ligula\ntempor  eget.  In quis rhoncus\nnunc,  at  aliquet orci. Fusce\nat   dolor   sit   amet  felis\nsuscipit   tristique.   Nam  a\nimperdiet   tellus.  Nulla  eu\nvestibulum    urna.    Vivamus\ntincidunt  suscipit  enim, nec\nultrices   nisi  volutpat  ac.\nMaecenas   sit   amet  lacinia\narcu,  non dictum justo. Donec\nsed  quam  vel  risus faucibus\neuismod.  Suspendisse  rhoncus\nrhoncus  felis  at  fermentum.\nDonec lorem magna, ultricies a\nnunc    sit    amet,   blandit\nfringilla  nunc. In vestibulum\nvelit    ac    felis   rhoncus\npellentesque. Mauris at tellus\nenim.  Aliquam eleifend tempus\ndapibus. Pellentesque commodo,\nnisi    sit   amet   hendrerit\nfringilla,   ante  odio  porta\nlacus,   ut   elementum  justo\nnulla et dolor.'

const getLowest = (number) =>
  number
    .toString()
    .split("")
    .sort((a, b) => a - b);

function nextSmaller(n) {
  const theLowest = Number(getLowest(n).join(""));
  const theLowestToJson = JSON.stringify(getLowest(n));

  for (let i = n - 1; i >= theLowest; i--) {
    const variantToJson = JSON.stringify(getLowest(i));

    if (variantToJson === theLowestToJson) {
      return i;
    }
  }
  return -1;
}

console.log(nextSmaller(59884848459853), 123456789);

debugger;
