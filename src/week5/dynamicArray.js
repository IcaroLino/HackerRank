/**
 * Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
 * Declare an integer, lastAnswer, and initialize it to 0.
 * There are  types of queries, given as an array of strings for you to parse:
 *
 * 1 . Query: 1 x y
 *  1. Let idx = ((x ^ lastAnswer) % n).
 *  2. Append the integer y to arr[idx].
 *
 * 2. Query: 2 x y
 *  1. Let idx = ((x ^ lastAnswer) % n).
 *  2. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
 *  3. Store the new value of lastAnswer to an answers array.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

export default function dynamicArray(n, queries) {

}
