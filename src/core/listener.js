import { handleCartItemGroupHandler } from "../app/cart";
import { handleCategoryGroup } from "../app/category";
import { handleProductGroup } from "../app/product";
import { cartItemGroup, categoryGroup, productGroup } from "./selectors";

const listener = () => {
    categoryGroup.addEventListener("click",handleCategoryGroup);
    productGroup.addEventListener("click",handleProductGroup);
    cartItemGroup.addEventListener("click",handleCartItemGroupHandler)
}

export default  listener;