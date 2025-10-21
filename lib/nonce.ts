import { headers } from "next/headers";

export async function getNonce() {
  try {
    const headersList = await headers();
    return headersList.get("x-nonce") || "";
  } catch {
    return "";
  }
}
