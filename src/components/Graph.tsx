import { FC } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis } from "recharts";
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const formatMoney = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format;

const Graph: FC = () => {
  const sales = useSelector((state: RootState) => state.products.selected?.sales);

  if (!sales) {
    // TODO: put in a skeleton
    return <div> No item!</div>
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-4">
      <h1 className="text-gray-800 font-semibold"> Retail Sales </h1>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart data={sales}>
          <Line type="monotone" dataKey="retailSales" stroke="#44a7f6" strokeWidth={3} dot={false} />
          <Tooltip content={<GraphTooltip />} />
          <XAxis dataKey="weekEnding" interval={12} padding={{left: 50, right: 50}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const GraphTooltip: FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white opacity-90 border rounded-lg px-4 py-2">
        {payload[0].payload.weekEnding} : {payload[0].value !== undefined && formatMoney(payload[0].value as number)}
      </div>
    );
  }

  return null;
};

export default Graph;