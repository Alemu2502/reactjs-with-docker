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
11. [Clean-Up Old Workflows](#clean-up-old-workflows)
12. [Contributing](#contributing)
13. [Contact](#contact)
14. [License](#license)
15. [Conclusion](#conclusion)

# Overview

This project is a personal portfolio built with React.js, showcasing my skills, projects, and experience. The portfolio features a CI/CD pipeline for seamless deployment and updates.

# Features

#### 1. Responsive Design:
 Adapts to different screen sizes for an optimal viewing experience on any device.
#### 2. Interactive Project Showcases: 
Highlight projects with detailed descriptions and visual elements.
#### 3. Contact Form Integration:
 Enables visitors to get in touch easily.
#### 4. Smooth Navigation and Transitions: 
Provides a seamless user experience.
#### 5. Automated CI/CD Pipeline: 
Ensures continuous integration and deployment of updates.

# Technologies Used

1. Frontend: React.js, HTML, CSS, JavaScript, Vite
2. CI/CD: GitHub Actions
3. Deployment: Docker

# Setup and Installation

Prerequisites
1. Node.js and npm installed
2. Git installed
3. Installation Steps

Clone the repository:

git clone https://github.com/Alemu2502/reactjs-portfolio.git

   cd reactjs-portfolio

Install dependencies:

   npm install

# Running the Project

#### Development Mode
  To run the project in development mode:

  npm start

  #### Production Build
  To create a production build: 

   npm run build

# CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment.

 #### The CI/CD pipeline includes steps for:

1. Checking out the code
2. Caching Node modules
3. Setting up Node.js
4. Installing dependencies
5. Running tests (commented out for now)
6. Building the project
7. Deploying to Docker

# Deployment

The frontend is deployed using Docker. The deployment configuration is handled in the GitHub Actions workflow.

# Environment Variables

Frontend (set in Github Secrets): In this project, i utilize several environment variables to 
maintain consistency and manage configurations. These variables include both essential 
service identifiers and social media links. While the social media links are stored in 
the environment file for consistency, they are intended to be publicly accessible. 
If you prefer, you can use them as public values.

#### Here are the environment variables used:

 1. VITE_SERVICE_ID
 2. VITE_TEMPLATE_ID
 3. VITE_USER_ID
 4. VITE_GITHUB
 5. VITE_FACEBOOK
 6. VITE_LINKEDIN
 7. VITE_TWITTER
 8. DOCKER_USERNAME 
 9. DOCKER_PASSWORD 

 so by creating your docker hub account [here](https://hub.docker.com/signup) you can deploy  the docker images to docker hub automatically whenever you push the code to your repo as i used ci/cd pipe lines
  using your docker hub user name and password by stored them in github secrets and you should replace my docker user name alemu2502 to your docker user name in .github/workflows/ci-cd pipelines 

To set these variables in GitHub Secrets, you can navigate to your repository's settings and add them under the "Secrets and variables" section.

# Docker Setup

#### Prerequisites

To use Docker, ensure you meet the following prerequisites:

1. WSL version: WSL 1.1.3.0 or later
2. Operating System:

Windows 11 64-bit: Home or Pro version 22H2 or higher, or Enterprise or Education version 22H2 or higher.

Windows 10 64-bit: Minimum required is Home or Pro 22H2 (build 19045) or higher, or Enterprise or Education 22H2 (build 19045) or higher.

Hardware:

1. 64-bit processor with Second Level Address Translation (SLAT)
2. 4GB system RAM
3. Enable hardware virtualization in BIOS. 

Download Docker Desktop:

Docker Desktop for Windows [here](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)

Docker Desktop for Mac [here](https://desktop.docker.com/mac/stable/Docker.dmg)

Installing Docker Desktop

Follow the installation instructions for your operating system.

Check Docker Version: 
Open your Command Prompt or PowerShell and run:

docker --version

Enabling WSL 2 (Windows Users)
Enable Windows Subsystem for Linux: 
Open PowerShell as Administrator and run:

1. wsl --install
2. sudo apt-get update
3. sudo apt-get upgrade

Enable Virtual Machine Platform:

Still in PowerShell, run:

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

After setting up WSL, install Docker:

sudo apt-get install docker.io

Add User to Docker Group (optional):
If you want to run Docker commands without sudo, add your user to the Docker group:

sudo usermod -aG docker $USER

By creating your Docker Hub account [here](https://hub.docker.com/signup), you can set up automated deployment of Docker images to Docker Hub whenever you push code to your GitHub repository. This process leverages CI/CD pipelines using your Docker Hub username and password stored in GitHub Secrets. Follow these steps:

#### Create a Docker Hub Account:

Sign up for a Docker Hub account [here](https://hub.docker.com/signup).

#### Set Up GitHub Secrets:

Navigate to your GitHub repository.

Go to Settings > Secrets and variables > Actions > New repository secret.

Add the following secrets including all the above environment variabes:

DOCKER_HUB_USERNAME: Your Docker Hub username.

DOCKER_PASSWORD Your Docker Hub password 

#### Contributing:

Since the Docker image is public, you can contribute to the project by opening pull requests (PRs). Here’s how you can do it:

Fork the Repository:

Click the "Fork" button at the top right corner of the repository page to create your own copy of the repo.

Clone Your Fork:

Clone your forked repository to your local machine:

git clone https://github.com/Alemu2502/reactjs-portfolio.git

cd reactjs-portfolio

Create a New Branch:

Create and switch to a new branch for your changes:

git checkout -b feature-branch

Make Your Changes:

Implement your changes or improvements to the codebase.

Commit and Push:

Commit your changes and push the branch to your GitHub repository:

1. git add .
2. git commit -m "Describe your changes"
3. git push origin feature-branch
4. Open a Pull Request:

Go to the original repository and click the "Compare & pull request" button next to your branch.

Provide a clear description of your changes and submit the pull request.

For more information on setting up WSL 2 with Docker Desktop, see WSL Documentation: check [here](https://docs.microsoft.com/en-us/windows/wsl/)

> Note: Docker only supports Docker Desktop on Windows for those versions of Windows that are still within Microsoft’s servicing timeline. Docker Desktop is not supported on server versions of Windows, such as Windows Server 2019 or Windows Server 2022. For more information on how to run containers on Windows Server, see Microsoft's official documentation.

> Important: To run Windows containers, you need Windows 10 or Windows 11 Professional or Enterprise edition. Windows Home or Education editions only allow you to run Linux containers.

# Emailjs Integration

#### Overview

This project utilizes EmailJS to handle the contact form submissions. EmailJS allows you to send emails directly from your JavaScript code without needing a server.

### Why EmailJS?

#### No Server Required: 
EmailJS provides a serverless solution to send emails from your client-side application.

#### Easy Setup:
 With minimal configuration, you can integrate EmailJS and start sending emails.

#### Secure: 
EmailJS handles the email sending process securely, so you don't need to expose your SMTP credentials.

#### Setup and Integration
Follow these steps to integrate EmailJS with your contact form:

#### Create an Account: 
If you don't have an EmailJS account, sign up [here](https://dashboard.emailjs.com/sign-up)

#### Create a New Email Service:

After logging in, go to the Email Services section and create a new email service.

Add your email provider (e.g., Gmail, Outlook) and connect it.

#### Create an Email Template:
 
Navigate to the Email Templates section and create a new template.

Define the template parameters and structure (e.g., subject, body).

Get Your User ID(public key), Service ID, and Template ID:

Go to the Integration section and copy your User ID.

Note down your Service ID and Template ID from the Email Services and Templates sections, respectively.

so after that Add these Environment Variables to github secrets.

#### Testing

Local Testing: 
Run your project locally and test the contact form to ensure it sends emails correctly.

##### Deployed Testing: 

After deploying your project (e.g., on Docker hub), test the contact form again to ensure it works in the live environment.

# Clean-Up Old Workflows 

To maintain a clean and manageable CI/CD history, i implement a periodic clean-up process. This process involves: 
#### 1. Scheduled Clean-Up:
 Every month, old workflows that have been resolved and documented are deleted. This helps keep the workflow history clean and efficient. 
 #### 2. Automated Clean-Up: 
 I use a GitHub Actions workflow to automate the clean-up process. The workflow runs every month and deletes old workflows. The clean-up workflow found [here](.github/workflows/cleanup.yml). 
 #### 3. Archiving: 
 Significant issues and their resolutions are documented and archived before deletion. By following these best practices, we ensure that our CI/CD pipeline remains efficient and clutter-free. If you have any suggestions or improvements, feel free to open a pull request or contact me. 

but fisrt you should Checking and Updating GitHub Token Permissions
To ensure your GitHub Actions workflow can run correctly, follow these steps to check and update the GITHUB_TOKEN permissions:

Steps to Check and Update GITHUB_TOKEN Permissions:

Navigate to Your Repository Settings:

1. Go to your GitHub repository.
2. Click on the "Settings" tab.
3. Access Actions Settings:

In the left sidebar, scroll down to find and click on "Actions".

1. General Settings:
2. Under the "Actions" section, click on "General".

##### Update Workflow Permissions:

Look for the "Workflow permissions" section.

Ensure that the "Read and write permissions" option is selected. This setting allows the GITHUB_TOKEN to perform read and write operations, such as deleting workflow runs.

You should replace my GitHub username and repository with yours in .github/workflows/cleanup.yml.

# Contributing

Feel free to contribute to this project by creating a pull request or opening an issue.

# Contact
For any questions, suggestions, or collaboration opportunities, feel free to connect with me through the following channels:

Email: alemu4617@gmail.com

Portfolio: https://my-react-app-o8w4.onrender.com/  - Explore my projects and learn more about my work.

Docker Hub: https://hub.docker.com/repository/docker/alemu2502/my-react-docker-app - Access the Docker images for this project.

LinkedIn:   https://www.linkedin.com/in/Alemu2502 - Connect with me professionally.

Facebook: https://www.facebook.com/alemu.molla.1806 

Twitter: https://twitter.com/ALEXSEPPRO
  - Follow me for updates and insights.

# License

 #### MIT License

##### © 2024 Alemu2502

Permission is granted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.


# Conclusion

Thank you for exploring my React.jsPortfolio project! This project showcases my skills and experience with modern web development technologies, including React.js, Docker, and CI/CD pipelines. By providing a clear structure and comprehensive documentation, I aim to make it easy for others to understand, use, and contribute to the project.

Whether you are setting up your own environment, contributing through pull requests, or deploying the project to Docker Hub, I hope you find this project useful and inspiring. Your feedback and contributions are highly valued and can help improve this project further.

Feel free to connect with me through the provided social media links for any questions, suggestions, or collaboration opportunities.