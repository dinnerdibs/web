import { ComponentPropsWithoutRef } from 'react';

export default function Input({
	type = 'text',
	...props
}: ComponentPropsWithoutRef<'input'>) {
	return (
		<input
			type={type}
			className="focus:border-border-color mx-2 rounded-md border-2 border-transparent bg-white px-3 py-2 shadow-sm transition outline-none"
			autoComplete="off"
			{...props}
		/>
	);
}
