import './App.css';

function App() {
  return (
    <div className="App">
<div className="g-signin2" data-onsuccess="onSignIn"></div>

	 <form id='put-email'>
		 <input type='text' />
		 <input type='submit' />
	 </form>

    </div>
  );
}
function onSignIn(googleUser) {
	console.log('hello')
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}



export default App;
