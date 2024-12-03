Table of Contents
1. [Overview](#overview) 
2. [Features](#features) 
3. [Technologies Used](#technologies-used) 
4. [Setup and Installation](#setup-and-installation)
5. [Running the Project](#running-the-project) 
6. [CI/CD Pipeline](#cicd-pipeline) 
7. [Deployment](#deployment) 
8. [Environment Variables](#environment-variables)
9. [Docker Setup](#docker-setup) 
10. [Emailjs Integration](#emailjs-integration) 
11. [Contributing](#contributing)
12. [License](#license)

### Overview

This project is a personal portfolio built with React.js, showcasing my skills, projects, and experience. The portfolio features a CI/CD pipeline for seamless deployment and updates.

### Features

1. Responsive Design: Adapts to different screen sizes for an optimal viewing experience on any device.
2. Interactive Project Showcases: Highlight projects with detailed descriptions and visual elements.
3. Contact Form Integration: Enables visitors to get in touch easily.
4. Smooth Navigation and Transitions: Provides a seamless user experience.
5. Automated CI/CD Pipeline: Ensures continuous integration and deployment of updates.

### Technologies Used

1. Frontend: React.js, HTML, CSS, bootstrap, JavaScript
2. CI/CD: GitHub Actions
3. Deployment: Netlify(The frontend of this project is deployed using Netlify. If you haven't created a Netlify account yet, you can sign up for free here. https://app.netlify.com/signup)

### Setup and Installation

Prerequisites
1. Node.js and npm installed
2. Git installed
3. Installation Steps

Clone the repository:

git clone https://github.com/Alemu2502/reactjs-portfolio.git

cd reactjs-portfolio

Install dependencies:

npm install

### Running the Project

Development Mode
To run the project in development mode:

npm start

Production Build
To create a production build: 

npm run build

### CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment.

 # The CI/CD pipeline includes steps for:

1. Checking out the code
2. Caching Node modules
3. Setting up Node.js
4. Installing dependencies
5. Running tests (commented out for now)
6. Building the project
7. Deploying to Netlify

### Deployment

The frontend is deployed using Netlify. The deployment configuration is handled in the GitHub Actions workflow.

### Environment Variables

Frontend (set in Netlify): In this project, i utilize several environment variables to 
maintain consistency and manage configurations. These variables include both essential 
service identifiers and social media links. While the social media links are stored in 
the environment file for consistency, they are intended to be publicly accessible. 
If you prefer, you can use them as public values.

Here are the environment variables used:

 VITE_SERVICE_ID
 VITE_TEMPLATE_ID
 VITE_USER_ID
 VITE_GITHUB
 VITE_FACEBOOK
 VITE_LINKEDIN
 VITE_TWITTER

To set these variables in Netlify, you can navigate to the site's settings and add them under the "Build & Deploy" section.

### Docker Setup

Prerequisites

To use Docker, ensure you meet the following prerequisites:

1. WSL version: WSL 1.1.3.0 or later
2. Operating System:

Windows 11 64-bit: Home or Pro version 22H2 or higher, or Enterprise or Education version 22H2 or higher.
Windows 10 64-bit: Minimum required is Home or Pro 22H2 (build 19045) or higher, or Enterprise or Education 22H2 (build 19045) or higher.

Hardware:

1. 64-bit processor with Second Level Address Translation (SLAT)
2. 4GB system RAM
3. Enable hardware virtualization in BIOS. For more information, see Virtualization.

Download Docker Desktop:

Docker Desktop for Windows: https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe

Docker Desktop for Mac: https://desktop.docker.com/mac/stable/Docker.dmg

Installing Docker Desktop

Follow the installation instructions for your operating system.

Check Docker Version: 
Open your Command Prompt or PowerShell and run:

docker --version

Enabling WSL 2 (Windows Users)
Enable Windows Subsystem for Linux: 
Open PowerShell as Administrator and run:

wsl --install
sudo apt-get update
sudo apt-get upgrade

Enable Virtual Machine Platform:

Still in PowerShell, run:

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
Install Docker in WSL:

After setting up WSL, install Docker:
sudo apt-get install docker.io

Add User to Docker Group (optional):
If you want to run Docker commands without sudo, add your user to the Docker group:

sudo usermod -aG docker $USER

For more information on setting up WSL 2 with Docker Desktop, see WSL Documentation: https://docs.microsoft.com/en-us/windows/wsl/

> Note: Docker only supports Docker Desktop on Windows for those versions of Windows that are still within Microsoft’s servicing timeline. Docker Desktop is not supported on server versions of Windows, such as Windows Server 2019 or Windows Server 2022. For more information on how to run containers on Windows Server, see Microsoft's official documentation.

> Important: To run Windows containers, you need Windows 10 or Windows 11 Professional or Enterprise edition. Windows Home or Education editions only allow you to run Linux containers.

### Emailjs Integration

EmailJS Integration

Overview

This project utilizes EmailJS to handle the contact form submissions. EmailJS allows you to send emails directly from your JavaScript code without needing a server.

Why EmailJS?

No Server Required: 
EmailJS provides a serverless solution to send emails from your client-side application.

Easy Setup:
 With minimal configuration, you can integrate EmailJS and start sending emails.

Secure: 
EmailJS handles the email sending process securely, so you don't need to expose your SMTP credentials.

Setup and Integration
Follow these steps to integrate EmailJS with your contact form:

Create an Account: If you don't have an EmailJS account, sign up here. https://dashboard.emailjs.com/sign-up

Create a New Email Service:

After logging in, go to the Email Services section and create a new email service.

Add your email provider (e.g., Gmail, Outlook) and connect it.

Create an Email Template:

Navigate to the Email Templates section and create a new template.

Define the template parameters and structure (e.g., subject, body).

Get Your User ID(public key), Service ID, and Template ID:

Go to the Integration section and copy your User ID.

Note down your Service ID and Template ID from the Email Services and Templates sections, respectively.

Add Environment Variables:

Set the following environment variables in your project (e.g., in Netlify's Build & Deploy settings):

plaintext

 VITE_SERVICE_ID=your_service_id
 VITE_TEMPLATE_ID=your_template_id
 VITE_USER_ID=your_user_id

and add all your social media links here if you prefer
 Install EmailJS in Your Project:

 Install the EmailJS SDK:

 npm install emailjs-com

 Implement the Contact Form:

 In your contact form component, import and configure EmailJS:

javascript
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
};

<form onSubmit={sendEmail}>
  <!-- Your form fields here -->
  <input type="submit" value="Send" />
</form>

Testing

Local Testing: 
Run your project locally and test the contact form to ensure it sends emails correctly.

Deployed Testing: 

After deploying your project (e.g., on Netlify), test the contact form again to ensure it works in the live environment.

### Contributing

Feel free to contribute to this project by creating a pull request or opening an issue.

### License

 MIT License

Copyright (c) 2024 Alemu2502

Permission is hereby granted, free of charge, to any person obtaining a copy of this
 software and associated documentation files (the "Software"), to deal in the Software 
 without restriction, including without limitation the rights to use, copy, modify, 
 merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
 permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.