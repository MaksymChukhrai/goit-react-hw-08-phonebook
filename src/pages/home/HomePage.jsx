import React from "react";

const HomePage = () => {
    return (
 
        <div className="section_home">
            <div className="title_home">
            <h1 className="slogan_home">Hello there! <br/>Welcome to Phonebook app. <br/>It's here to help you manage your contacts easily and securely.</h1>
            <a href="/register"> <button type="button" className="homepage_btn">Register Now</button>
            </a>
            </div>
          <footer className="footer_home">
            <div>
                <h5 className="author">Created by <span><a href="https://www.linkedin.com/in/maksym-chukhrai/"target="_blank" rel="noopener noreferrer">Maksym Chukhrai</a></span></h5>
            </div>
            </footer>
        </div>
     
    );
}

export default HomePage;