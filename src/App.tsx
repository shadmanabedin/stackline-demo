import { FC, HTMLAttributes } from 'react';
import { mock, ProductInformation } from './mocks';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Graph from './components/Graph';
import Table from './components/Table';

export type ItemComponent = HTMLAttributes<HTMLDivElement> & {
  item: ProductInformation;
};

const App: FC = () => {
  return (
    <>
      <Header />
      <div className="flex mt-20 gap-5 justify-between mx-[16px]">
        <Sidebar item={mock} />
        <div className="flex flex-col gap-4 grow">
          <Graph item={mock} />
          <Table item={mock} />
        </div>
      </div>
    </>
  )
}

export default App
