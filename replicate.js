import Replicate from "replicate";
import { config } from "dotenv";

config();

export const replicateClient = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
// const data = async () => {
//   const input = {
//     image:
//       "https://replicate.delivery/mgxm/f4e50a7b-e8ca-432f-8e68-082034ebcc70/demo.jpg",
//   };
//   const output = await replicateClient.run(
//     "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
//     { input }
//   );
//   console.log(output);
// };
