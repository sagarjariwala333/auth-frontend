import { IProduct } from "@/models/ProductModel";
import { getProductsService } from "@/services/ApiService";
import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
    products: IProduct[],
    addProduct: (product: IProduct) => void,
    updateProduct: (product: IProduct, id: string) => void
    deleteProduct: (id: string) => void
    getProducts: () => void
}

const initialState : ContextType = {
    products: [],
    addProduct: () => {},
    updateProduct: () => {},
    deleteProduct: () => {},
    getProducts: () => {}
}

const ProductContext = createContext<ContextType>(initialState)

const ProductProvide = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([])

    const getProducts = async () => {
        const products = await getProductsService()
        setProducts(products)
    }

    const addProduct = (product: IProduct) => {
        setProducts(prev => ([...prev, product]))
    }

    const updateProduct = (product: IProduct, id: string) => {
        const updatedProducts = products.map(ele_product => {
            if (ele_product.id === id) {
                return product
            }
            return ele_product
        })
        setProducts(updatedProducts)
    }

    const deleteProduct = (id: string) => {
        const updatedProducts = products.filter(product => product.id !== id)
        setProducts(updatedProducts)
    }

    return <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProducts }}>
        {children}
        </ProductContext.Provider>
}

const useProduct =  () => {
    return useContext(ProductContext);
}

export { useProduct, ProductProvide }