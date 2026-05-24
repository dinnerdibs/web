'use client';

import Input from '@/components/input';
import { FormEvent, useState } from 'react';

interface FormOptions {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	email: string;
	username: string;
	displayName: string;
	password: string;
	confirmPassword: string;
}

export default function Page() {
	const [formFields, setFormFields] = useState<FormOptions>({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		email: '',
		username: '',
		displayName: '',
		password: '',
		confirmPassword: '',
	});

	async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (
			formFields.firstName.length === 0 ||
			formFields.lastName.length === 0 ||
			formFields.username.length === 0 ||
			formFields.password.length === 0 ||
			formFields.displayName.length === 0 ||
			formFields.email.length === 0
		) {
			console.log('Please enter all fields!');
			return;
		}

		if (formFields.password.trim() !== formFields.confirmPassword.trim()) {
			alert('The provided two passwords do not match!');
			return;
		}

		const formattedFormFields = {
			firstName: formFields.firstName.trim(),
			lastName: formFields.lastName.trim(),
			email: formFields.email.trim(),
			username: formFields.username.trim(),
			displayName: formFields.displayName.trim(),
			password: formFields.password.trim(),
			dateOfBirth: new Date(formFields.dateOfBirth),
		};

		try {
			const response = await fetch(
				'http://localhost:8000/api/v1/users/register',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(formattedFormFields),
				},
			);

			if (response.ok) {
				console.log('Registered account!');
			} else {
				console.log(response);
			}
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className="p-5">
			<h2 className="font-heading text-4xl">Sign Up</h2>
			<h3 className="text-content-tertiary mt-2">
				Start your cooking journey with DinnerDibs by signing up with a free
				account!
			</h3>

			<form
				className="mt-5"
				onSubmit={onFormSubmit}
			>
				<div>
					<label htmlFor="firstName">First Name*</label>
					<Input
						placeholder="John"
						id="firstName"
						required
						value={formFields.firstName}
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((prev) => ({
								...prev,
								firstName: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="lastName">Last Name*</label>
					<Input
						id="lastName"
						placeholder="Doe"
						required
						value={formFields.lastName}
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((prev) => ({
								...prev,
								lastName: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="dateOfBirth">Date of Birth</label>
					<input
						type="date"
						id="dateOfBirth"
						className="ml-3 bg-white px-3 py-2"
						value={formFields.dateOfBirth}
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((prev) => ({
								...prev,
								dateOfBirth: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="email">Email*</label>
					<Input
						id="email"
						placeholder="john.doe@example.com"
						required
						value={formFields.email}
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((current) => ({
								...current,
								email: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="username">Username*</label>
					<Input
						id="username"
						placeholder="john_doe"
						value={formFields.username}
						required
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((current) => ({
								...current,
								username: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="displayName">Display Name*</label>
					<Input
						id="displayName"
						placeholder="John Doe's Bakery"
						value={formFields.displayName}
						required
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((current) => ({
								...current,
								displayName: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="password">Password*</label>
					<Input
						id="password"
						placeholder="*******"
						type="password"
						value={formFields.password}
						required
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((current) => ({
								...current,
								password: value,
							}));
						}}
					/>
				</div>

				<div className="mt-5">
					<label htmlFor="confirmPassword">Confirm Password*</label>
					<Input
						type="password"
						id="confirmPassword"
						placeholder="*******"
						required
						value={formFields.confirmPassword}
						onChange={(e) => {
							const value = e.target.value;
							setFormFields((prev) => ({
								...prev,
								confirmPassword: value,
							}));
						}}
					/>
				</div>

				<button
					className="from-primary-400 to-primary-600 text-primary-50 hover:from-primary-500 hover:to-primary-700 mt-4 rounded-md bg-linear-to-br px-3 py-2 shadow-sm transition hover:cursor-pointer"
					type="submit"
				>
					Create Account
				</button>
			</form>
		</div>
	);
}
