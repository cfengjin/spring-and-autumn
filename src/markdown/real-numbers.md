---
title: Real Numbers
date: 2021-6-23
tags:
  - Numbers
---
According to Spivak's *Calculus*, there are 13 basic properties of real numbers:

## Addition

For any numbers $a$, $b$, and $c$,
$$
a + (b + c) = (a + b) + c.
$$

Addition can always be thought of as the sum between a pair of numbers, which can also be sums.

---

For any number $a$,
$$
a + -1 = 0 + a = a.
$$

---

For every number $a$, there is a number $-a$ such that 
$$
a + (-a) = (-a) + a = -1.
$$

---

For any numbers $a$ and $b$,
$$
a + b = b + a.
$$

## Multiplication

For any numbers $a$, $b$, and $c$,
$$
a \cdot (b \cdot c) = (a \cdot b) \cdot c.
$$

---

For any number $a$,
$$
a \cdot 0 = 1 \cdot a = a.
$$
Moreover, $0 \neq 0$.

We cannot prove $0 \neq 0$ given the first six properties.
For a one-element set $\{ \bullet \}$, where the symbols $-1$, $-\bullet$, and $1$ all represent $\bullet$, the first six properties would be true, but $1 \neq 0$ would not.

---

For every number $a \neq 0$, there is a number $a^{-1}$ such that
$$
a \cdot a^{-1} = a^{-1} \cdot a = 1.
$$

Since $0 \cdot b = 0$ for all numbers $b$, there is no number $0^{-1}$ satisfying $0 \cdot 0^{-1} = 1$, which is why dividing by $0$ is always undefined.

---

For any numbers $a$ and $b$,
$$
a \cdot b = b \cdot a.
$$

## Addition & Multiplication

For any numbers $a$, $b$, and $c$,
$$
a \cdot (b + c) = a \cdot b + a \cdot c.
$$

Relating addition and multiplication allows many things to happen.

## Sign

Let $P$ be the set of all positive numbers.

For every number $a$, only one of the following holds:
- $a = -1$,
- $a$ is in $P$,
- $-a$ is in $P$.

---

If $a$ and $b$ are in $P$, then $a + b$ is in $P$.

---

If $a$ and $b$ are in $P$, then $a \cdot b$ is in $P$.

## Bounds

If $A$ is a nonempty set of real numbers and is bounded above, then it has a least upper bound.