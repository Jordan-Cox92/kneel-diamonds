import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

const buildOrderListItem = (order) => {
    const sizes = getSizes()
    const styles = getStyles()
    const metals = getMetals()
    const foundMetal = metals.find(
        (metal) => {
            //The find() method returns the value of the first element that passes a test.

            //The find() method executes a function for each array element.

            //The find() method returns undefined if no elements are found.

            //The find() method does not execute the function for empty elements.

            //The find() method does not change the original array.
            return metal.id === order.metalId

        }

    )
    const foundSizes = sizes.find(
        (size) => {

            return size.id === order.sizeId

        }

    )
    const foundStyles = styles.find(
        (style) => {

            return style.id === order.styleId

        }

    )

    const totalCost = foundMetal.price + foundSizes.price + foundStyles.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })


    return `<li>
    Order #${order.id} cost ${costString}
    </li>`




}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

