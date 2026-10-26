import { EyeIcon, EyeOffIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useState } from 'react';

export default function PasswordInput({
	id,
	label,
	placeholder,
	value,
	onChange,
}: {
	id: string;
	label: string;
	placeholder: string;
	value: string;
	onChange: (v: string) => void;
}) {
	const [visible, setVisible] = useState(false);

	return (
		<div className="flex flex-col gap-1.5">
			<label
				htmlFor={id}
				className="text-content-tertiary text-sm font-medium"
			>
				{label}
			</label>
			<div className="relative">
				<input
					id={id}
					type={visible ? 'text' : 'password'}
					placeholder={placeholder}
					autoComplete={id === 'password' ? 'new-password' : 'new-password'}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className="border-border-color text-content-tertiary placeholder:text-content-primary focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-3 pr-11 text-sm transition outline-none focus:ring-2"
				/>
				<button
					type="button"
					aria-label={visible ? 'Hide password' : 'Show password'}
					onClick={() => setVisible((v) => !v)}
					className="text-content-primary hover:text-primary absolute top-1/2 right-3 -translate-y-1/2 p-1 transition-colors"
					tabIndex={-1}
				>
					<HugeiconsIcon
						icon={visible ? EyeOffIcon : EyeIcon}
						size={18}
						className="shrink-0"
					/>
				</button>
			</div>
		</div>
	);
}
