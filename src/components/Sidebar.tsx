import { FC } from "react";
import { ItemComponent } from "../App";

const Sidebar: FC<ItemComponent> = ({ item }) => (
  <div className="flex flex-col max-w-[300px] bg-white rounded-lg h-100% items-center shadow">
    <img src={item.image} className="w-[160px] mb-4 mt-8" />
    <span className="font-semibold text-xl mb-2">{item.title}</span>
    <span className="text-sm opacity-50 text-center text-balance mb-4 mx-2">{item.subtitle}</span>
    <div className="border-y m-1 p-3 border-opacity-20">
      {
        item.tags.map(tag => <Chip tag={tag} />)
      }
    </div>
  </div>
);

const Chip = ({ tag }) => (
  <span className="inline-block m-2 border py-1 px-2.5 rounded-md text-sm hover:bg-sky-300 ease-in-out duration-200">
    {tag}
  </span>
)


export default Sidebar;