import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
    productId: string
    name: string
    price: number
    rating?: number
    stockQuantity: number
}

export interface NewProduct {
    name: string
    price: number
    rating?: number
    stockQuantity: number
}

export interface SaleSummary {
    salesSummaryId: string
    totalValue: number
    changePercentage?: number
    date: string
}

export interface PurchaseSummary {
    purchaseSummaryId: string
    totalPurchased: number
    changePercentage?: number
    date: string
}

export interface ExpenseSummary {
    expenseSummaryId: string
    totalExpenses: number
    date: string
}

export interface ExpenseByCategorySummary {
    expenseByCategoryId: string
    expenseSummaryId: string
    category: string
    amount: string
    date: string
}

export interface DashboardMetrics {
    popularProducts: Product[]
    salesSummary: SaleSummary[]
    purchaseSummary: PurchaseSummary[]
    expenseSummary: ExpenseSummary[]
    expenseByCategorySummary: ExpenseByCategorySummary[]
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    }),
    reducerPath: 'api',
    tagTypes: ['DashboardMetrics', 'Products'],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => '/dashboard',
            providesTags: ['DashboardMetrics'],
        }),
        getProducts: build.query<Product[], string | void>({
            // We need the string because we could pass a query parameter
            query: (search) => ({
                url: '/products',
                params: search ? { search } : undefined,
            }),
            providesTags: ['Products'],
        }),
        createProduct: build.mutation<Product, NewProduct>({
            query: (newProduct) => ({
                url: '/products',
                method: 'POST',
                body: newProduct,
            }),
            invalidatesTags: ['Products'], // When we add a product, invalidate the current products so that another request is sent to update the list
        }),
    }),
})

export const {
    useGetDashboardMetricsQuery,
    useGetProductsQuery,
    useCreateProductMutation,
} = api
