export const testInitialState = {
  name: 'Initial state'
};
export const productsInitialState = {
  products: { paginatedItems: [], pageNumber: 0, pageSize: 0, pages: 0 },
  hasFetched: false
};
export const productInitialState = {
  product: { in_stock: [] }
};

export const cartInitialState = {
  products: [],
  hasFetched: false,
  addSucces: false,
  message: ''
};
