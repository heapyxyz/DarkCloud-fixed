> [!NOTE]  
> SoundCloud has finally updated its UI! As part of the update, dark mode is now officially available. You can enable it [here](https://soundcloud.com/settings).

# DarkCloud - Fixed
This repo contains a fixed version of [DarkCloud - a dark-mode extension for SoundCloud](https://github.com/iamdiogo/DarkCloud).  
  
Mutation events (which original extension uses) are now deprecated in new versions of Chromium and because of that the extension stopped working. I edited the script to use `MutationObserver()` instead.
  
You can read more here: https://developer.chrome.com/blog/mutation-events-deprecation
