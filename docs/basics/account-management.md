---
layout: default
title: "Account Management"
permalink: /basics/account-management.html
---

The AffiniPay Virtual Terminal web application at <a href="https://secure.affinipay.com" target="&#95;blank">https://secure.affinipay.com</a> is where you go to perform administrative tasks associated with your merchant account, such as authorizing/deauthorizing applications and accessing payment gateway credentials and API keys for development purposes.

<div class="panel-note"><b>Note:</b> The Virtual Terminal web application URL varies depending on which AffiniPay product you're using:
  <ul>
    <li>LawPay - <a href="https://secure.lawpay.com" target="&#95;blank">https://secure.lawpay.com</a></li>
    <li>CPACharge - <a href="https://secure.cpacharge.com" target="&#95;blank">https://secure.cpacharge.com</a></li>
  </ul>
</div>

There are two methods of authenticating with the {{site.data.variables.brand.gateway-api}}:

- Authorized applications
- Partner applications

## Authorized Applications
To submit API requests to the {{site.data.variables.brand.gateway}}, you must use credentials from an authorized AffiniPay application. By default, AffiniPay creates an application for you when you sign up for a merchant account called **My Website**. This application contains the credentials you must use to submit charges to the payment gateway.

You must log in to your merchant account and [manually authorize](../guides/payment-form-getting-started.html#obtain-credentials) this application to access your test- and live-mode credentials.

### Test- and Live-Mode Credentials
{% include test-live-mode-keys.md %}

## Partner Applications
Third-party integrations require an OAuth partner application within the AffiniPay system. An AffiniPay employee must create your first OAuth partner application for you. Contact <a href="https://affinipay.com/support/" target="&#95;blank">support</a> if you need help.

AffiniPay merchants must authorize these applications to perform actions (e.g., charge, refund, void) on their behalf through the OAuth 2.0 [web authentication flow](../basics/authentication.html#web-server). Refer to [Configure Your Partner Application](../guides/app-dev-getting-started.html#configure-your-partner-application) for more information.

### Access Control
Merchants users can revoke a partner application's access to their account any time by logging in to the Virtual Terminal web application and deleting the application.

Partners can use our <a href="../guides/deauthorization.html">API</a> to revoke a user's access to their application.

{{site.data.notes.note.payment-form-tip}}

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#authorized-applications">Authorized Applications</a></li>
      <li><a href="#partner-applications">Partner Applications</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
