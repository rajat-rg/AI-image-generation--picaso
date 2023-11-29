import * as dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: "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", // This is also the default, can be omitted
});

router.route("/").get((req, res) => {
  res.send("Hello from Picaso");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt,
    });

    res.status(200).json({ photo: image.data[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.message);
  }
});

export default router;
