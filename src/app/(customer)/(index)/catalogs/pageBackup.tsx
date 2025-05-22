// app/catalog/page.tsx (Server Component)
import { getUser } from "@/lib/auth";
import CatalogPage from "./_components/catalog-page";

export default async function Page() {
  const { session, user } = await getUser();
  return <CatalogPage session={session} user={user} />;
}
