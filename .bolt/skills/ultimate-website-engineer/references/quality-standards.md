# Quality standards and verification

Apply what is relevant to the project; do not force every item onto every site. Contents: engineering, user experience, accessibility, SEO, conversion, motion and 3D, verification, testing safety.

## Engineering
- Code is maintainable and organized; dependencies are justified and installed correctly.
- The build succeeds and type checking passes when the project has them.
- No unnecessary complexity: prefer reusing existing components over adding new libraries.
- Performance work is evidence-based: measure, change, measure again. Check image weight and format, render-blocking resources, bundle size, unused dependencies, layout shift risks and the largest-content element.
- Mobile first: assume mid-range or low-end Android phones on slow networks.

## Forms and backend handlers
- The client prevents the default submit, sends the right method, URL and `Content-Type`, and shows success only after a confirmed OK response; it handles network errors and blocks double submission.
- The server handler is reviewed too, not only the component: it parses malformed JSON without crashing and returns a clear 400, rejects unexpected structures (an array, a string or `null` instead of an object, and fields that are not strings), trims and type-checks every field, requires the mandatory ones, validates the email format, enforces a maximum length per field and a maximum size for the whole body, and returns distinct status codes for client and server errors.
- Keep three things apart in code, interface and report: the API **received** the data, the API **stored** it, and a message was **delivered** (an email actually sent). Show a delivery confirmation only when a real integration exists and answered successfully. A stub that returns `ok` means "received" at best, so the interface says so and the report states it in its first lines.
- Enforce the total body limit in bytes (`Buffer.byteLength`), not characters, and before reading the whole body: check `content-length` first, or read the stream with a cap. A limit applied after `request.text()` still lets a huge body into memory, and a character count lets a body several times larger pass. Require `application/json` and answer 415 otherwise.
- Give the client request a timeout (for example `AbortSignal.timeout(15000)`) and treat it as a network error, so a stalled request cannot leave the button disabled forever. Mention that a retry after a timeout can duplicate a message.
- While the handler is a stub, do not clear the visitor's fields after "received" and show a fallback contact, because nothing keeps the message. Form controls (input, textarea, button) do not inherit the page font by default, so set `font-family: inherit` on them.
- A server that stores personal data needs abuse limits and safe storage: a per-IP rate limit (429 with `Retry-After`; count rejected requests too, and note that behind a proxy the visible IP is the proxy's), a ceiling on the data file (stop storing past it), file mode `0o600`, a placeholder for the privacy notice (LGPD) next to the form, and the file kept outside any served folder. Reject requests that are not JSON or not POST with `Connection: close` and destroy the request instead of draining the body, and handle `listen` errors (port in use) with a clear message.
- Do not rely on `AbortSignal.timeout` alone (older Safari lacks it); use an `AbortController` with `setTimeout`. A form that posts to a JSON-only endpoint is useless without JavaScript: hide it with `<noscript>` and show another contact channel, or accept form posts on the server.
- Keep the visible `[PREENCHER` marker, but write the visitor-facing sentence so that it is true and complete without the marker.
- Never send test submissions to a real endpoint.
- When dependencies cannot be installed, still run every isolated test that is possible (the handler called directly with fake `Request` objects, a syntax check, a static render of the markup) and list exactly what stayed unvalidated. An isolated handler test does not prove the whole form works.
- When the environment becomes available, the first end-to-end check is the React component in a browser: success, HTTP error response, connection failure and double submission (a second click while sending). Put it in the report as a pending test until it has run.

## Framework changes must reach the page
- After switching to a framework feature, confirm it is actually used: a self-hosted font from `next/font` only applies if the CSS uses the generated class or variable, not the old literal family name; an optimized image component only helps if the source is not served `unoptimized`.
- `next/font/google` downloads the font at build time, so a build without network access fails. Mention it when the build environment is restricted, or offer the local-font alternative.
- A huge source image (thousands of pixels wide) stays a heavy download even when optimized. Recommend uploading a reduced master (around 1600 to 2000 px wide) and say the real hero asset must be checked.
- Remove dependencies and imports that a fix made unused, and add `viewport` and `description` metadata when a page lacks them and the project is a Next.js app.

## Honest copy and disabled controls
- Copy must not promise an outcome the page cannot guarantee. Without a booking or confirmation system, a line like "seu horário está combinado" is false; write what actually happens ("a barbearia confirma o horário pelo WhatsApp; ele só vale depois dessa confirmação"). The same goes for "mensagem enviada", "pedido confirmado" or "vagas limitadas" without real backing.
- A control that cannot work yet (an unset contact link) is not a link. An `<a>` without `href` is not focusable and has no link role, and `role="link"` on it adds a role without a destination. Render a `<button type="button" aria-disabled="true">` instead, keep it focusable, point it at the explanation with `aria-describedby`, and make clicks do nothing. Swap back to a real `<a href>` once the value exists.
- Test every state of such a control: configured and not configured (use a temporary copy with a test value, never a real one).

## Placeholders
- Every placeholder is visible in the interface with one consistent marker, inert until replaced, and listed in the pre-publication checklist.
- Phone numbers, testimonials, ratings, client counts, years of experience, prices and addresses are never filled with plausible values. A fake WhatsApp number is especially risky because it can send real messages to a stranger.

## User experience
- Clear navigation and a consistent visual hierarchy.
- Layouts work on narrow phones, tablets and desktop without horizontal scroll.
- Touch targets are comfortable (about 44px) and the primary call to action is visible on the first screen.
- Interactions give feedback: hover or press, loading, success, error, empty states.

## Accessibility (WCAG 2.2 A and AA considerations)
- Semantic landmarks and a logical heading order.
- Everything usable by keyboard, with a visible focus indicator.
- Form fields have labels and clear error messages; buttons and links have accessible names.
- Meaningful images have alt text; decorative ones have empty alt.
- Text contrast meets AA; information is not conveyed by color alone.
- A superficial code read is not a compliance claim. Say "reviewed for common WCAG issues" rather than "WCAG compliant" unless real testing supports it.

## SEO
- Unique, accurate title and meta description; canonical URL when applicable.
- Open Graph and Twitter Card tags for shareable pages.
- Semantic content structure; structured data only when it is accurate (for a local business, only with real data the user supplied).

## Conversion
- One clear value proposition and a relevant primary CTA.
- Forms ask only for what is needed.
- Trust signals are real and supplied by the user. Do not add fake urgency, invented testimonials or made-up numbers.
- Do not claim a conversion improvement without data from real traffic.

## Motion and 3D
- Motion has a purpose (guide attention, give feedback), not decoration.
- `prefers-reduced-motion` is honored.
- Heavy effects degrade gracefully on weak devices: gate by device capability, use a static poster as the first paint, pause off-screen animation.

## Verification
Pick the checks that match what changed. Use these labels and nothing else:

| Status | Meaning |
|---|---|
| PASS | Actually executed and passed |
| FAIL | Actually executed and failed |
| BLOCKED | Attempted but prevented by a limit you can name |
| NOT RUN | Not executed |
| NOT VERIFIED | Not enough evidence to confirm |
| ESTIMATED | Worked out by reasoning or calculation, not observed (say how) |

Keep executed, not executed and estimated clearly apart in the report. A contrast ratio computed from hex values is a calculation (PASS on the numbers), not a look at the render; a visual result that could not be opened in a browser is NOT VERIFIED and the report says so in plain words.

Match the depth to the risk: a spacing or color tweak needs a rendered check at a phone width plus contrast if colors changed; a form needs a functional test with mock data; a build-affecting change needs the build. Do not run a full battery on a small edit, and do not skip the one check that would catch the most likely mistake.

Keep the distinctions honest: static inspection, type check, production build, automated tests, browser test, responsive viewport test, physical-device test, performance profiling and accessibility test are different things. Do not report one as another. Never invent results, Lighthouse scores or device measurements. If a check is unavailable, state what is needed to run it.

Suggested report table:

| Check | Status | Evidence or reason |
|---|---|---|
| Production build | PASS | `npm run build` exit 0 |
| Browser test of form | NOT RUN | No browser available in this session |

## Testing safety
- Use mock data and local or isolated environments.
- Do not send test submissions to real production endpoints, trigger real purchases or bookings, or contact real customers without explicit authorization.
- Never print or commit secrets, API keys or credentials.
