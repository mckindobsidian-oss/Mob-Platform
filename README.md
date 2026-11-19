# Mob Labs

The launch page is hosted at [moblabs.vercel.app](https://moblabs.vercel.app/). Its Open Mob buttons go to the [workspace on Netlify](https://usemob.netlify.app/).

The site is static. To preview it from the Mob source root, run:

```sh
python -m http.server 4180 --bind 127.0.0.1 --directory branding-site
```

Downloads point to [Mob-Platform GitHub Releases](https://github.com/mckindobsidian-oss/Mob-Platform/releases). Upload new assets to the release first, then update the version labels and links in `index.html`. Windows is unsigned, Android is debug-signed, and Chrome or Edge uses the unpacked extension.
