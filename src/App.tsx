import './App.css';
import Form, { IFormDataObj } from './components/Form';
import { IFormTextInputData } from './components/FormTextInput';

const exampleInputData1: IFormTextInputData = {
  id: "1",
  name: "firstName",
  label: "First Name",
  validation: {
    title: `Needs to start with "wooga.name"`,
    required: true,
    regEx: "^wooga.name.$",
  }
}

const exampleInputData2: IFormTextInputData = {
  id: "2",
  name: "lastName",
  label: "Last Name",
  validation: {
    required: true
  },
}

const exampleInputData3: IFormTextInputData = {
  id: "3",
  name: "city",
  label: "City",
}

const exampleInputData4: IFormTextInputData = {
  id: "4",
  name: "misc",
  label: "Misc",
  defaultValue: "Default value example",
}

const exampleInputDataArray: IFormTextInputData[] = [exampleInputData1, exampleInputData2, exampleInputData3, exampleInputData4];

function App() {
  const onSubmit = (formData: IFormDataObj) => {
    console.log(formData);
  }

  return (
    <div className="App">
      <Form inputFields={exampleInputDataArray} onSubmit={onSubmit}>
        {/* Begun attempt at using children for extendability after learning about the React recommendation of composition */}
        {/* <FormTextInput {...exampleInputData1} onChange={() => console.log('onChange')}></FormTextInput> */}
      </Form>
    </div>
  );
}

export default App;
