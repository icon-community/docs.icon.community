<img src="/public/images/icon-documentation-over-white.svg" width="400">

[![Discord](https://img.shields.io/discord/880651922682560582?logo=discord)](https://discord.gg/b5QvCXJjJM)
[![Twitter Follow](https://img.shields.io/twitter/follow/poweredbyicx?style=social)](https://twitter.com/poweredbyicx)
[![Website](https://img.shields.io/badge/Website-docs.icon.community-blue)](https://www.docs.icon.community)

[![Issues](https://img.shields.io/github/issues/icon-community/docs.icon.community)](https://github.com/icon-community/docs.icon.community/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/icon-community/docs.icon.community)](https://github.com/icon-community/docs.icon.community/pulls)

# Welcome 

Welcome to the official documentation site for ICON! 

**ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use general message passing standard and connections to secure bridging protocols**

This documentation serves as a comprehensive guide to using and understanding all aspects of ICON, from setup to advanced features. Whether you're a new user starting your journey or an experienced professional seeking to delve deeper, we've got you covered. We continuously work towards making our documentation as clear and detailed as possible, so you can leverage the full power of ICON. 

Thank you for choosing ICON, and we hope this documentation aids you in making the most of our interface.

## Running docs.icon.community locally with command line

Before you start, ensure that Git and Node.js are installed on your local machine.

Follow these steps to run the project locally:

1. **Fork the Repository**: Navigate to the `docs.icon.community` repository on GitHub. Click the 'Fork' button in the upper right corner of the repository page to create a copy of the repository in your own GitHub account.
2. **Clone the Repository**: Open a terminal on your computer. Clone the repository to your local machine using the `git clone` command, like this:
```git clone https://github.com/<yourusername>/docs.icon.community.git```
3. **Navigate to the Repository**: Use the `cd` command to navigate into the cloned repository:
```cd docs.icon.community```
4. **Install Dependencies**: This project relies on Node.js and has dependencies that need to be installed. Use npm (Node Package Manager) to install these dependencies:
```npm install```
5. **Run the Project Locally**: You can now run the project on your machine. The command to run the project is:
```npm run dev```

## Running docs.icon.community locally with VSCode

Before you start, ensure that Git and Node.js are installed on your local machine, and you have Visual Studio Code (VSCode) set up.

Follow these steps to run the project locally:

1. **Fork the Repository**: Navigate to the `docs.icon.community` repository on GitHub. Click the 'Fork' button in the upper right corner of the repository page to create a copy of the repository in your own GitHub account.
2. **Clone the Repository**: Open VSCode, then open the Terminal (View > Terminal). Clone the repository to your local machine using the `git clone` command, like this:
```git clone https://github.com/<yourusername>/docs.icon.community.git```
Replace `<yourusername>` with your GitHub username.
3. **Navigate to the Repository**: Use the `cd` command in the terminal to navigate into the cloned repository:
```cd docs.icon.community```
4. **Install Dependencies**: This project relies on Node.js and has dependencies that need to be installed. Use npm (Node Package Manager) to install these dependencies:
```npm install```
5. **Run the Project Locally**: You can now run the project on your machine. The command to run the project is:
```npm run dev```

## How to contribute to docs.icon.community

Each documentation pages offers an opportunity for visitors to provide feedback, ask questions or contribute directly. Look for:

* *Feedback or questions about this page? Post them here →*
* *Contribute directly to this page →*

### Pages
Pages are written in MDX, a markup language that is a blend of Markdown and JSX. In MDX, you can write standard Markdown as you usually would, but you also have the ability to import and use React components within your content.

The title and order of a page shown in the sidebar should be configured in the _meta.json file as key-value pairs. For example, if you have the following file structure:

> Folder: Pages
> * _meta.json
> * about.mdx
> * contact.mdx
> * index.mdx

You can define how the pages are shown in the sidebar via the _meta.json file:

```
_meta.json
{
  "index": "My Homepage",
  "contact": "Contact Us",
  "about": "About Us"
}
```

If any routes are not listed in the _meta.json file, they will be appended to the end of the sidebar and sorted alphabetically, and the title will be formatted with UpperCamelCase

### Folders
Folders can be configured in the same way as pages. For example:

> Folder: Pages
> > Folder: Fruits
> > * _meta.json
> > * apple.mdx
> > * banana.mdx
> * _meta.json
> * about.mdx
> * contact.mdx
> * index.mdx

The top-level _meta.json file contains the meta information for the top-level pages and folders:

```
pages/_meta.json
{
  "index": "My Homepage",
  "contact": "Contact Us",
  "fruits": "Delicious Fruits",
  "about": "About Us"
}
```

And the nested _meta.json file contains the meta information for pages in the same folder:

```
pages/fruits/_meta.json
{
  "apple": "Apple",
  "banana": "Banana"
}
```

This way, information for pages are grouped together in directories. You can move directories around without having to change the _meta.json file.

### Nextra Docs Theme
This website is built with the Nextra Docs Theme. For further information on the documentation page and folder configuration visit [Nextra Docs Theme](https://nextra.site/docs/docs-theme) 

---

If you have any questions, please reach out to us on [Discord](https://icon.community/icondiscord/).


