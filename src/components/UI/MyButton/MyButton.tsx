import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './MyButton.module.css'

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = ButtonPropsType & {
	style?: {}
	onClickButton: () => void
	disabled: boolean
}

const MyButton: React.FC<MyButtonPropsType> = ({children, onClickButton, style , disabled}) => {
	return (
		<button onClick={onClickButton} className={s.button} style={style} disabled={disabled}>
			{children}
		</button>
	);
}

export default MyButton;
