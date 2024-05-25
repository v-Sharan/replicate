import { replicateClient } from "../replicate.js";

export const ImageText = async (req, res, next) => {
  const split = req.file.path.split("\\");
  const image = `https://replicate-4hv8.onrender.com/${split[0]}/${split[1]}`;
  const input = {
    image,
  };
  const output = await replicateClient.run(
    "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
    { input }
  );
  console.log(output);
  res.json({ message: output });
};
