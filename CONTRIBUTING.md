# Contributing Guidelines

## Adding Websites

1. Fork this repository
2. Navigate to `./src/directory/` and add your site as a **new** `*.md` file. Use existing sites as a reference in terms of required information
3. _Optional_: Add your own web button (88x31) in `./src/static/img/directory`; reference your button in your `*.md` file using its **filename** for the `button` front matter property
4. Open a pull request for your changes

### Front Matter Data

Add your website's data in your `*.md` file using the following properties:

- `title`: Name your website / _required_
- `url`: Your website's URL / _required_
- `author`: Name yourself / optional
- `button`: File name of a button for your listing / optional

## Development

1. Fork this repository
2. Use `npm install` on your machine
3. Use `npm run serve` to start a local web server at `localhost:8080`
4. Make changes
5. Test your changes
6. If you added a site to the directory: make sure that `./src/_data/info.json` was updated and include it in your commit; otherwise, restart the dev server (see #3) or run `npm run info` manually before committing your changes
7. Open a pull request with your changes
