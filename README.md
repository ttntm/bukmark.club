<p align="center">
  <img src="./src/static/img/splash.png" alt="BUKMARK.CLUB">
</p>

# BUKMARK.CLUB

The BUKMARK.CLUB is a directory of websites from across the Internet.

To be eligible for a listing in this directory, a website must have a curated collection of bookmarks and/or links to other websites.

**Deploy Status**: 

[![Netlify Status](https://api.netlify.com/api/v1/badges/15fd7e73-4ae4-453b-9436-b8d231ab1054/deploy-status)](https://app.netlify.com/sites/bukmarkclub/deploys)

## Adding Your Website

1. Fork this repository
2. Navigate to `./src/directory/` and add your site as a **new** `*.md` file; increment the 4-digit index number by 1 and use existing sites as a reference for file naming
3. _Optional_: Add your own web button (88x31) in `./src/static/img/directory`; reference your button in your `*.md` file using its **filename** for the `button` front matter property
4. Open a pull request for your changes

### Front Matter Data

Add your website's data in your `*.md` file using the following properties:

- `title`: Name your website / _required_
- `url`: Your website's URL / _required_
- `author`: Name yourself / optional
- `button`: File name of a button for your listing / optional

### Other Ways to Add Your Website

- [Open an issue](https://github.com/ttntm/bukmark.club/issues) in this repository
- Email `webmaster[at]bukmark[dot]club` and include all necessary information

## Contributing Guidelines

see [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

GPL-3.0; see [LICENSE](./LICENSE)
