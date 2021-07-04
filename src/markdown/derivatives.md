---
title: Derivatives
date: 2021-6-26
tags:
  - Calculus
---
The function $f$ is differentiable at $a$ if
$$
\lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
$$
exists.
$f$ is differentiable if this is true for all $a$ in the domain.

Graphically, this is continuously adjusting the slope (rise/run) of a line defined by two points along $f$ by moving the two points closer and closer together along $f$ until they converge at $(a, f(a))$.

In other words, the slope changes continuously as a function of the domain.

The limit is called the derivative of $f$ at $a$ and is denoted by $f'(a)$.

The derivative function $f'$ maps each differentiable number $a$ in the domain to its derivative $f'(a)$.

A tangent line is defined as going through $(a, f(a))$ with slope $f'(a)$.

## Theorem 1

If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

## Theorem 2

If $f$ and $g$ are differentiable at $a$, then
$$
(f + g)'(a) = f'(a) + g'(a).
$$

## Theorem 3

If $f$ and $g$ are differentiable at $a$, then
$$
(f \cdot g)'(a) = f'(a) \cdot g(a) + f(a) \cdot g'(a).
$$

## Theorem 4

If $f(x) = x^n$ for some integer $n$, then
$$
f'(a) = na^{n-1}
$$
for all $a$.

## Theorem 5

If $g$ is differentiable at $a$, and $g(a) \neq 0$, then
$$
(\frac{1}{g})'(a) = \frac{-g'(a)}{[g(a)]^2}.
$$

## Theorem 6

If $f$ and $g$ are differentiable at $a$, then
$$
(\frac{f}{g})'(a) = \frac{f'(a) \cdot g(a) - f(a) \cdot g'(a)}{[g(a)]^2}.
$$

This is a consequence of Theorem 3 and Theorem 5.

## Theorem 7

If $g$ is differentiable at $a$, and $f$ is differentiable at $g(a)$, then
$$
(f \circ g)'(a) = f'(g(a)) \cdot g'(a).
$$