<a href="https://github.com/thenaim/ionic-tk-social-network">
  <p align="center">
    <img src="https://i.imgur.com/xcNkbhv.gif">
  </p>
</a>
<h2 align="center">
  Introducing a open source social network app.
</h2>
<p align="center">
  Providing you with the components, templates, native components, ngrx, i18n, localStorage, themes, auth pages and much more  needed to build a mobile application on ionic framework.
</p>

# Getting started

```bash
git clone https://github.com/thenaim/ionic-tk-social-network myApp
cd myApp
npm i

# Android
ionic cordova run android

# iOS
ionic cordova run ios

# Browser (native functions not support)
ionic serve
```


# Feature Status


| **Tabs** | **Status** | **Source Code** | **Issue** |
|:---------|:-----------|:----------------|:----------|
| News/Discover (tab1) | Available | [news.ts](src/app/tabs/news) | - |
| Explore (tab2) | Available | [explore.ts](src/app/tabs/explore) | - |
| Messages (tab3) | Available | [message.ts](src/app/tabs/message) | - |
| Notification (tab4) | Available, but needs to be modified | [notification.ts](src/app/tabs/notification) | - |
| Profile (tab5) | Available, but needs to be modified | [profile.ts](src/app/tabs/profile) | - |
| **Pages** | **Status** | **Source Code** | **Issue** |
| Login | Available | [login.ts](src/app/pages/auth/login) | - |
| Register | Available | [register.ts](src/app/pages/auth/register) | - |
| Forgot | Available | [forgot.ts](src/app/pages/auth/forgot) | - |
| Reset | Available, but needs to be modified | [reset.ts](src/app/pages/auth/reset)  | - |
| Friends | Available | [friends.ts](src/app/pages/friends) | - |
| Music | Available | [music.ts](src/app/pages/settings) | - |
| Music modal | Available | [music-player.ts](src/app/shared/music-player) | - |
| Story modal | Available | [stories.component.ts](src/app/shared/stories) | - |
| Settings | Available | [settings.ts](src/app/pages/music) | - |
| About | Available, but needs to be modified | [about.ts](src/app/pages/settings/about) | - |
| Account | Available, but needs to be modified | [account.ts](src/app/pages/settings/account) | - |
| Appearance | Available | [appearance.ts](src/app/pages/settings/appearance) | - |
| Balance | Available, but needs to be modified | [balance.ts](src/app/pages/settings/balance) | - |
| Blocked | Available, but needs to be modified | [blocked.ts](src/app/pages/settings/blocked) | - |
| General | Available, but needs to be modified | [general.ts](src/app/pages/settings/general) | - |
| Notifications | Available, but needs to be modified | [notifications.ts](src/app/pages/settings/notifications) | - |
| Security | Available, but needs to be modified | [about.ts](src/app/pages/settings/about) | - |
| Subscriptions | Available, but needs to be modified | [subscriptions.ts](src/app/pages/settings/subscriptions) | - |
| Privacy | Available | [privacy.ts](src/app/pages/settings/privacy) | - |
| Privacy > Apps invite | Available, but needs to be modified | [apps-invite.ts](src/app/pages/settings/privacy/can-contact/apps-invite) | - |
| Privacy > Apps call | Available, but needs to be modified | [appscall.ts](src/app/pages/settings/privacy/can-contact/appscall) | - |
| Privacy > Calls | Available, but needs to be modified | [calls.ts](src/app/pages/settings/privacy/can-contact/calls) | - |
| Privacy > Chat invite user | Available, but needs to be modified | [chat-invite-user.ts](src/app/pages/settings/privacy/can-contact/chat-invite-user) | - |
| Privacy > Friends requests | Available, but needs to be modified | [friends-requests.ts](src/app/pages/settings/privacy/can-contact/friends-requests) | - |
| Privacy > Groups invite | Available, but needs to be modified | [groups-invite.ts](src/app/pages/settings/privacy/can-contact/groups-invite) | - |
| Privacy > Mail send | Available, but needs to be modified | [mail-send.ts](src/app/pages/settings/privacy/can-contact/mail-send) | - |
| Privacy > Search by phone | Available, but needs to be modified | [search-by-reg-phone.ts](src/app/pages/settings/privacy/can-contact/search-by-reg-phone) | - |
| Privacy > Photos tag me | Available, but needs to be modified | [photos-tagme.ts](src/app/pages/settings/privacy/my-posts/photos-tagme) | - |
| Privacy > Replies view | Available, but needs to be modified | [replies-view.ts](src/app/pages/settings/privacy/my-posts/replies-view) | - |
| Privacy > Status seplies | Available, but needs to be modified | [status-replies.ts](src/app/pages/settings/privacy/my-posts/status-replies) | - |
| Privacy > Wall | Available, but needs to be modified | [wall.ts](src/app/pages/settings/privacy/my-posts/wall) | - |
| Privacy > Wall send | Available, but needs to be modified | [wall-send.ts](src/app/pages/settings/privacy/my-posts/wall-send) | - |
| Privacy > Audios | Available, but needs to be modified | [audios.ts](src/app/pages/settings/privacy/my-profile/audios) | - |
| Privacy > Friends | Available, but needs to be modified | [friends.ts](src/app/pages/settings/privacy/my-profile/friends) | - |
| Privacy > Gifts | Available, but needs to be modified | [gifts.ts](src/app/pages/settings/privacy/my-profile/gifts) | - |
| Privacy > Groups | Available, but needs to be modified | [groups.ts](src/app/pages/settings/privacy/my-profile/groups)   | - |
| Privacy > Hidden friends | Available, but needs to be modified | [hidden-friends.ts](src/app/pages/settings/privacy/my-profile/hidden-friends) | - |
| Privacy > Photos saved | Available, but needs to be modified | [photos-saved.ts](src/app/pages/settings/privacy/my-profile/photos-saved) | - |
| Privacy > Photos with | Available, but needs to be modified | [photos-with.ts](src/app/pages/settings/privacy/my-profile/photos-with) | - |
| Privacy > Places | Available, but needs to be modified | [places.ts](src/app/pages/settings/privacy/my-profile/places) | - |
| Privacy > Profile | Available, but needs to be modified | [profile.ts](src/app/pages/settings/privacy/my-profile/profile) | - |
| Privacy > Company messages | Available, but needs to be modified | [company-messages.ts](src/app/pages/settings/privacy/other/company-messages) | - |
| Privacy > Search | Available, but needs to be modified | [search.ts](src/app/pages/settings/privacy/other/search) | - |
| Privacy > Updates | Available, but needs to be modified | [updates.ts](src/app/pages/settings/privacy/other/updates) | - |
| Privacy > Stories | Available, but needs to be modified | [stories.ts](src/app/pages/settings/privacy/stories/stories) | - |
| Privacy > Stories questions | Available, but needs to be modified | [stories-questions.ts](src/app/pages/settings/privacy/stories/stories-questions) | - |
| Privacy > Stories replies | Available, but needs to be modified | [stories-replies.ts](src/app/pages/settings/privacy/stories/stories-replies) | - |
| **Native Plugins** | **Status** | **Source Code** | **Issue** |
| Camera preview | Available | [app.component.ts](src/app/app.component.ts) | - |
| Push notifications | Not started | - | - |
| Touch ID | Not started | - | - |
| Native Keyboard | Not started | - | - |
| Media | Not started | - | - |
| In App Browser | Not started | - | - |
| File | Not started | - | - |
| Device | Not started | - | - |
| Geolocation | Not started | - | - |
| Image Picker | Not started | - | - |
| ... | ... | ... | ... |

# Preview

[YOUTUBE DEMO V1 ANDROID](https://www.youtube.com/watch?v=GCs2TVZkC_U) - [YOUTUBE DEMO V2 iOS](https://www.youtube.com/watch?v=XVjQJn33pw8)

## Supporting platforms

In pursuit of [adaptive styling](https://ionicframework.com/docs/core-concepts/fundamentals#adaptive-styling), Ionic fully supports and is well tested on the mobile platforms listed below:

| Platform | Version |
| - | - |
| **Android** | 5.0+ |
| **iOS** | 11.0+ |

See [Ionic Docs](https://ionicframework.com/docs/reference/browser-support) for more information.

## Contributors

Want to start contributing to open source with ionic? Leave your mark and join the growing team of contributors!

Get started by checking out list of open [issues](https://github.com/thenaim/ionic-tk-social-network/issues) and reading [Contributor Guide](https://github.com/thenaim/ionic-tk-social-network/blob/master/CONTRIBUTING.md)

## License

License MIT (see the [LICENSE](https://github.com/thenaim/ionic-tk-social-network/blob/master/LICENSE) file for the full text)
