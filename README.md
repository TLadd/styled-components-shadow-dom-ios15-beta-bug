This repository serves as a reproduction for an issue I ran into involving the ios/safari 15 beta (currently version 4), styled-components, and Shadow DOM. 

The app involves a div and a button, both rendered in a shadow root and using styled-components. The div is red and has fixed positioning towards the bottom right hand corner of the app. The button applies a random `transform: translateY` offset between -1 and -100 to the div. Whenever everything is working, it looks like this (taken on desktop Chrome):

https://user-images.githubusercontent.com/5084492/128089740-9921d8a2-3e36-43b8-bad1-10ac95b76567.mov

It behaves correctly like this almost everywhere. 

On an iphone with the ios 15 version 4 beta, however, it does not. Upon clicking the button, a new class name is generated due to the different offset. However, the associated styles never get attached to the element as show in the video below of the dev tools. The div simply disappears because all styles are lost.

https://user-images.githubusercontent.com/5084492/128090352-0cbfb5cc-a0b0-4853-ba6a-30e70ce56581.mp4

https://user-images.githubusercontent.com/5084492/128090375-154e3cf7-f73f-4b04-ad30-62fef01807e9.mov

Couple of details:

- This only happens if styled-components is using the speedy mode (is on by default in production) that injects styles directly into the CSS OM. Hence, REACT_APP_SC_DISABLE_SPEEDY=false is set in the .env file of this repository so it can be replicated in development mode. If REACT_APP_SC_DISABLE_SPEEDY is set to true and the styles are added to a styled tag in the DOM as opposed to the CSS OM, everything functions normally.
- This only happens when rendering into the shadow DOM. An additional environment variable REACT_APP_RENDER_IN_SHADOW_DOM is set to true in the .env file of this repository. If it is set to false, everything functions normally.

## Running the Project

- yarn install
- yarn start
