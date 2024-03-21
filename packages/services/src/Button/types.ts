import { scale } from 'variables';

export type ButtonProps = {
	variant?: 'solid' | 'outline' | 'ghost';
	size?: 'xs' | 'sm' | 'md' | 'lg';
	color?: keyof typeof scale;
	style?: React.CSSProperties;
	background?: keyof typeof scale;
	isDisabled?: boolean;
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
