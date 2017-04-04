---
layout: default
title: "Account Management"
permalink: /basics/account-management.html
---

The {{site.data.variables.dashboard}} at <a href="https://secure.affinipay.com" target="&#95;blank">https://secure.affinipay.com</a> is where you go to perform administrative tasks associated with your merchant account(s), such as authorizing/deauthorizing applications, configuring card verification policies, and accessing payment gateway credentials/API keys for development purposes.

<div class="panel-note"><b>Note:</b> The {{site.data.variables.dashboard}} URL varies depending on which AffiniPay product you're using:
  <ul>
    <li>AffiniPay - <a href="https://secure.affinipay.com" target="&#95;blank">https://secure.affinipay.com</a></li>
    <li>LawPay - <a href="https://secure.lawpay.com" target="&#95;blank">https://secure.lawpay.com</a></li>
    <li>CPACharge - <a href="https://secure.cpacharge.com" target="&#95;blank">https://secure.cpacharge.com</a></li>
  </ul>
</div>

## Authorized Applications
When you sign up for an AffiniPay merchant account, we create a default application for you called **My Website**. This application contains the credentials you must use to submit API requests to the {{site.data.variables.brand.gateway}}. You must log in to the {{site.data.variables.dashboard}} and [manually authorize](../guides/payment-form-getting-started.html#obtain-credentials) this application to access your [test- and live-mode credentials](#test-live-creds).

### Merchant Accounts
{% include concepts/merchant-accounts.md %}

### Test- and Live-Mode Credentials {#test-live-creds}
{% include concepts/test-live-mode-keys.md %}

## Partner Applications
Third-party integrations require an OAuth partner application within the AffiniPay system. An AffiniPay employee must create your first OAuth partner application for you. Contact <a href="mailto:devsupport@affinipay.com" >support</a> if you need help.

AffiniPay merchants must authorize these applications to perform actions (e.g., charge, refund, void) on their behalf through the OAuth 2.0 [web authentication flow](../basics/authentication.html#web-server). Refer to [Configure Your Partner Application](../guides/app-dev-getting-started.html#configure-your-partner-application) for more information.

### Access Control
Merchants users can revoke a partner application's access to their account any time by logging in to the {{site.data.variables.dashboard}} and deleting the application.

Partners can use our <a href="../guides/deauthorization.html">API</a> to revoke a user's access to their application.

{{site.data.notes.note.payment-form-tip}}

## AVS and CVV Policies
<a href="https://en.wikipedia.org/wiki/Address_Verification_System" target="&#95;blank">Address Verification System (AVS)</a> and <a href="https://en.wikipedia.org/wiki/Card_security_code" target="&#95;blank">Card Verification Value (CVV)</a> policies determine how AffiniPay validates transactions linked to your merchant account(s) when a customer submits a credit card payment on your website or through a partner application.

When you run a charge, the AffiniPay Payment Gateway sends customer-provided AVS/CVV information to the card-issuing bank. The card-issuing bank's response includes codes that indicate whether the AVS/CVV information matches their records. What happens next depends on your merchant account AVS/CVV policy configuration.

AffiniPay's AVS/CVV policy configuration allows you to enable/disable matching and/or specify how strict match parameters should be. For example, some card-issuing banks will authorize a charge despite a failed AVS/CVV match between the charge request and the bank's records. You can configure AffiniPay AVS/CVV policies to reject transactions when a card-issuing bank responds with a mismatched result. If a card-issuing bank's response triggers one of your merchant account AVS/CVV policies, the AffiniPay Payment Gateway returns a <a href="../reference/api.html#CardValidationMessages" target="&#95;blank">Card Validation</a> error message.  

### Configuration
The easiest way to configure AVS/CVV policies for your merchant account(s) is through the {{site.data.variables.dashboard}}:

<span class="panel-note"><b>Note:</b> Only authorized users can access and modify account settings.</span>

1. Log in to <a href="https://secure.affinipay.com/login" target="&#95;blank">https://secure.affinipay.com/login</a>.<i class="fa fa-info-circle superscript tooltipped" data-position="top" data-delay="50" data-tooltip="LawPay users should go to https://secure.lawpay.com/login"></i>
2. Click your name in the upper-right corner to open the drop-down menu and click **Settings**.
3. Click the <b>My Business</b> tab and scroll down to the <b>Accounts</b> section.
4. Click <b>Edit</b> next to the account you want to configure.
5. Configure manual entry (card not present) and swiper-based (card present) AVS/CVV policies. Click the <img src="../images/help-icon.png"> icons to learn more about configuration options.

<span class="panel-tip"><b>Tip:</b> You can also configure AVS/CVV policies programmatically using the <a href="../reference/api.html#UpdateMerchant" target="&#95;blank">AffiniPay Payment Gateway API</a>.</span>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
    <li><a href="#authorized-applications">Authorized Applications</a></li>
    <li><a href="#partner-applications">Partner Applications</a></li>
    <li><a href="#avs-and-cvv-policies">AVS and CVV Policies</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
