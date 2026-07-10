-- https://datalemur.com/questions/sql-histogram-tweets

WITH user_with_counts AS (
  SELECT
    user_id,
    COUNT(tweet_id) AS total_tweets
  FROM
    tweets
  WHERE
    EXTRACT(YEAR FROM tweet_date)
  GROUP BY
    user_id
)
SELECT
  total_tweets AS tweet_bucket,
  COUNT(user_id) AS users_num
FROM
  user_with_counts
GROUP BY
  total_tweets;
