'use client';

import { numberLine } from '@/utils/constants';
import numberLineStyles from './numberLine.module.css';

export default function NumberLine() {
	return (
		<aside className={numberLineStyles.numberLine}>
			{numberLine.map((number, index) => (
				<p className={numberLineStyles.numbers} key={index}>
					{number}
				</p>
			))}
		</aside>
	);
}
