import NextAuth from "next-auth"
import { authOptions } from "@/src/utils/auth"
import { NextApiRequest, NextApiResponse } from "next"

const handler = NextAuth(authOptions);

export default handler;

export const GET = (req: NextApiRequest, res: NextApiResponse) => handler(req, res);
export const POST = (req: NextApiRequest, res: NextApiResponse) => handler(req, res);
