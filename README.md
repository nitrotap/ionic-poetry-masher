# ionic-poetry-masher

## Description

Randomize your poetry lines to make the best stanzas, using Ionic Capacitor for cross-platform development. Drag and drop your lines and save stanzas to your mobile device or browser.

![badmath](https://img.shields.io/github/languages/top/nitrotap/ionic-poetry-masher)
![badmath](https://img.shields.io/github/issues/nitrotap/ionic-poetry-masher)
![badmath](https://img.shields.io/github/forks/nitrotap/ionic-poetry-masher)  
![badmath](https://img.shields.io/github/stars/nitrotap/ionic-poetry-masher)

## Table of Contents

- [Beta Testers](#Beta-Testers)
- [Installation](#Installation)
- [Usage](#Usage)
- [Questions](#Questions)
- [License](#License)

## Beta Testers

Hello! We're looking for beta testers. If you're a poetry lover or enjoy playing with words, this app is for you! Join our beta testing program and help us refine this unique Ionic app that lets you mash up your poetry lines to create your own poetic masterpieces. Be part of our creative journey and provide valuable feedback to shape the final product. Email me at [kartikinpublic@gmail.com](kartikinpublic@gmail.com) to sign up now and become a beta tester and experience the magic of poetic mashing with us! #BetaTestersWanted #PoetryMasher #IonicApp

## Installation

`npm install`

## Usage

```
ionic serve
ionic build
ionic cap add android
ionic cap open android (requires Android Studio)
ionic cap add ios
ionic cap open ios (requires Xcode and macOS)
ionic cap sync
```

### Extra build steps

#### Build list for android

```
ionic build
// delete android folder
ionic cap add android
ionic cap sync android
ionic cap open android
```

add src/app/etc/local.properties file to /android folder

add permissions to android/AndroidManifest.xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

update versionCode and versionName in android/app/build.gradle and then sync grade files

## LAMP Deployments

add .htaccess file to htdocs folder in src/app/etc/.htaccess

## Questions

Please reach out to me on [GitHub](https://github.com/nitrotap) or by email at kartikinpublic@gmail.com for any additional questions.

## License

None
