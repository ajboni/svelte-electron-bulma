import App from './App.svelte';
import './bulma.scss'
import '@fortawesome/fontawesome-free/js/all.js'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;