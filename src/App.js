import DestinationSearch from './components/DestinationSearch'

import DestinationItem from './components/DestinationItem'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App

/*
In this project, let's build a Destination Search app by applying the concepts we have learned till now.

Refer to the image below:

destination search output

Design Files
Click to view
Set Up Instructions
Click to view
Completion Instructions
Functionality to be added

The app must have the following functionalities

Initially, all destinations in the destinationsList should be displayed
When a value is provided in the search input, only the destinations whose names contain the value provided in the search input should be displayed irrespective of the case
The DestinationSearch component receives the destinationsList as a prop. It consists of a list of destination objects with the following properties in each destination object

Key	Data Type
id	Number
name	String
imgUrl	String
Components Structure

destination search component structure

Implementation Files

Use these files to complete the implementation:

src/components/DestinationSearch/index.js
src/components/DestinationSearch/index.css
src/components/DestinationItem/index.js
src/components/DestinationItem/index.css
Important Note
Click to view

The following instructions are required for the tests to pass

The search for the destination should be case insensitive. You can use the toLowerCase method to convert a string into lower case letters.

JAVASCRIPT
Each DestinationItem should have an HTML image element with alt attribute value as the value of the key name in destinationsList

Resources
Image URLs
https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png alt should be search icon
Colors

Hex: #252627
Hex: #0f172a
Hex: #f1f5f9
Hex: #000000
Font-families
Things to Keep in Mind
All components you implement should go in the src/components directory.
Don't change the component folder names as those are the files being imported into the tests.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.


*/
