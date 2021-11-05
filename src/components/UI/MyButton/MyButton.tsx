import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './MyButton.module.css'

type MyButtonPropsType = {
	onClickButton: () => void
	disabled?: boolean
}

const MyButton: React.FC<MyButtonPropsType> = ({children, onClickButton, disabled, ...props}) => {
	return (
		<button onClick={onClickButton} className={s.button} disabled={disabled} {...props}>
			{children}
		</button>
	);
}

export default MyButton;
