import WidgetItem from '@/components/WidgetItem';
import { products, type Product } from '@/products/data/products';
import { ItemCart } from '@/shoping-cart/components/ItemCart';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Carrito de compras',
	description: 'Productos en el carrito',
};

interface ProductInCart {
	product: Product;
	cuantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
	const ProductInCart: ProductInCart[] = [];

	for (const id of Object.keys(cart)) {
		const product = products.find((product) => product.id === id);
		if (product) {
			ProductInCart.push({
				product,
				cuantity: cart[id],
			});
		}
	}

	return ProductInCart;
};

export default async function CartPage() {
	const cookieStore = cookies();
	const cart = JSON.parse((await cookieStore).get('cart')?.value ?? '{}') as {
		[id: string]: number;
	};

	const productsInCart = getProductsInCart(cart);
	const totalToPay = productsInCart.reduce(
		(prev, current) => current.product.price * current.cuantity + prev,
		0
	);

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center justify-between mb-2">
				<h1 className="text-5xl ">Productos en el carrito</h1>
				<Link
					href={'/dashboard/products'}
					className=" hover:underline bg-blue-500  text-white font-bold py-2 px-4 rounded"
				>
					Ver productos
				</Link>
			</div>
			<hr className="mb-2" />

			<div className="flex flex-col sm:flex-row gap-2 w-full">
				<div className="flex flex-col gap-2 w-full sm:w-8/12">
					{productsInCart.length <= 0 ? (
						<h1 className="text-3xl text-center font-bold text-gray-500 flex items-center justify-center h-96 w-full">
							No hay productos en el carrito
						</h1>
					) : (
						productsInCart.map(({ product, cuantity }) => (
							<ItemCart
								key={product.id}
								product={product}
								quantity={cuantity}
							/>
						))
					)}
				</div>

				<div className="flex flex-col sm:w-4/12 w-full">
					<WidgetItem title="Total a pagar">
						<div className="mt-2 flex justify-center gap-4">
							<h3 className="text-3xl font-bold text-gray-700">
								${(totalToPay * 1.15).toFixed(2)}
							</h3>
						</div>
						<span className="font-bold text-center text-gray-500">
							Impuestos 15%: ${(totalToPay * 0.15).toFixed(2)}
						</span>
					</WidgetItem>
				</div>
			</div>
		</div>
	);
}
