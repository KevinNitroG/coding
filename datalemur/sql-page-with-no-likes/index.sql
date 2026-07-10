-- https://datalemur.com/questions/sql-page-with-no-likes

SELECT
  p.page_id AS page_id
FROM
  pages AS p
WHERE
  p.page_id NOT IN (
    SELECT DISTINCT
      pl.page_id
    FROM
      page_likes AS pl
  )
ORDER BY
  p.page_id;

SELECT
  page_id
FROM
  pages
EXCEPT
SELECT
  page_id
FROM
  page_likes
ORDER BY
  page_id;

SELECT
  page_id
FROM
  pages
WHERE
  page_id NOT IN (
    SELECT
      page_id
    FROM
      page_likes
  WHERE
    page_id IS NOT NULL
  )
order by page_id;

SELECT
  page_id
FROM
  pages
WHERE
  NOT EXISTS (
    SELECT
      page_id
    FROM
      page_likes AS likes
    WHERE
      likes.page_id = pages.page_id
  )
ORDER BY page_id;


