# Long Parameter List

Imagine a function where you have to pass 3, 4, 5 or more 😱 arguments. Problems with this are:
- You are coupled in terms of order of the arguments
- If you wish to make some of the argument optional, you have to put them in a certain order
- Potentially there is no explicit difference between some or all of the arguments e.g. `doStuff(1, 34, 122, 0)`. Looking at this you have no idea what's the difference between all of these numbers without inspecting the source code.

Possible refactorings for this are **Replace Parameter with Query, Introduce Parameter Object, Preserve Whole Object, Remove Flag Argument, Combine Functions into Class**

## Problem
```typescript
import { axios } from "axios";

export type RequestActivityType = "likes" | "comments" | "follows";
export function getActivities(
    id: number,
    batchSize: number,
    timestamp: number,
    returnReviewed: boolean,
    activityType: RequestActivityType,
) {
    return axios.get(/* use arguments */);
}

/* USAGE */
await getActivities(1, 2, 1212321, false, "likes");
```
## Solution
```typescript
import { axios } from "axios";

export type RequestActivityType = "likes" | "comments" | "follows";
interface GetActivitiesProps {
  id: number;
  batchSize: number;
  timestamp: number;
  returnReviewed: boolean;
  activityType: RequestActivityType;
}

export function getActivities(options: GetActivitiesProps) {
  return axios.get(/* use options */);
}

/* USAGE */
// Hide arguments
await getActivities(options);

// Order doesn't matter
// Explicit value naming
await getActivities({
  timestamp: 1212321,
  batchSize: 2,
  id: 1,
  returnReviewed: false,
  activityType: "likes",
});

// If some keys are optional, skip them easily
await getActivities({
  timestamp: 1212321,
  id: 1,
});
```
