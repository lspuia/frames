/* The finish programme as flat colour chips — tone previews, not the real
   textured surfaces, which is why each group links to aluplast's design page.
   Data lives in _lib/systems.ts next to the systems it applies to. */

import { FINISH_GROUPS } from "../_lib/systems";
import mk from "./marketing.module.css";

export function FinishesSection() {
  return (
    <section className={mk.section} id="finishes" aria-labelledby="finishes-h">
      <p className={mk.kicker}>Design</p>
      <h2 id="finishes-h" className={mk.heading}>
        Finishes.
      </h2>
      <p className={mk.intro}>
        White is only the beginning. The same profiles come in woodec woodgrain,
        aludec aluminium-look and classic decor foils — windows and doors from
        one family share the finish, so the whole elevation matches. The chips
        below show the tone; the real grained and metallic surfaces are on
        aluplast&rsquo;s design pages.
      </p>
      {FINISH_GROUPS.map((group) => (
        <div key={group.slug} className={mk.finishGroup}>
          <div className={mk.finishHead}>
            <span className={mk.cellKicker}>{group.tagline}</span>
            <h3 className={mk.finishName}>{group.name}</h3>
            <p className={mk.finishBlurb}>{group.blurb}</p>
            <a
              href={group.url}
              target="_blank"
              rel="noopener"
              className={mk.photoLink}
            >
              See the real surfaces ↗
            </a>
          </div>
          {group.swatches.length > 0 && (
            <ul className={mk.swatches}>
              {group.swatches.map(({ name, hex }) => (
                <li key={name} className={mk.swatch}>
                  <span
                    className={mk.swatchChip}
                    style={{ background: hex }}
                    aria-hidden
                  />
                  <span className={mk.swatchName}>{name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
