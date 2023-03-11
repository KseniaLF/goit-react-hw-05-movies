import { ProductList } from 'components/ProductList/ProductList';
import { products } from 'fakeApi';
export const Products = () => {
  return <ProductList products={products} />;
};
