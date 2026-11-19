# Mob launch website

A standalone, buildless branding website. Preview with `python -m http.server 4180 --bind 127.0.0.1 --directory branding-site` from the Mob source root.

Local launch page: http://127.0.0.1:4180

Brand: Mob, a productive ecosystem. Graphite and soft green, the Mob mark, actual product images and credits to Lakshya and Khushaank. Download links point to packaged files in downloads/. No analytics, Supabase calls, external fonts or build dependencies are used by this site.

The workspace links currently open the temporary Mob testing site. Replace the two .app-link hrefs in index.html when the permanent app address is supplied. No new cloud Site was created or published for this landing page.

Downloads are testing builds: Android debug-signed, Windows unsigned, extension unpacked. Before public release, complete the device/signing checks in ../DEPLOYMENT-AUDIT.md. The Windows installer is around 206 MB; choose a download host that supports that size when publishing. Supabase is not used to serve downloads.
