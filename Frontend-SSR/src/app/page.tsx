'use client';

import { useApp } from '@/contexts/AppContext';
import Link from 'next/link';

export default function Home() {
	const { userData } = useApp();
	return (
		<div className="m-auto flex flex-col gap-6 text-center items-center">
			{userData ? (
				<>
					<h1 className="text-2xl">Welcome Back!</h1>
					<p className="text-xl">Your name is: {userData.firstName}</p>
					<Link
						className="btn btn-primary"
						href="/dashboard"
					>
						Go to dashboard
					</Link>
				</>
			) : (
				<>
					<h1 className="text-2xl">Welcome!</h1>
					<Link
						className="btn btn-primary"
						href="/login"
					>
						Login
					</Link>
				</>
			)}
		</div>
	);
}
