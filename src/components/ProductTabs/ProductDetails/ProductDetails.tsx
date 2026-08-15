import './ProductDetails.scss'
import type {ProductDetails} from '@/types/product'

type ProductDetailsProps = {
    details?:ProductDetails
}
export default function ProductDetails({
    details
} : ProductDetailsProps){

    return(
        <article className="product-details">
            <strong>Material: {<p>{details?.material}</p>}</strong>
            <strong>Fit: {<p>{details?.fit}</p>}</strong>
            <strong>Care: {<p>{details?.care}</p>}</strong>
            <strong>Origin: {<p>{details?.origin}</p>}</strong>
        </article>
    )
}