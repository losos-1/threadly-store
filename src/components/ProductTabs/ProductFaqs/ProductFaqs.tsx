import FaqCart from '@/components/FaqCart'
import './ProductFaqs.scss'
import type {ProductFaq} from '@/data/faqs'
type ProductFaqsProps = {
    faqs:ProductFaq[]
}
export default function ProductFaqs({
    faqs
}:ProductFaqsProps){

    return(
        <section className='product-faqs'>
            {faqs.map(({...faqs}) =>(
                <FaqCart  
                    key = {faqs.id}
                    question = {faqs.question}
                    answer = {faqs.answer}
                />
            ))}
        </section>
    )
}