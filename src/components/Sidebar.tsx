import { SidebarItem, SidebarProps } from '@/components/SidebarItem';
import Image from 'next/image';
import Link from 'next/link';
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci';
import {
	IoCalendar,
	IoCalendarOutline,
	IoCheckboxOutline,
	IoListOutline,
} from 'react-icons/io5';

interface MenuItemProps extends SidebarProps {
	id: number;
}

const menuItem: MenuItemProps[] = [
	{
		id: 1,
		icon: <IoCalendarOutline />,
		title: 'Dashboard',
		path: '/dashboard',
	},
	{
		id: 2,
		icon: <IoCheckboxOutline />,
		title: 'Rest TODOS',
		path: '/dashboard/rest-todos',
	},
	{
		id: 3,
		icon: <IoListOutline />,
		title: 'Server Actions',
		path: '/dashboard/server-todos',
	},
];

export function Sidebar() {
	return (
		<aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
			<div>
				<div className="mx-6  py">
					<Link href="/dashboard" title="home">
						<Image
							src="/logo-miguel.webp"
							className="w-80"
							alt="tailus logo"
							width={2048}
							height={2048}
						/>
					</Link>
				</div>

				<div className="mt-8 text-center">
					<Image
						src="/foto-admin.webp"
						alt=""
						className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
						width={150}
						height={150}
					/>
					<h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
						Miguel A. Villegas
					</h5>
					<span className="hidden text-gray-400 lg:block">Admin</span>
				</div>

				<ul className="space-y-2 tracking-wide mt-8">
					{menuItem.map(({ title, path, icon, id }) => (
						<SidebarItem
							title={title}
							icon={icon}
							path={path}
							key={id}
						/>
					))}
				</ul>
			</div>

			<div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
				<button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
					<CiLogout />
					<span className="group-hover:text-gray-700">Logout</span>
				</button>
			</div>
		</aside>
	);
}
