import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

interface FunctionProps {
	children?: Readonly<React.ReactNode>;
}

export default function MainContainer({ children }: FunctionProps) {
	return (
		<>
			<Navbar />
			<main className="bg-background-base text-content-secondary min-h-screen w-full">
				{children}
			</main>
			<Footer />
		</>
	);
}
