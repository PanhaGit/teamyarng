# Security Policy

## Supported Versions

We actively maintain and support the following versions of this project:

| Version        | Supported |
| -------------- | --------- |
| Latest         | ✅ Yes    |
| Older versions | ❌ No     |

If you are using an outdated version, we recommend upgrading to the latest release for improved security and stability.

---

## Reporting a Vulnerability

If you discover a security issue, please follow the steps below:

1. **Do NOT open a public issue.**
2. Contact the maintainers privately at:  
   **teamyearng@gmail.com** _(replace with your real secure email)_
3. Provide the following details:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (optional)

We will review your report as soon as possible and respond within **48–72 hours**.

---

## Responsible Disclosure

We ask all security researchers to follow these guidelines:

- Do not exploit the vulnerability beyond what is necessary to prove its existence.
- Do not access, modify, or delete unauthorized data.
- Do not publicly disclose the issue until an official patch is released.

Following responsible disclosure helps us keep users secure and maintain system integrity.

---

## Security Best Practices for Contributors

If you are contributing code to this project:

- Do not commit secrets, API keys, private keys, or passwords.
- Validate all input and avoid trusting external data.
- Use HTTPS and secure communication whenever possible.
- Follow OWASP recommendations for secure coding.
- Review code for potential injection or misconfiguration vulnerabilities.

---

## Server & Deployment Security

TeamYearng uses secure best practices for deployment:

- Nginx configured with SSL, HTTP/2, and security headers
- Firewall protection (UFW)
- Regular system updates
- No root SSH login allowed
- Password login disabled (key-only authentication)
- Regular security audits

---

## Contact

If you have questions about this security policy, email us at:  
📧 **teamyearng@gmail.com**
