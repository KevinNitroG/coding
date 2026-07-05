// https://leetcode.com/problems/zigzag-conversion/

function calculateCols(sLength: number, numRows: number): number {
  if (numRows <= 1 || sLength <= numRows) return sLength;

  const cycleLen = 2 * numRows - 2;
  const fullCycles = Math.floor(sLength / cycleLen);
  const remainder = sLength % cycleLen;

  let cols = fullCycles * (numRows - 1);

  if (remainder > 0) {
    if (remainder <= numRows) {
      cols += 1;
    } else {
      cols += 1 + (remainder - numRows);
    }
  }

  return cols;
}

function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;
  // idk why my logic is broken
  // let cols = 0;
  // {
  //     // length = 14

  //     // x = ceil( length / (2 * rows - 2) )
  //     // x = ceil (14 / 6) = 3

  //     // col = x + (rows - 2) * (x - 1)
  //     // col = 3 + (4 - 2) * (3 - 1) = 3 + 2 * 2 = 7
  //     const x = Math.ceil(s.length / (2 * numRows - 2));
  //     cols = x + (numRows - 2) * (x - 1);
  // }
  const cols = calculateCols(s.length, numRows);
  const board = Array.from({ length: cols }, () => new Array<string>(numRows));
  {
    let x = 0; // hor
    let directionDown = false;
    let y = 0; // vert
    for (const char of s) {
      board[x][y] = char;

      if (y === 0 || y === numRows - 1) {
        directionDown = !directionDown;
      }

      if (directionDown) {
        y++;
      } else {
        y--;
        x++;
      }
    }
  }
  const result = new Array<string>(s.length);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < cols; j++) {
      const char = board[j][i];
      if (char !== undefined) {
        result.push(char);
      }
    }
  }
  return result.join("");
}
