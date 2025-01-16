import { FC } from "react";
import { ItemComponent } from "../App";
import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis } from "recharts";
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

const formatMoney = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format;

const Graph: FC<ItemComponent> = ({ item }) => (
  <div className="flex flex-col bg-white rounded-lg shadow p-4">
    <h1 className="text-gray-800 font-semibold"> Retail Sales </h1>
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={item.sales}>
        <Line type="monotone" dataKey="retailSales" stroke="#44a7f6" strokeWidth={3} dot={false} />
        <Tooltip content={<GraphTooltip />} />
        <XAxis dataKey="weekEnding" interval={12} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const GraphTooltip: FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    console.log(payload)
    return (
      <div className="bg-white opacity-90 border rounded-lg px-4 py-2">
        {payload[0].payload.weekEnding} : {payload[0].value !== undefined && formatMoney(payload[0].value as number)}
      </div>
    );
  }

  return null;
};

export default Graph;