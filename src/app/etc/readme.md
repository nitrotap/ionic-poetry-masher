# TODO on new build / deploy

## Build list for android

```
ionic build
// delete android folder
ionic cap add android
ionic cap open android
```

add local.properties file to /android folder

add permissions to android/AndroidManifest.xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

update versionCode and versionName in android/app/build.gradle and sync grade files

## DEPLOY LIST for LAMP

add .htaccess file to htdocs folder
