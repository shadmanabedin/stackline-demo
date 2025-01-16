import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockData from "../mocks/stackline_frontend_assessment_data_2021.json";
import { ProductInformation } from "../mocks";

interface ProductsState {
    items?: ProductInformation[];
    selected?: ProductInformation;
}

const initialState: ProductsState = {}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        selectItem: (state, action: PayloadAction<{id: string}>) => { 
            state.selected = state.items?.find(item => item.id === action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchAllProducts.pending, () => {
                console.log("fetch is pending!");
            })
    }
});

export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async () => {
        // 
        await new Promise((resolve) => setTimeout(resolve, 500));
        return mockData;
    }
)

export const { selectItem } = productsSlice.actions;
export default productsSlice.reducer