import { ProductCard } from '@/products/components/ProductCard';
import { products } from '@/products/data/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Products',
	description: 'Products page',
};

export default function ProductsPage() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}
