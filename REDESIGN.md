# astra-redesign

The approved VALUEON MAKE desktop / 390px concept is the design source of truth.
No build tool, Pages workflow, domain, or existing detail URL was changed.

## Homepage

- `index.html`: header, compact intro, eight category links, ABOUT MAKE, PROCESS,
  CONTACT and footer.
- `assets/home.css`: isolated homepage design; desktop 64px header + 144px intro,
  2-column 3:2 grid with 4px seams; mobile 60px header and 1-column grid.
- `assets/home.js`: mobile navigation (expanded state, Escape, outside click,
  anchor close, breakpoint reset) and missing-image fallback.
- Existing `assets/style.css` and `assets/app.js` remain unchanged for secondary
  pages. WORKS keeps filtering; GOODS has been corrected to STATIONERY.
- Fake contact values on all secondary pages were replaced with explicit
  placeholders. No working phone/email address is available in the repository.
- Pretendard v1.3.9 is loaded from jsDelivr; system fonts remain the fallback.

## Images

All eight original WebP assets remain byte-for-byte unchanged. They are around
1586×992px and contain baked-in headlines and small descriptive text.
Desktop uses `object-fit: contain` to retain the entire original composition in
the 3:2 frame; HTML labels are not duplicated over the embedded typography.
Small neutral bands are intentional because the original ratio is about 1.60.
Mobile uses the approved labelled placeholders because the embedded text is too
small and cropping would remove product / title information. Missing desktop
assets also fall back to these labels. No AI images were generated.

Replacement specification: **1800×1200px, 3:2, text-free WebP/JPEG**, products
fully visible, with quiet space for the lower-left category caption. These are
photo requirements, not claims about completed customer projects.

| Category | Required shot |
|---|---|
| PACKAGE | Box, sleeve and printed paper composition |
| BEAUTY | Containers and outer cartons |
| FOOD | Food / beverage packaging composition |
| LIVING | Household product composition |
| STATIONERY | Notebook and writing instruments |
| GIFT | Complete gift / merchandise set |
| APPAREL | Garment and fabric detail |
| PET | Pet product composition |

Once approved text-free images arrive, replace the image source and change the
tile presentation to show `.tile-caption` over the photo on both breakpoints.
Do not remove the accessible category link name.

## Local preview

Serve the parent directory to reproduce the GitHub Pages project prefix:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory <parent-directory>
```

Open `http://127.0.0.1:8765/valueon-make/`.
All eight `works/<category>/` routes and their relative assets must resolve.

Publishing / merging to main requires the user's approval. This branch alone
does not replace the live Pages site.
