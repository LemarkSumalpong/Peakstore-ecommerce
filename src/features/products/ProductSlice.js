import Products from "../../../Product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: Products,
    filteredItems: Products,
    searchTerm: "",
    selectedCategory: "All",
};

// Function to filter products based on search term
const filterProducts = (state) => {
    return state.items.filter((product) => {
        const matchSearch = product.name
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase());
    const matchCategory = 
        state.selectedCategory === "All" || 
        product.category === state.selectedCategory;
        return matchSearch && matchCategory;
    })
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.filteredItems = filterProducts(state)
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredItems = filterProducts(state);
        }
    },
})

export const {setSearchTerm, setSelectedCategory} = ProductSlice.actions;
export default ProductSlice.reducer;