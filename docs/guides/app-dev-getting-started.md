---
layout: default
title: "Application Development"
permalink: /guides/app-dev-getting-started.html
---
This guide is intended for AffiniPay partners developing payment integrations for existing commercial software applications (e.g., practice management software).

{{site.data.notes.note.partner-apps-description}}

<span class="panel-note"><b>Note:</b> If you just need to update a website to accept payments from non-merchants (e.g., clients, members, or donors), refer to <a href="../guides/payment-form-getting-started.html">Getting Started with Payment Forms</a>.</span>

By the end of this guide, you'll be able to:

1. Configure your AffiniPay OAuth partner application and retrieve details required for configuring your OAuth client.
2. Configure your OAuth client allowing AffiniPay merchant users to log in to your application using their AffiniPay merchant account.
3. Request {{site.data.variables.brand.gateway}} credentials so your application can store them for future use.
4. Create a charge on behalf of a merchant user through the {{site.data.variables.brand.gateway-api}}.

Before your application can start managing transactions on behalf of an AffiniPay merchant, your merchant users must go through the [OAuth 2.0 Web Server Authentication](../basics/authentication.html#web-server) flow. This flow requires your application to:

- **Authenticate with the {{site.data.variables.brand.vt-api}}** - Each of your merchant users must delegate authorization to your application to perform operations on their behalf. Your application must request and receive an <span class="code-green">access_token</span> before attempting to call the payment gateway.
  {{site.data.notes.note.revoke-app-auth}}
- **Request credentials to authenticate with the {{site.data.variables.brand.gateway-api}}** - You cannot use the <span class="code-green">access_token</span> from the {{site.data.variables.brand.vt-api}} to make calls to the {{site.data.variables.brand.gateway-api}}. You must request {{site.data.variables.brand.gateway}} credentials using the <span class="code-green">access_token</span>.
  <span class="panel-note"><b>Note:</b> {{site.data.variables.brand.gateway}} credentials don't expire. Save these credentials securely so your application can manage transactions on behalf of merchant users.</span>

## Configure Your Partner Application
Before proceeding with this guide, make sure you can log in to the <a href="https://secure.affinipay.com" target="&#95;blank">{{site.data.variables.dashboard}}</a> and that you have an OAuth [partner application](../basics/account-management.html#partner-applications).

Follow these steps to configure your application and retrieve your client ID and secret:

 1. Log in to <a href="https://secure.affinipay.com/login" target="&#95;blank">https://secure.affinipay.com/login</a>.<i class="fa fa-info-circle superscript tooltipped" data-position="top" data-delay="50" data-tooltip="LawPay users should go to https://secure.lawpay.com/login"></i>
 2. Click your name in the upper-right corner to open the drop-down menu and click **Developers**.
 3. The **My Partner Applications** section on the right lists your OAuth applications. Locate the application whose client ID and secret you want to retrieve and click **Edit**.
  <img width="70%" src="../images/clientIDandSecret.png">
  <!--![diagram](../images/clientIDandSecret.png)-->
    {{site.data.notes.note.oauth-partner-app}}
 4. At a minimum, enter a **Redirect URI** and make a note of your **OAuth Client ID** and **OAuth Secret**. You'll need these to [Configure Your OAuth Client](app-dev-getting-started.html#configure-your-oauth-client):

    - **Application Name** – The name end-users see when they authorize your application to interact with their AffiniPay account.
    - **OAuth Enabled** – If you'd like to disable your OAuth integration, uncheck this checkbox.
    - **Redirect URI** – Per the OAuth 2.0 specification, this is the URI to which the {{site.data.variables.dashboard}} will redirect after successful authorization. Your web server must handle redirects to this URI according to the OAuth 2.0 specification.
    - **Event URL** - The endpoint on your server to which AffiniPay sends notifications and event details, such as merchant application disposition.
    - **OAuth Client ID** – Used to identify your application during OAuth authorization flows.
    - **OAuth Secret** – Used to authenticate your application during OAuth authorization flows.

## Configure Your OAuth Client

{% include tasks/configure-oauth-client.md %}

## Request Gateway Credentials

{% include tasks/request-gateway-credentials.md %}

## Create a Charge

After successfully retrieving {{site.data.variables.brand.gateway}} credentials, you're application can start making API calls to manage transactions on behalf of an AffiniPay merchant.

<span class="panel-tip"><b>Tip:</b> We highly recommend masking payment details you collect using tokenization. {{site.data.notes.use-tokens}}</span>

### Creating a One-Time Token
{{site.data.notes.note.tokenization-definition}}

<span class="panel-note"><b>Note:</b> {{site.data.notes.token-ttl}}</span>

<h4>Example request</h4>
<pre id="token"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;public_key>: https://api.chargeio.com/v1/tokens -d '
{
    "type": "card",
    "number": "4242424242424242",
    "exp_month": 10,
    "exp_year": 2017,
    "cvv": "123",
    "name": "Dave Bowman",
    "address1": "2001 Odyssey Ln",
    "address2": "Suite 100",
    "city": "Austin",
    "state": "TX",
    "postal_code": "78750",
    "form_data": {
        "extra_data": "some_value",
        "more_data": "another_value"
    }
}'</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#token" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

{{site.data.notes.required-payment-fields}}

<h4>Example response</h4>
<pre><code>{
    "id": "wKgFaj72F3aBPvZneEsBew",
    "type": "card",
    "number": "************4242",
    "fingerprint": "GunPelYVthifNV63LEw1",
    "exp_month": 10,
    "exp_year": 2017,
    "cvv": "&#42;&#42;&#42;",
    "form_data": {
        "extra_data": [ "some_value", "second_value" ],
        "more_data": "another_value"
    }
}
</code></pre>

### Running a Charge with a One-Time Token
After creating a token, you're ready to run a charge. {% include concepts/charge-properties.md %}

<h4>Example request</h4>
<pre id="use-token"><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: https://api.chargeio.com/v1/charges -d '
{
    "amount": "100",
    "method": "wKgFaj72F3aBPvZneEsBew",
    "account_id":"diON4KOPnesamprmrxA8Iuo"
}'
</code></pre>

<button id="btn" class="btn copy" data-clipboard-target="#use-token" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<h4>Example response</h4>
<pre><code>{
    "id": "wKgFnjz8GamBPPzKzIsAAA",
    "type": "CHARGE",
    "account_id": "diON4KOPnesamprmrxA8Iuo",
    "status": "AUTHORIZED",
    "amount": 100,
    "currency": "USD",
    "auto_capture": true,
    "amount_refunded": 0,
    "authorization_code": "RLQMEA",
    "method": {
        "type": "card",
        "number": "************4242",
        "fingerprint": "GunPelYVthifNV63LEw1",
        "card_type": "VISA",
        "exp_month": 10,
        "exp_year": 2017,
        "name": "Some Customer"
    },
    "cvv_result" : "MATCHED"
}
</code></pre>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#configure-your-partner-application">Configure Your Partner Application</a></li>
      <li><a href="#configure-your-oauth-client">Configure Your OAuth Client</a></li>
      <li><a href="#request-gateway-credentials">Request Gateway Credentials</a></li>
      <li><a href="#create-a-charge">Create a Charge</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
