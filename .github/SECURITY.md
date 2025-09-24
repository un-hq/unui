# Security Policy

We take the security of UnUI seriously. Thank you for responsibly disclosing vulnerabilities.

## Supported Versions

We follow semantic versioning. Security fixes are backported to the **latest minor** of the **last two active minors**.

| Version          | Supported |
| ---------------- | --------- |
| `0.(latest)`     | ✅        |
| `0.(previous)`   | ✅        |
| older            | ⚠️ (best-effort) |

> If you are on an older version, please upgrade to the latest minor to receive timely fixes.

## Reporting a Vulnerability

- Email: **unhq@nahar.tv**
- Subject: `unui: security report`
- Include: affected package(s) and version(s), environment, PoC steps, and impact assessment.

Please **do not** open public issues for security reports.

## Disclosure Policy

- We aim to acknowledge receipt within **3 business days**.
- We will provide a remediation plan or fix ETA after triage.
- We prefer **coordinated disclosure** and generally aim to resolve within **90 days**, sooner when possible.
- You are welcome to request CVE assignment; we can assist for published fixes.

## Scope

- Packages in this repo (e.g., `@unhq/ui`, `@unhq/tokens`, `@unhq/tailwind-preset`, `@unhq/blocks`).
- The docs app is **out of scope** except where it exposes a vulnerability in shipped packages.

## GPG (optional)

If you require encryption, ask for our current PGP key in your initial email and we will respond with details.

## Safe Harbor

We will not pursue legal action for good-faith, non-destructive testing that:
- Respects user privacy and data
- Avoids service disruption
- Follows the coordinated disclosure process above
