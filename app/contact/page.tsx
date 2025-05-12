import { Metadata } from 'next';
import React from 'react';
import Contact from './Contact';

export const metadata: Metadata = {
	title: 'Naeem Carr | Contact',
};

export default function page() {
	return <Contact />;
}
