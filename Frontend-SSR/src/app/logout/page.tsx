'use client';

import React, { useState, useEffect } from 'react';

import { useApp } from '@/contexts/AppContext';
import Link from 'next/link';

export default function LogoutPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedOut, setIsLoggedOut] = useState(false);
	const { setUserData } = useApp();

	useEffect(() => {
		fetch('/api/logout', {
			method: 'GET',
		})
			.then(res => {
				if (res.ok) {
					setIsLoggedOut(true);
					setUserData(null);
				}
			})
			.catch(() => {
				console.error('Something went wrong!');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [setUserData]);

	return (
		<div className="flex flex-col items-center gap-6 m-auto w-full max-w-md">
			{isLoading ? (
				<>
					<div className="loading loading-ring w-[200px]"></div>
					<h1 className="text-4xl font-bold">Logging Out</h1>
				</>
			) : isLoggedOut ? (
				<>
					<h1 className="text-4xl font-bold">Logout</h1>
					<p className="text-xl">
						You have been logged out. You can <a href="/login">login</a> again.
					</p>
					<Link
						className="btn btn-primary"
						href="/"
					>
						Go back home
					</Link>
				</>
			) : (
				<>
					<h1 className="text-4xl font-bold">Error</h1>
					<p className="text-xl">Something went wrong! Try again.</p>
				</>
			)}
		</div>
	);
}
