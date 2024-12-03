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
10. [Contributing](#contributing)
11. [License](#license)

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
3. Deployment: Netlify(so if you haven't create a new one for free here https://app.netlify.com/signup)

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

Check Docker Version: Open your Command Prompt or PowerShell and run:
docker --version

Enabling WSL 2 (Windows Users)
Enable Windows Subsystem for Linux: Open PowerShell as Administrator and run:
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