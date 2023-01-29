import dynamic from "next/dynamic";

function ItemsArray({ items }) {

    const itemsLi = items?.map((product, index) => {
        return <tr key={`{${product.name}-${index}`}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.itemTotal}</td>
        </tr>
    })

    return <>{itemsLi}</>
}

export default dynamic(() => Promise.resolve(ItemsArray), {
    ssr: false
})