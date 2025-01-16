import { FC, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Graph from './components/Graph';
import Table from './components/Table';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { fetchAllProducts, selectItem } from './store/products';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // Mocking behavior of the app loading up then someone selecting an item to view
    // in real life we would have a component that would control the item in view
    dispatch(fetchAllProducts())
      .then(() => {
        dispatch(selectItem({ id: "B007TIE0GQ" }))
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex mt-20 gap-5 justify-between mx-[16px]">
        <Sidebar />
        <div className="flex flex-col gap-4 grow">
          <Graph />
          <Table />
        </div>
      </div>
    </>
  )
}

export default App
