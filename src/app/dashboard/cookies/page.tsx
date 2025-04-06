import { TabBar } from '@/components/TabBar';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Cookies page',
	description: 'Cookies',
};

export default async function CookiesPage() {
	const cookieStore = await cookies();
	const cookie = cookieStore.get('tab');
	const currentTab = cookie ? Number(cookie.value) : 1;

	const allCookies = cookieStore.getAll();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			{JSON.stringify(allCookies)}
			<div className="flex flex-col gap-2">
				<span className="text-3xl">Tabs</span>
				<TabBar currentTab={currentTab} />
			</div>
		</div>
	);
}
