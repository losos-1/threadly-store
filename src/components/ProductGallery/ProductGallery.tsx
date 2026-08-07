import { useState } from 'react'
import './ProductGallery.scss'

type ProductGalleryProps = {
    imgSrc:string[]
}
export default function ProductGallery({imgSrc} : ProductGalleryProps){
    const [activeImage,setActiveImage] = useState<number>(0)


    return(
        <article className='product-gallery'>
            <div className="product-gallery__list">
                {imgSrc.map((img,index) =>(
                    <button
                        key={index}
                        className={
                        activeImage === index
                            ? "product-gallery__item product-gallery__item--active"
                            : "product-gallery__item"
                        }
                        onClick={() => setActiveImage(index)}
                    >
                        <img src={img} alt="" />
                    </button>
                ))}
            </div>
             <div className="product-gallery__main">
                <img src={imgSrc[activeImage]} alt="" />
            </div>
        </article>
    )
}