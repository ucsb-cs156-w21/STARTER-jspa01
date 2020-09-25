# React Rational Calculator

This is the code for the React Rational Calculator lab.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The `README.md` file that was created by Create React App is here: [./docs/CreateReactApp-README.md](./docs/CreateReactApp-README.md)

# Setting up Code Coverage

The directory `.github/workflows` contains GitHub Actions that can be used to
* Run the test cases for this app
* Check code coverage of this app
* Publish those reports to the website <https://codecov.io> under your GitHub id.

To set this up:
* Login to <https://codecov.io> with you GitHub id.
* Visit the page <https://codecov.io/gh/ucsb-cs156-f20/REPO-NAME-HERE> except change `REPO-NAME-HERE`
  to the name of this repository.

  The `ucsb-cs156-f20` should be kept the same, assuming that you created the repo under
  the class organization.  If, instead, you created it under your own github id, you'll
  need to visit 
  <https://codecov.io/gh/YOUR-GITHUB-ID/REPO-NAME-HERE> instead.

* On that page, there should be a so-called *download-token* value, a series of letters and numbers
  like a very long password.   You'll need to copy/paste that value, so keep that window open.

* Visit your repo, go to the Settings tab for the repo (not the Settings tab for your GitHub account)
  and then find `Secrets` in the left navigation, and click on it.

  Or, equivalently, visit the URL <https://github.com/ucsb-cs156-f20/YOUR-REPO-NAME-HERE/settings/secrets>

* You should see a `New Secret` button at the upper right.  Click on this, and add a new secret
  called `CODECOV_TOKEN` (must be all uppercase, with underscore).   The value of the secret
  will be the one you found on the `codecov.io` page.

  Adding this token gives your GitHub Action the permission it needs to upload
  code coverage results to <https://codecov.io>.

  If your repo is private, the code coverage results will be also; note that if your
  repo is part of the class organization, then the course staff will also have access
  to your code coverage results, but fellow class members won't (at least not by default.)
  
* To see your code coverage results on <https://codecov.io>, you need to trigger GitHub
  actions to run, either with a push to a branch, or a Pull Request.  Then, by visiting
  the URL <https://codecov.io/gh/YOUR-GITHUB-ID/REPO-NAME-HERE> you should be able to
  see your code coverage results.

