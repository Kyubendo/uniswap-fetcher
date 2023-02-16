import { CronJob } from "cron";
import { updatePairs } from "../dbService/updatePairs";
import { fetchPairs } from "../fetchingService/fetchPairs";

const schedule = "*/30 * * * *";

export const pairsJob = new CronJob(schedule, async () => {
  const fetchResult = await fetchPairs();
  updatePairs(fetchResult);
});
