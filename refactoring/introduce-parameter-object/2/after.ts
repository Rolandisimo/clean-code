import { axios } from "./mocks";

export type RequestActivityType = "likes" | "comments" | "follows";
interface GetActivitiesProps {
  id: number;
  batchSize: number;
  timestamp: number;
  returnReviewed: boolean;
  activityType: RequestActivityType;

}
export function getActivities({
  activityType,
  batchSize,
  id,
  returnReviewed,
  timestamp,
}: GetActivitiesProps) {
    return axios.get(
      `https://web.com/${id}/${activityType}?batchSize=${batchSize}&timestamp=${timestamp}&returnReviewed=${returnReviewed}`
    );
}
