# Shipping Label Maker

## Description

This project implements all the features mentioned in the Implementation Details below.
<br />
For login use any username and password. It doesn't store and check it anywhere.
It uses HOC implementation
<br/>
Session maintainance is not implemented so user will logout on refresh
<br />

## Implementation Details

1. Used context for app shipping label maker state maintainance which passes it to wizard.
2. Steps only use useState() hook and lift the state to parent component when changed.
3. State is lifted only on onAction() call in child step
4. Could have the lifted the state to shipping-label-maker-component from wizard on onComplete() call
   but it was mentioned that <b>onComplete() accepts no parameter</b>.
5. So had to use Context.
6. No Redux, RxJS and MobX has been used.

## Libraries used for development

1. CRA for bootstrappin the application
2. Material UI for component development (Takes care of accessibility requirement)
3. Funtional Components using hooks are written
4. Materilize CSS for styling basic components
5. Formik for from creation
6. yup for validation

## Unit tests

1. Tests are writting using jest as test runner with enzyme and react-test-renderer
2. For testing methods of components in unit tests, events are simulated using hidden elements in components instead of calling methods inorder to make tests less brittle.
3. Comments are added for the same
4. This is done to make tests non brittle and keep units tests secluded from each other as much as possible

## Responsiveness

This app is completely responsive and renders fine on all screen sizes (portrait and landscape)

## Start app

### `npm i`

### `npm start`

Runs the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. <br />
You will also see any lint errors in the console.

### `npm test`

Runs all test written in watch mode
