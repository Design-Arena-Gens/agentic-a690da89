import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Cat With Mango</h1>
        <p className={styles.subtitle}>
          A playful illustration of a curious cat discovering a juicy mango.
        </p>
      </section>
      <section className={styles.illustration}>
        <svg
          className={styles.svg}
          viewBox="0 0 400 400"
          role="img"
          aria-labelledby="cat-mango-title cat-mango-desc"
        >
          <title id="cat-mango-title">Cat cuddling a mango</title>
          <desc id="cat-mango-desc">
            A stylized white and orange cat holding a ripe mango under tropical
            leaves.
          </desc>
          <defs>
            <linearGradient id="furGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fefefe" />
              <stop offset="100%" stopColor="#f5d3a3" />
            </linearGradient>
            <linearGradient id="mangoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb347" />
              <stop offset="50%" stopColor="#ff8c42" />
              <stop offset="100%" stopColor="#ff5f6d" />
            </linearGradient>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#84fab0" />
              <stop offset="100%" stopColor="#4ac29a" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ffe8c7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff5e6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill="#ffffff" />
          <circle cx="200" cy="180" r="160" fill="url(#glow)" />
          <g transform="translate(60 50)">
            <path
              d="M40 110 C20 70 30 40 60 30 C90 20 120 60 120 60 L132 48 C144 36 164 34 176 48 C188 62 190 86 178 100 L180 120 C240 112 280 144 280 200 C280 256 236 298 180 302 C148 304 120 290 98 268 C86 258 80 264 70 260 C46 250 30 232 26 200 C20 146 28 128 40 110 Z"
              fill="url(#furGradient)"
              stroke="#f0b46b"
              strokeWidth="4"
            />
            <path
              d="M116 66 C114 48 118 34 128 24 C140 14 158 16 172 30"
              fill="none"
              stroke="#f7944d"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M78 200 C70 168 82 132 120 120 L210 92 C240 82 280 100 292 128 C300 150 296 184 274 204 L214 258 C180 288 120 264 108 226 L78 200 Z"
              fill="url(#mangoGradient)"
              stroke="#ff6f3c"
              strokeWidth="6"
            />
            <path
              d="M220 110 C212 106 204 106 196 118"
              fill="none"
              stroke="#f9a84c"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M164 198 C164 216 152 228 134 228 C116 228 104 216 104 198"
              fill="none"
              stroke="#433f47"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <ellipse cx="120" cy="162" rx="12" ry="18" fill="#433f47" />
            <ellipse cx="176" cy="152" rx="12" ry="18" fill="#433f47" />
            <path
              d="M136 178 C140 184 146 188 154 188 C162 188 168 184 172 178"
              fill="none"
              stroke="#433f47"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M80 250 C110 288 170 308 220 278 C270 248 284 204 260 176"
              fill="none"
              stroke="#433f47"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M208 128 C206 110 212 94 226 84 C240 74 258 78 268 94"
              fill="none"
              stroke="#f9b35d"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M72 130 C60 120 46 118 32 126"
              fill="none"
              stroke="#f0b46b"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M238 70 C248 60 264 58 276 66 L308 88 C322 96 322 116 308 124 L272 146"
              fill="none"
              stroke="url(#leafGradient)"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M252 60 C264 48 284 52 292 68 L302 86 C310 102 300 122 282 128"
              fill="none"
              stroke="url(#leafGradient)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M12 208 C28 246 62 268 84 270"
              fill="none"
              stroke="#f4c58d"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </section>
    </main>
  );
}
