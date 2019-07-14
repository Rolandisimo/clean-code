import { axios } from "./mocks";

export type RequestActivityType = "likes" | "comments" | "follows";
export function getActivities(
    id: number,
    batchSize: number,
    timestamp: number,
    returnReviewed: boolean,
    activityType: RequestActivityType,
) {
    return axios.get(
      `https://web.com/${id}/${activityType}?batchSize=${batchSize}&timestamp=${timestamp}&returnReviewed=${returnReviewed}`
    );
}
