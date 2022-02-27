# Generic Form Component

## Launch application
- npm i
- npm start

## Comments
I went through a few iterations of structuring the data and the code, being somewhat unfamiliar with form elements as well as still undusting and re-learning some React. Towards the end of the allotted time I learned about composition in React and begun on an implementation of it, but did not get far enough to properly include it in the final product.
I'm decently satisfied but have a few improvements I'd like to make and gladly discuss, some being:
- Switch to using composition for extendability
- Enable options of listening for changes to individual fields & the form state as a whole
- Configure when validation should happen (onChange/onSubmit etc)
- Adding FieldSet & Legend for sectioning
- Naturally, some styling

## API Decision Documentation
### FormTextInput
#### id
Enabling clicking on the label to target the input field, accessibility support & differentiating between other inputs
#### name
Used as label and as a key for the data structure sent back on submit
#### defaultValue (*Optional*)
Default value
#### validation (*Optional*)
Was on the fence of going with HTML Validation or custom JS validation.
Chose HTML Validation because of the simplicity of validating towards a regex.
It sacrifices customizability but offers simplicity & robustness.
##### title (*Optional*)
Title to display in the validation message
##### regEx (*Optional*)
Required regEx to match for validation
##### required (*Optional*)
If the field is required for submission