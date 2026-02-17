import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';

	const root = ReactDOM.createRoot(document.getElementById("root"));
	let seconds = 0;

	setInterval(() => {
		seconds++;
		root.render(
    <div className="container">
      <SecondsCounter  seconds={Math.floor((seconds % 10) / 1)} />
      <SecondsCounter  seconds={Math.floor((seconds % 100) / 10)} />
      <SecondsCounter  seconds={Math.floor((seconds % 1000) / 100)} />
      <SecondsCounter  seconds={Math.floor((seconds % 10000) / 1000)} />
      <SecondsCounter  seconds={Math.floor((seconds % 100000) / 10000)} />
      <i class="fa-regular fa-clock number" style={{ alignContent: "center"}}></i>
    </div>
    )
	}, 1000);

