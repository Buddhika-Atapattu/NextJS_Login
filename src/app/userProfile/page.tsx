'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from "react-hot-toast";
import axios from "axios";

export default function ProfilePage() {
	const router = useRouter();
	const [data, setData] = useState();

	const logOut = async (event: any) => {
		event.preventDefault();
		try {
			const respose = await axios.get('/api/users/logout');
			toast.success('Logout successfull');
			router.push('/login');
		} catch (error: any) {
			console.log('Error occur ' + error.message);
			toast.error(error.message);
		}
	};

	const getUser = async () => {
		const res = await axios.get('/api/users/me');
		console.log(res.data.data._id);
		setData(res.data.data._id);
	};
	return (
		<>
			<h1 className='text-dark'>This is the profile page {data != undefined ? data : "No data"}</h1>
		</>
	);
}
