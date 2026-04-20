import { SwitchButton } from '../../utils/constants';
import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';

type Props = {
	type: 'button' | 'toggle' | 'nav';
	label?: string;
	onClick?(): void;
	toggled?: boolean;
};

export default function Button({ type, label, onClick, toggled }: Props) {
	switch (type) {
		case 'button':
			return <button>{label}</button>;
		case 'toggle':
			return (
				<SwitchButton sx={{ m: 1 }} checked={toggled} onChange={onClick} />
			);

		case 'nav':
			return (
				<Hamburger
					size={25}
					color='var(--blue)'
					toggled={toggled}
					toggle={onClick}
				/>
			);

		default:
			break;
	}
}
