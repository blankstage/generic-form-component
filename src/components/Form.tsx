import React, { useEffect, useState } from "react";
import FormTextInput, { IFormTextInputData } from "./FormTextInput";

interface IFormProps {
	inputFields: IFormTextInputData[];
	onSubmit: (inputData: IFormDataObj) => void;
}

export interface IFormDataObj {
	[key: string]: string;
}

const Form: React.FC<IFormProps> = (props) => {
	const [ formData, setFormData ] = useState<IFormDataObj>({});

	useEffect(() => {
		const initialFormData: IFormDataObj = {};

		props.inputFields.forEach((inputField) => {
			initialFormData[inputField.name] = inputField.defaultValue ?? ""
		});

		setFormData(initialFormData);
	}, [ props ])

	const updateFormData = (name: string, input: string) => {
		const newFormData = Object.assign({}, formData);

		if (name in newFormData) {
			newFormData[name] = input;
		} else {
			throw Error(`Unable to find input field with name ${name}`);
		}

		setFormData(newFormData);
	}

	const onSubmitForm = (e: React.SyntheticEvent) => {
		// Preventing default form action to demonstrate the data being sent by console logging
		e.preventDefault();
		props.onSubmit(formData);
	}

	return (
		<form onSubmit={onSubmitForm} autoComplete="off">
			<ul>
				{props.inputFields.map((inputFieldData) => (
					<li key={inputFieldData.id}>
						<FormTextInput
							{...inputFieldData}
							onChange={updateFormData} />
					</li>
				))}
				{/* Begun attempt at using children for extendability after learning of composition */}
				{/* props.children */}
				<li>
					<input type="submit" />
				</li>
			</ul>
		</form>
	)
}

export default Form;