'use client';

import { setCookie } from 'cookies-next/client';
import { useState } from 'react';

interface Props {
	currentTab?: number;
	tabOptions?: number[];
}

export const TabBar = ({
	tabOptions = [1, 2, 3, 4],
	currentTab = 1,
}: Props) => {
	const [setselected, setSetselected] = useState(currentTab);

	const handleTabChange = (tab: number) => {
		setSetselected(tab);
		setCookie('tab', tab.toString());
	};

	return (
		<div
			className={`grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}
		>
			{tabOptions.map((option, i) => (
				<div key={i}>
					<input
						type="radio"
						id="1"
						className="peer hidden"
						checked={setselected === option}
						onChange={() => {}}
					/>
					<label
						onClick={() => handleTabChange(option)}
						className="block transition-all cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
					>
						{option}
					</label>
				</div>
			))}
		</div>
	);
};
