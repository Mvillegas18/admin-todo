'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface SidebarProps {
	icon: React.ReactNode;
	path: string;
	title: string;
}

export function SidebarItem({ icon, path, title }: SidebarProps) {
	const pathName = usePathname();

	return (
		<li>
			<Link
				href={path}
				className={`px-4 py-3 flex items-center space-x-4 rounded-md  group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${
					pathName === path &&
					'text-white bg-gradient-to-r from-sky-600 to-cyan-400 transition-all '
				}`}
			>
				{icon}
				<span className="group-hover:text-white-700">{title}</span>
			</Link>
		</li>
	);
}
