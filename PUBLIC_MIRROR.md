# Public Mirror

Render-facing source of truth:

`https://github.com/acemagnates/ace-magnates-promo-public`

Use this public mirror when rendering, previewing, or sharing clips that need external access.
The private repo exists for workspace control, but any agent or workflow that needs a public
URL should treat the mirror above as authoritative.

Render policy:

- GitHub Actions should render from the public mirror repo.
- GitHub Actions renders the video as four separate 300-frame chunks.
- The follow-up job downloads the four rendered chunk artifacts and reassembles them into the final MP4 with FFmpeg.
- The private repo mirrors the source, but the public mirror is the render-facing source of truth.
