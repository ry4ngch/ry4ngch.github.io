# Personal GitHub Page
![Built with Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-blue?logo=jekyll)
![Theme: Minimal Mistakes](https://img.shields.io/badge/Theme-Minimal%20Mistakes-lightgrey)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github)


# Introduction
This is the repository containing the code for my personal GitHub Page.  

The GitHub Page was created to:
- Showcase my personal projects  
- Share tutorials on **engineering** and **web development**

This site uses the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes).  
Click [**Use this template**](https://github.com/mmistakes/mm-github-pages-starter/generate) for the quickest way to start your own site with the same theme.

[**Visit my live site here**](https://ry4ngch.github.io)

---

## Local Setup
To preview the site locally before pushing changes:
1. Install Ruby and Bundler (if not already installed).
    ```bash
    gem install bundler
    ```
> [!NOTE]
> To check if **bundler** is installed, run the following commands:
> ```bash
> gem list | grep bundler
> ```  

2. Clone this repository:
   ```bash
   git clone https://github.com/ry4ngch/ry4ngch.github.io.git
   cd ry4ngch.github.io
   ```

3. Install dependencies:
    ```bash
    bundle config set --local path 'vendor/bundle'
    bundle install
    ```
> [!NOTE]
> This will install all gems into a local `vendor/bundle` directory.

4. Start the local server:
    ```bash
    bundle exec jekyll serve
    ```
5. Open `http://localhost:4000` in your browser

## Git setup
### Method 1: Using Github Pages (for [safe-listed plugin](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#plugins) only)
1. Go to `Settings -> Pages -> Build and deployment`
2. Set source to `Deploy from a branch`.
3. Set the branch to `master` or`main`.
4. Set the folder to `/(root)`.
5. We can now see **Actions** tabs is building under the workflow **pages-build-deployment** which is the default Github Pages Build.

> [!NOTE]
> Make sure to disable / comment out `jekyll-algolia` in **Gemfile** if using this method, otherwise, github will throw an error below:
> ```text
> The github-pages gem can't satisfy your Gemfile's dependencies. If you want to use a different Jekyll version or need additional dependencies, consider building Jekyll site with GitHub Actions: https://jekyllrb.com/docs/continuous-integration/github-actions/
> ```

### Method 2: Using Github Actions (recommended for custom plugins and jekyll-algolia usage)
1. Add `.github/workflows/deploy.yml`
2. Go to `Repository Settings -> Page` and set the source to **GitHub Actions**.
3. Push a commit from the `main` or `master` branch
4. Watch the build logs under **Actions** for the workflow **Deploy Jekyll site to GitHub Pages**

## Repository Structure

- _posts/ – Blog posts and tutorials
- _pages/ – Static pages like About, Projects, etc.
- _config.yml – Site configuration file
- assets/ – Images, CSS, and JS files
- _layout/ - Layout templates from Minimal Mistakes (not currently used, reserved for future customization)
- _portfolio/ - Portfolio pages (not currently used)
- _sass/ - Theme styling files (not required for remote theme usage, for advanced customization only)

## License

This project uses the [Minimal Mistakes Jekyll theme license](https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE).

Feel free to fork or clone the repository, but please credit the theme author if you reuse the theme.
