import React from 'react';
import Header from './header';
import Footer from './footer';

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Страница контактов</h1>
                <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis iure? Unde nihil officiis a eum veritatis quidem harum, reprehenderit temporibus ut necessitatibus, error mollitia voluptatibus aut! Cumque, voluptates architecto.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default ContactUs;