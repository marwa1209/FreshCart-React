import React from 'react'

export default function PriceFormat({price}) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  }).format(price);

  return <div>{formattedPrice}</div>;
}
