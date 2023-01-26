import { verifySignature } from "@upstash/qstash/nextjs";

async function handler(req, res) {
  console.log("If this is printed, the signature has already been verified");

  const stocksResult = await fetch("https://project-dabir-omega.vercel.app/intraday")
  const stocks = await stocksResult.json()
  console.log("stocks = ", stocks)
  res.status(200).end();
}

export default verifySignature(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};