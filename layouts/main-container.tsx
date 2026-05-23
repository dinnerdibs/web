interface FunctionProps {
	children?: Readonly<React.ReactNode>;
}

export default function MainContainer({ children }: FunctionProps) {
	return (
		<>
			<main className="bg-background-base text-content-secondary min-h-screen w-full">
				{children}
			</main>
		</>
	);
}
