Steps to Deploy a React App on Netlify using GitHub  
Step 1: Create a React Application
Step 2: Install the Required Dependencies 
Step 3: Create a Build directory
Step 4: Create a GitHub repository
Step 5: Setting up Netlify

Follow these steps further: 

    Go to the ‘Sites’ section from the header of the Netlify website’s dashboard. 
    Now, click on ‘Add new site’.
    Select ‘import an existing project‘, This will redirect you to a page where it will ask you to connect a Git provider. 
    Select your Git provider, if our things are the same so far, choose GitHub. 
    This will take you to a page, where all your GitHub repositories are listed.
    Choose your project repository.
    Now, there will be some settings,
       a) Do not change the pre-filled details.
       b) Leave the Base Directory empty.
       c) In the Build Command, type “npm run build“.
       d) In the Publish Directory, type “build“.
    And, finally, click on the Deploy site.
    It’ll redirect you to the deployment page, you can check the logs here, and see how things are working step by step.
    If the deployment fails for some reason, you’ll get the error message. Remove the error and try deploying it again. 

By the time, The react app is deployed. Once the deployment gets completed, you get a public URL for your project with the domain ‘netlify.com‘. 
