import React from "react";
import { getCategoryById } from "../../lib/data";
import { redirect } from "next/navigation";
import FormCategory from "../../_components/form-category";

// type Tparams = {
//   id: string;
// };

type Tparams = Promise<{ id: string }>;

interface EditPageProp {
  params: Tparams;
}

export default async function EditPage({ params }: EditPageProp) {
  const { id }: { id: string } = await params;
  const data = await getCategoryById(id);

  if (!data) {
    return redirect("/dashboard/categories");
  }

  return <FormCategory type="EDIT" data={data} />;
}
