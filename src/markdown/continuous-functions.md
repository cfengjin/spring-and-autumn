---
title: Continuous Functions
date: 2021-6-17
tags:
  - Functions
---
A function $f$ is continuous at $a$ if
$$
\lim_{x \to a} f(x) = f(a).
$$

This is equivalent to saying the limit $f(a)$ can be reached at $a$.

What is more interesting than continuity at a point is continuity for every point on an interval.
Note that for continuity on a closed interval, the limit at either endpoint is one-sided.

## Theorem 1

If $f$ and $g$ are continuous at $a$, then
- $f + g$ is continuous at $a$,
- $f \cdot g$ is continuous at $a$.

Moreover, if $g(a) \neq 0$, then $1 / g$ is continuous at $a$.

## Theorem 2

If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \circ g$ is continuous at $a$.

## Theorem 3

If $f$ is continuous at $a$ and $f(a) > 0$, then there is an open interval around $a$ that maps **all** of its points above $0$.

Likewise, if $f$ is continuous at $a$ and $f(a) < 0$, then there is an open interval around $a$ that maps **all** of its points below $0$.

## Theorem 4

If $f$ is continuous on $[a, b]$, then $f$ can take on any value between $f(a)$ and $f(b)$.

## Theorem 5

If $f$ is continuous on $[a, b]$, then $f$ is lower and upper bounded on $[a, b]$.

## Theorem 6

If $f$ is continuous on $[a, b]$, then $f$ has a maximum and minimum on $[a, b]$.

## Theorem 7

If $n$ is odd, then any equation
$$
x^n + a_{n-1}x^{n-1} + ... + a_0 = 0
$$
has a root.

The left-hand side of the equation is just a number, and any positive number has a root and any number $\alpha$ has an odd root $n$:
$$
\sqrt[n]{\alpha} = x
$$
$$
\alpha = x^n
$$
$$
x^n - \alpha = 0
$$

## Theorem 8

If $f$ is an even-degree polynomial, then it has a minimum or maximum.

There are no solutions for $x$ when $f(x)$ is below the minimum or above the maximum.
