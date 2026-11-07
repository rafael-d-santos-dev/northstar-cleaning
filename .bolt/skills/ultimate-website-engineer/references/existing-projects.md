# Existing projects: audit, improve, repair

Use this for Targeted and Comprehensive work on a site that already exists. The goal is to improve what the user has without breaking what already works.

## 1. Understand the project (read little, read the right things)

1. List the structure and read the package manifest or entry HTML to learn the framework, language, dependencies and build tooling.
2. Open only the components, styles, assets and config the task touches. Reading the whole project is rarely needed and costs tokens.
3. Note the design conventions already in use (tokens, spacing scale, component patterns) so new work matches them.
4. Restate the user's real objective in one line. "Deixa mais rápido" and "deixa mais bonito" lead to different work.

Fill the shared context block (see SKILL.md) as you learn. If findings already exist from earlier in the conversation, reuse them, but check whether the files changed since: do not assume an earlier state still holds.

## 2. Diagnose

- Separate verified problems (you saw the code or ran the check) from assumptions.
- Decide whether broader issues materially affect the requested result. If they do, mention them; if they do not, leave them out of scope.
- Choose the specialists now, using the smallest set that covers the real problem.
- Prioritize by impact and effort:
  - **Critical**: core function broken, serious security risk, user-blocking failure.
  - **High**: significant functional, accessibility, usability or technical issue.
  - **Medium**: meaningful improvement that does not block essential use.
  - **Low**: polish or optional refinement.

Do not inflate severity to make the report look important.

## 3. Plan briefly

For anything beyond a trivial fix, write a few lines: what changes and why, likely files, which specialists, and regression risks. Skip this for Direct tasks.

If the user asked only for an audit or a recommendation, stop at the report and offer to implement. Implementation needs a clear request.

## 4. Implement

- Make focused changes inside the requested scope.
- Reuse existing components, dependencies and conventions.
- Avoid rewrites and migrations unless the user asked for them or the problem cannot be solved otherwise (then explain why).
- Group related changes so you can verify them together.
- Keep changes reversible where practical.

When two specialists touch the same element, resolve it once (see the coordination section in SKILL.md) rather than applying both sets of advice blindly.

Before moving on, trace any form or action end to end (client, request, server handler, side effects) and finish the cleanup the fix makes possible, such as removing a dependency that is no longer imported. Then run a short cross-review: a second relevant specialist checks the critical points of the change (for a form, the server-side validation and error handling).

## 5. Verify

Run what is available and proportionate: build and type check, existing tests, a focused functional test of what changed, responsive viewports, accessibility checks, and performance analysis when performance was the goal. Re-test the neighbouring functionality that the change could affect. Test with mock data and never against real production endpoints.

Report every check with a status label (PASS, FAIL, BLOCKED, NOT RUN, NOT VERIFIED). If a check could not run, say what would be needed to run it.

## 6. Deliver

Summarize what changed, what was verified (with statuses), what remains, and one natural next step. Do not recap every step you took.
