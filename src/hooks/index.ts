import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useSelectedItem = useSelector((state: RootState) => state.products.selected);