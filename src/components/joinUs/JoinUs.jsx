import React from 'react';
import './joinUs.css';

const JoinUs = () => {
  return (
    <div className="section4">
      <div className="started_section">
        <div className="started_heading">
          <p className="topline">Want To Join Us?</p>
          <h3 className="text_heading">Get started in three <br/>easy steps</h3>
          <p>
            Setting up Moodsync is easy. Follow the steps below to get started.
          </p>
        </div>
        <div className="started_grid">
          <div className='grid1'>
            <button className="started_button">1</button>
            <h3>Find the Moodsync app</h3>
            <p>
              Find the Moodsync app in the App Store (for Apple devices) or the Play Store (for Android devices) or you can use the Web app (for Desktop devices). You can search for the app or follow a link to the app's page.
            </p>
          </div>
          <div className='grid2'>
            <button className="started_button">2</button>
            <h3>Install Moodsync app</h3>
            <p>
            Install the app on your device by tapping the 'Install' button and waiting for the download process to complete. Depending on your device and internet connection, this may take a few minutes.
            </p>
          </div>
          <div className='grid3'>
            <button className="started_button">3</button>
            <h3>Register/Log in</h3>
            <p>
            Once the app is installed, launch it and register for a new account or log in to your existing account to access all of the features and benefits of Moodsync.
            </p>
          </div>  
        </div>
        <button className="download_button">Downlod Moodsync App</button>
      </div>
    </div>
  )
}

export default JoinUs;
