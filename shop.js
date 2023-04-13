
import items from "./selected_products.json";
const Shop = () => {
    const [cart, setCart] = [];
    const [cartTotal, setCartTotal] = 0;
    useEffect(() => {
        total();
    }, [cart]);
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++){
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    }
    const addToCart = (el) => {
        setCart([...cart, el]);
    }
    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    }
    const clearCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== -1);
        setCart(hardCopy);
    }
    const cartItems = cart.map((el) => (
        <div key={el.id}>
            <img class="img-fluid" src={el.image} width={30} />
            {el.title}
            ${el.price}
        </div>
    ));
    const listItems = items.map((el) => (
        <div key={el.id}>
            <img class="img-fluid" src={el.image} />
            {el.title}
            {el.category}
            {el.price}
            <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
            <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>{" "}
        </div>
    ));
    const listItemsNoButtons = items.map((el) => (
        <div key={el.id}>
            {el.title + " " + el.price}
        </div>
    ));
    return (<div>
        <div>{listItems}</div>
        <div>Items in Cart: </div>
        <div>{cartItems}</div>
        <div>Order total: {cartTotal}</div>
        </div>);
}
export default Shop;