---
title: Distributed Hash Tables
date: 2021-4-23
tags:
  - Distributed Systems
---

How can a client quickly lookup which server in the world can serve its request?

Hash tables are normally used to provide quick, constant-time lookups for local data, but they can actually be scaled to provide lookups for data globally.

Ideally, every server knows exactly where every piece of data is stored in the world so that constant-time lookup are possible.
This is unfeasible in the real world with so many servers to keep track of.
Instead, distributed hash tables can use consistent hashing and have servers store pointers to other nodes along the hash space in order to forward lookups.

With this setup, a simple approach for a lookup could be to forward requests to successive nodes until the right one is found.
However, the time it takes to lookup a node will scale linearly with the number of nodes in the hash table.
Again, we're dealing with many servers all over the world, so this isn't great.

A better approach would be...