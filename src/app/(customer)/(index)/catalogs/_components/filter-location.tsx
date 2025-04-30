import { getLocations } from "@/app/(admin)/dashboard/(index)/locations/lib/data";
import React from "react";
import FilterCheckBoxItem from "./filter-checkbox-item";

export default async function FilterLocation() {
  const locations = await getLocations();
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Location</p>
      {locations.map((item) => (
        // <label key={`${item.id + item.name}`} htmlFor={`${item.id + item.name}`} className="font-semibold flex items-center gap-3">
        //   <input
        //     type="checkbox"
        //     id={`${item.id + item.name}`}
        //     name="brand"
        //     className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
        //   />
        //   <span>{item.name}</span>
        // </label>
        <FilterCheckBoxItem key={item.id + item.name} type="location" id={item.id.toString()} value={item.name} />
      ))}
    </div>
  );
}
