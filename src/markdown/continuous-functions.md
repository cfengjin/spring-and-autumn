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