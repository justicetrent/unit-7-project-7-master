# unit-7-project-7-master-2.0
 React Gallery App
Create yahoo account/use tumblr account to sign in.
Apply for a non-commercial API key.
You’ll need to set up a config.js file in your project that imports your API key into your application so that you and other users can request data from the Flickr API. This should be imported into src/App.js.
The config.js file should look something like this:
const apiKey = 'YOUR API KEY';
export default apiKey;
Import your API key into your application, preferably into src/App.js, and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once.
Important Note: This config.js file must be listed in the .gitignore file so it won’t be committed to your github repository. This will prevent your keys and tokens from getting posted publicly to GitHub. It is very important that you do NOT upload any of your personal API keys / secrets / passwords to Github or other publicly accessible place. When you submit this project for grading, your project reviewer will create their own config.js file and use their own API key to run the project.
