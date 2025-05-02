import React from "react";
import { getLocationById } from "../../lib/data";
import { redirect } from "next/navigation";
import FormLocation from "../../_components/form-location";
import { Tedit } from "@/types";

// type Tparams = {
//   id: string;
// };

export type Tparams = Promise<{ id: string }>;

export interface EditPageProp {
  params: Tparams;
}

export default async function EditPage({ params }: Tedit) {
  const { id }: { id: string } = await params;
  const data = await getLocationById(id);

  if (!data) {
    return redirect("/dashboard/locations");
  }

  return <FormLocation type="EDIT" data={data} />;
}
