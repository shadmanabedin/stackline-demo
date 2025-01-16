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
      <div className="flex mt-20 w-fit h-fit gap-5 justify-between p-[16px]">
        <Sidebar item={mock} />
        <div className="flex flex-col">
          <Graph item={mock} />
          <Table item={mock} />
        </div>
      </div>
    </>
  )
}

export default App
