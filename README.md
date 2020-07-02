<a href="https://github.com/thenaim/ion-tk-social-network">
  <p align="center">
    <img src="https://i.imgur.com/Abfa3cV.png">
  </p>
</a>

<h2 align="center">
  <a href="https://github.com/thenaim/ion-tk-social-network/releases">
    <img src="https://flat.badgen.net/github/release/thenaim/ion-tk-social-network">
  </a>
  <a href="https://github.com/thenaim/ion-tk-social-network/commits/master">
    <img src="https://flat.badgen.net/github/last-commit/thenaim/ion-tk-social-network">
  </a>
  <a href="https://github.com/thenaim/ion-tk-social-network/blob/master/LICENSE">
    <img src="https://flat.badgen.net/github/license/thenaim/ion-tk-social-network">
  </a>
</h2>

# Getting started

```bash
git clone https://github.com/thenaim/ion-tk-social-network myApp
cd myApp

# Android
ionic cordova run android

# iOS
ionic cordova run ios
```

# Features

- Lazy-loading
- Auth pages (login, register, forgot and reset)
- Themes (default and dark)
- Ngrx
- LocalStorage
- i18n (English and Russion)
- Responsive design

#### Feature Status:

| Tabs                 | Status                                              | Source Code                                      | Issue          |
|----------------------|-----------------------------------------------------|--------------------------------------------------|----------------|
| News/Discover (tab1) |                                           Available | [news.ts](src/app/tabs/news)                     |              - |
| Explore (tab2)       |                                           Available | [explore.ts](src/app/tabs/explore)               |              - |
| Messages (tab3)      |                                           Available | [message.ts](src/app/tabs/message)               |              - |
| Notification (tab4)  |                 Available, but needs to be modified | [notification.ts](src/app/tabs/notification)     |              - |
| Profile (tab5)       |                 Available, but needs to be modified | [profile.ts](src/app/tabs/profile)               |              - |

| Pages           | Status                                    | Source Code                                                     | Issue          |
|-----------------|-------------------------------------------|-----------------------------------------------------------------|----------------|
| Login           |                                 Available | [login.ts](src/app/pages/auth/login)                            |              - |
| Register        |                                 Available | [register.ts](src/app/pages/auth/register)                      |              - |
| Forgot          |                                 Available | [forgot.ts](src/app/pages/auth/forgot)                          |              - |
| Reset           |       Available, but needs to be modified | [reset.ts](src/app/pages/auth/reset)                            |              - |
| Music           |                                 Available | [music.ts](src/app/pages/settings)                              |              - |
| Music modal     |                                 Available | [music-player.ts](src/app/pages/shared/music-player)            |              - |
| Settings        |                                 Available | [settings.ts](src/app/pages/music)                              |              - |
| About           |       Available, but needs to be modified | [about.ts](src/app/pages/settings/about)                        |              - |
| Account         |       Available, but needs to be modified | [account.ts](src/app/pages/settings/account)                    |              - |
| Appearance      |                                 Available | [appearance.ts](src/app/pages/settings/appearance)              |              - |
| Balance         |       Available, but needs to be modified | [balance.ts](src/app/pages/settings/balance)                    |              - |
| Blocked         |       Available, but needs to be modified | [blocked.ts](src/app/pages/settings/blocked)                    |              - |
| General         |       Available, but needs to be modified | [general.ts](src/app/pages/settings/general)                    |              - |
| Notifications   |       Available, but needs to be modified | [notifications.ts](src/app/pages/settings/notifications)        |              - |
| Privacy         |                                 Available | [privacy.ts](src/app/pages/settings/privacy)                    |              - |
| Security        |       Available, but needs to be modified | [about.ts](src/app/pages/settings/about)                        |              - |
| Subscriptions   |       Available, but needs to be modified | [subscriptions.ts](src/app/pages/settings/subscriptions)        |              - |
| About           |       Available, but needs to be modified | [about.ts](src/app/pages/settings/about)                        |              - |

| Native Plugins          | Status                                              | Source Code                                   | Issue          |
|-------------------------|-----------------------------------------------------|-----------------------------------------------|----------------|
| Camera preview          |                                           Available | [app.component.ts](src/app/app.component.ts)  |              - |
| Push notifications      |                                         Not started |                                             - |              - |
| Touch ID                |                                         Not started |                                             - |              - |
| Native Keyboard         |                                         Not started |                                             - |              - |
| Media                   |                                         Not started |                                             - |              - |
| In App Browser          |                                         Not started |                                             - |              - |
| File                    |                                         Not started |                                             - |              - |
| Device                  |                                         Not started |                                             - |              - |
| Geolocation             |                                         Not started |                                             - |              - |
| Image Picker            |                                         Not started |                                             - |              - |
| ...                     |                                                 ... |                                           ... |            ... |

# Preview

[YOUTUBE DEMO](https://www.youtube.com/watch?v=GCs2TVZkC_U) or [DEMO GIF AND SCREENSHOTS](https://github.com/thenaim/ion-tk-social-network/blob/master/PREVIEW.md)

| Light  | Dark  |
| -----------------| -----|
| ![Light](https://i.imgur.com/XKCKrT8.png) | ![Dark](https://i.imgur.com/HT3ko7i.png) |

## Supporting platforms

In pursuit of [adaptive styling](https://ionicframework.com/docs/core-concepts/fundamentals#adaptive-styling), Ionic fully supports and is well tested on the mobile platforms listed below:

| Platform | Version |
| - | - |
| **Android** | 5.0+ |
| **iOS** | 11.0+ |

See [Ionic Docs](https://ionicframework.com/docs/reference/browser-support) for more information.

## Contributors

Want to start contributing to open source with ionic? Leave your mark and join the growing team of contributors!

Get started by checking out list of open [issues](https://github.com/thenaim/ion-tk-social-network/issues) and reading [Contributor Guide](https://github.com/thenaim/ion-tk-social-network/blob/master/CONTRIBUTING.md)

## License

License MIT (see the [LICENSE](https://github.com/thenaim/ion-tk-social-network/blob/master/LICENSE) file for the full text)
