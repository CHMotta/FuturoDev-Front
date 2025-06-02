type PriceTagProps = {
    priceTag: number
}

export default function PriceTag({priceTag}:PriceTagProps){


    return(
        <div>
            <p>
                R$ {(priceTag)}
            </p>
        </div>
    )
}