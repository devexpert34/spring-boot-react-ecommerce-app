
export const MAX_PRODUCTS_PER_PAGE = 15;

export const MAX_PRODUCTS_PER_TAB = 15;

export const INITIAL_PAGINATION_STATE = {
    pageNumber: 1,
    maxProducts: MAX_PRODUCTS_PER_PAGE
}

export const INITIAL_SORT_STATE = {
    id: 1,
    value: null
}

export const INITIAL_FILTER_ATTRIBUTE_STATE = {
    genders: [],
    apparels: [],
    brands: [],
    prices: []
}

export const FILTER_ATTRIBUTES = ["genders", "apparels", "brands", "prices"]

export const HOME_ROUTE = '/'
export const PRODUCTS_ROUTE = '/products'
export const DETAILS_ROUTE = '/products/details'
