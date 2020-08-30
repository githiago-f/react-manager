# react-manager

This project is based on [Electron](https://github.com/electron/electron), 
and creates a Tray Icon that helps you with management of react projects and creation of applications with
create-react-app.

## Running this application
This application uses [Yarn](https://github.com/yarnpkg/yarn) as it's dependency manager, so
you can run `yarn dev` and `yarn start` or even `npm start` for running this application.

## Building this application
This application is builded with [electron-builder](https://github.com/electron-userland/electron-builder).

## Contributing
Windows 10 users can just run `yarn dist` and it will generate a installer.

If you do use another OS, just access the `electron-builder`, add to `package.json` the configuration, test
and open a PR with your changes so other people can just run it in their computers.
