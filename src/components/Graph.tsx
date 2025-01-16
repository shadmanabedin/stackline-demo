import { FC } from "react";
import { ItemComponent } from "../App";
import { Line, LineChart, XAxis } from "recharts";

const Graph: FC<ItemComponent> = ({ item, className }) =>
(
  <div className={className}>
    <LineChart width={400} height={400} data={item.sales}>
      <Line type="monotone" dataKey="retailSales" stroke="#44a7f6" />
      <XAxis />
    </LineChart>
  </div>
)

export default Graph;