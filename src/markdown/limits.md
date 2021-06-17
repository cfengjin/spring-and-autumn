---
title: Limits
date: 2021-6-15
tags:
  - Calculus
---
The function $f$ approaches the limit $l$ near $a$ if for **every** open interval around $l$ there exists **some** open interval around $a$ that maps **all** of its points within the intervals around $l$.

More formally, the function $f$ approaches the limit $l$ near $a$ means that for every $\epsilon > 0$ there is some $\delta > 0$ such that, for all $x$, if $0 < |x - a| < \delta$, then $|f(x) - l| < \epsilon$.

If it exists, the limit $l$ that $f$ approaches near $a$ can be denoted as such:
$$
l = \lim_{x \to a} f(x).
$$

Sometimes, a function can only approach the limit at $a$ from above or below:
$$
\lim_{x \to a^+} f(x) = l
$$
$$
\lim_{x \to a^-} f(x) = l
$$

Other times, a function may approach a limit at $\infty$:
$$
\lim_{x \to \infty} f(x) = l
$$

## Theorem 1

A function $f$ cannot approach two different limits near $a$.

## Theorem 2

If $\lim_{x \to a} f(x) = l$ and $\lim_{x \to a} g(x) = m$, then
$$
\lim_{x \to a} (f + g)(x) = l + m,
$$
$$
\lim_{x \to a} (f \cdot g)(x) = l \cdot m.
$$

Moreover, if $m \neq 0$, then
$$
\lim_{x \to a} (\frac{1}{g})(x) = \frac{1}{m}.
$$