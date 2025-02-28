import { notFound } from "next/navigation";
import { showProducts } from "@/lib/showProduct";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({params}){
    const {id} = params;
    console.log("routes:", id);
    const product = await showProducts(id);
    console.log("product:", product);

    if(!product){
        return notFound();
    }
    
    return(
        <ProductDetail product={product} />
    );
}