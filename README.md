## Need to review how the logic works

- [longest substring without repeating characters](./leetcode/longest-substring-without-repeating-characters/)

## Algorithms

- DSU (Disjoint Set Union) / Union Find

### Leetcode

For Binary Search Tree, Trie, and Graph, please import them manually like the following when you need to use them, as their names conflict with certain problems.

https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages

---

## JS

- Cannot do divide getting remainder using % with floating point numbers. If need, use `Math.floor()` or `Math.ceil()`

## SQL

- Get year from timestamptz in PostgreSQL
  ```sql
  SELECT
    EXTRACT(YEAR FROM your_timestamptz_column) AS year
  FROM
    your_table;
  ```
