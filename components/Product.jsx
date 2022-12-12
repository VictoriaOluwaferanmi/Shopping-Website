import React from 'react'
import Link from 'next/link'
import imageUrlFor from "../utils/imageUrlFor";

const Product = ({ product: { image, name, slug, price }}) => {
  return (
    <div>
  <Link href={`/product/${slug.current}`}> 
    <div className="product-card" >
     <h3>{name}</h3>
        <img
         src={imageUrlFor(image && image[0])}
          width={250}
         height={250}
          className="product-image"
        />
     <div className="product-name">{name}</div>
     <div className="product-price">${price}</div>

       
    </div>
    </Link>
    
    </div>
  )
}

export default Product