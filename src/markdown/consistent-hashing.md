---
title: Consistent Hashing
date: 2021-4-22
tags:
  - Distributed Systems
---

Partitioning state across servers can help reduce the load on each server. This requires a mapping between state and partitions to keep track of everything.

Modulo hashing could create a mapping that distributes state relatively evenly across servers;
however, since the modulo is relative to the number of servers, adding or removing one server could change the mapping drastically.
This would trigger many state exchanges, which is undesirable.

Instead of mapping state to volatile servers, servers should be mapped to state.

Consistent hashing does this by representing the hash space continuously as a circle.
Servers are placed along the circle based on where their IDs hash to and are responsible for range of state (predecessor, self] called a shard.
This allows servers to be added and removed with minimal effort, since the successor can split its shard with a joining server or take over a leaving server's shard.

To improve load balancing even more, each server could take responsibility of more shards distributed around the hash space by holding many random IDs that map to virtual nodes.
Each virtual node would be responsible for one shard.
