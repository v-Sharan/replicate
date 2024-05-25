import { replicateClient } from "../replicate.js";

export const ImageText = async (req, res, next) => {
  const input = {
    image: req.file.path,
  };
  const output = await replicateClient.run(
    "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
    { input }
  );
  console.log(output);
  res.json({ message: output });
};
