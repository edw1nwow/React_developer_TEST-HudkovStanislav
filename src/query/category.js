import {gql} from '@apollo/client'

export const GET_ALL_CATEGORY = gql`
	query {
		categories {
			name
		}
	}
`
export const GET_ALL_CATEGORY_AND_CURRENCY = gql`
	query {
		categories {
			name
		}
		currencies{
        label
        symbol
  }
	}
`
export const GET_PRODUCTS = gql`
	query {
		categories {
			products {
				category
				id
				name
				gallery
				prices {
					currency {
						symbol
					}
					amount
				}
			}
		}
	}
`
export const GET_ITEM = gql`
	query Product($id: String!) {
		product(id: $id) {
			name
			inStock
            gallery
            description
            category
            prices{
                currency{
                    label
                    symbol
                }
            amount
            }
            brand
            attributes{
                name
                type
                items{
                    displayValue
                    value
                    id
                }
            }
		}
	}
`
