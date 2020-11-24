import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants'

export interface Product {
  _id: string
  name: string
  image: string
  description: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numOfReviews: number
  reviews?: []
}

export interface IProductList {
  loading?: boolean
  products?: Product[]
  error?: any
}

export interface IProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST
  payload: IProductList
}

export interface IProductListSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS
  payload: IProductList
}

export interface IProductListFailAction {
  type: typeof PRODUCT_LIST_FAIL
  payload: IProductList
}

export type TProductListActions =
  | IProductListRequestAction
  | IProductListSuccessAction
  | IProductListFailAction

export interface IProductDetails {
  loading?: boolean
  product?: Product
  error?: any
}

export interface IProductDetailsRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST
  payload: IProductDetails
}

export interface IProductDetailsSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS
  payload: IProductDetails
}

export interface IProductDetailsFailAction {
  type: typeof PRODUCT_DETAILS_FAIL
  payload: IProductDetails
}

export type TProductDetailsActions =
  | IProductDetailsRequestAction
  | IProductDetailsSuccessAction
  | IProductDetailsFailAction
