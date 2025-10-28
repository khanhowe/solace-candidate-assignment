import { advocateData } from "../../../db/seed/advocates";
import { Advocate } from "./types";

export async function GET(): Promise<Response> {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);

  const data: Advocate[] = advocateData;

  return Response.json({ data });
}
