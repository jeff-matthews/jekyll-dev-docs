---
layout: default
title: "Deauthorize an OAuth App"
permalink: /guides/deauthorization.html
---

Merchant users can deauthorize a partner OAuth application by logging in to their AffiniPay merchant account and deleting the application. Partners can also deauthorize applications for specific merchant accounts by using an API endpoint. AffiniPay provides this endpoint to enable partners to control merchant access to their OAuth applications. Common use cases for this API include:

-   A customer cancels a partner account
-   A customer cancels an Affinipay merchant account through a partner application

To deauthorize a partner OAuth application through the API, you need to do the following:

1.  Acquire an <span class="code-green">access_token</span>
2.  Call the API
3.  Notify merchants

## Acquire an Access Token
First, you must acquire an <span class="code-green">access_token</span> through the [Client Credentials](../basics/authentication.html#client-credentials) OAuth flow. Client credentials refer to your OAuth application client credentials (ID and secret). You need this token to call the API in the next step.

Refer to [Configure Your Partner Application](../guides/app-dev-getting-started.html#configure-your-partner-application) for information about retrieving your OAuth client ID and secret.

## Call the API
Send a DELETE request with your <span class="code-green">access_token</span> in the request header and the merchant's <span class="code-green">public_key</span> in the request URL to the following endpoint:

<span class="code-green">https://secure.affinipay.com/api/v1/merchants/{public_key}/deauthorize_application</span>

Refer to the <a href="../reference/api.html#deauthorize-an-oauth-application" target="&#95;blank">API</a> for an example request.

<span class="panel-note"><b>Note:</b> You should already have public keys for all merchants that have authorized your OAuth application saved in your database for running charges. After a user grants your application access to their AffiniPay merchant account through the <a href="../basics/authentication.html#web-server">Web Server</a> OAuth flow and you <a href="../guides/app-dev-getting-started.html#request-gateway-credentials">request payment gateway credentials</a>, the merchant's <span class="code-green">public_key</span> is returned to you in the response body. Refer to the <a href="../reference/api.html#request-gateway-credentials" target="&#95;blank">API</a> for more information.</span>

## Notify Merchants
Send an email to the merchant notifying them that payment processing through AffiniPay has been deactivated.

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#acquire-an-access-token">Acquire an Access Token</a></li>
      <li><a href="#call-the-api">Call the API</a></li>
      <li><a href="#notify-merchants">Notify Merchants</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
