# Public Mirror

Render-facing source of truth:

`https://github.com/acemagnates/ace-magnates-promo-public`

Use this public mirror when rendering, previewing, or sharing clips that need external access.
The private repo exists for workspace control, but any agent or workflow that needs a public
URL should treat the mirror above as authoritative.

Render policy:

- GitHub Actions should render from the public mirror repo.
- Render outputs are split into 300-frame chunks for distribution and review.
- The render job uploads the chunk artifacts, and the follow-up job downloads and reassembles them into the final MP4.
- The private repo mirrors the source, but the public mirror is the render-facing source of truth.
