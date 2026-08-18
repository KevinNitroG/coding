import math


class Solution:
    def sumAndMultiply(self, n: int) -> int:
        x: int = 0
        acc: int = 1
        sum: int = 0
        while n != 0:
            quotient = n % 10
            n = math.floor(n / 10)
            if quotient == 0:
                continue
            x += acc * quotient
            sum += quotient
            acc *= 10
        return x * sum
