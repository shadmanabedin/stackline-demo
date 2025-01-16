import { FC } from "react";
import { ItemComponent } from "../App";

const Sidebar: FC<ItemComponent> = ({ item }) => (
  <div className="flex flex-col bg-white rounded-lg h-100% items-center shadow-lg">
    <img src={item.image} className="w-[160px] mb-4 mt-8" />
    <span className="font-bold text-xl mb-2">{item.title}</span>
    <span className="text-sm opacity-50 text-center text-balance mb-4">{item.subtitle}</span>
    <div className="border-y m-1 p-5">
      {
        item.tags.map(tag => (
          <span className="inline-block m-2 border py-1 px-2.5 rounded-md text-sm">
            {tag}
          </span>
        ))
      }
    </div>
  </div>
)

export default Sidebar;