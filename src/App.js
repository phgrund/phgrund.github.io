import React from 'react';

import './App.css';
import Profile from './components/Profile';
import SocialWrapper from './components/SocialWrapper';
import Footer from './components/Footer';

const App = () => {
  const calculateAge = () => {
    const dif = Date.now() - new Date('2000-02-28T14:14:00Z').getTime();

    return new Date(dif).getUTCFullYear() - 1970;
  }
  
  return (
    <div className="App">
      <div className="container">
        <aside>
          <Profile />
          <SocialWrapper />
        </aside>
        <main>
          <section>
            <h1>About me</h1>
            <p>
              Hello, my name is Paulo Henrique. I'm { calculateAge() } years old. I'm a Computer Science Student in the 5th semester.
            </p>
            <p>
              I've always been a technology enthusiast, since I was just a child.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
