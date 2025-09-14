import Products from "../../../Product";

const initialState = {
    items: Products,
    filteredItems: Products,
    searchTerm: "",
};

const filterProducts = (state) => {
    return state.items.filter((product) => {
        const matchSearch = product.name.toLowerCase()
        .includes(state.searchTerm.toLowerCase());
        return matchSearch;
    })
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.filteredItems = filterProducts(state)
        }
    }
})

export const {setSearchTerm} = ProductSlice.actions;
export default ProductSlice.reducer;