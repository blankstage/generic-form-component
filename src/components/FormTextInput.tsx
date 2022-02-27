export interface IFormTextInputData {
	id: string;
	name: string;
	label: string;
	defaultValue?: string;
	validation?: IFormTextInputValidationObject;
}

interface IFormTextInputValidationObject {
	title?: string;
	regEx?: string;
	required?: boolean;
}

export interface IFormTextInputProps extends IFormTextInputData {
	onChange: (id: string, input: string) => void;
}

const FormTextInput: React.FC<IFormTextInputProps> = ({
	id,
	name,
	label,
	defaultValue = "",
	validation = undefined,
	onChange,
}: IFormTextInputProps) => {
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(name, e.currentTarget.value);
	}

	return (
		<>
			<label htmlFor={id}>
				{label}
			</label>
			<input
				type="text"
				name={name}
				id={id}
				defaultValue={defaultValue}
				required={validation?.required}
				{...validation ? {pattern: validation.regEx} : {}}
				title={validation?.title}
				onChange={onInputChange}
				></input>
		</>
	)
}

export default FormTextInput;