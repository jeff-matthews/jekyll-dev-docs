---
layout: default
title: "Testing the API"
permalink: /basics/testing-the-api.html
---

All of the API examples you see on this site use [cURL](https://curl.haxx.se/) commands to demonstrate requests to our APIs. However, there are more popular tools that make testing APIs easier, like [Postman](https://www.getpostman.com/). This topic explains how to test our APIs using either cURL or Postman.

All API requests are authenticated using HTTP Basic Authentication. The method you use to authenticate depends on what you're trying to do:

-   **Merchants** - If you're trying to manage transactions for your AffiniPay merchant account only, you must provide either your test- or live-mode secret key in the HTTP Authorization header. You can find these keys by logging in to the AffiniPay web application and going to [**Settings** > **Developer** > **My Website** > **Show Credentials**](../guides/payment-form-getting-started.html#obtain-credentials).
-   **Partners** - If you're trying to manage transactions on behalf of _other_ AffiniPay merchants, you must go through an [OAuth flow](../basics/authentication.html) to retrieve an <span class="code-green">access_token</span>. Then, you must use the access token to [request gateway credentials](../guides/app-dev-getting-started.html#request-gateway-credentials) for a specific AffiniPay merchant, which returns the merchant's secret keys.

## Before You Begin
To make API requests using either cURL or Postman, you must have access to the following:

-   An [AffiniPay merchant account](../basics/account-management.html)
-   An [authorized AffiniPay application](../basics/account-management.html#authorized-applications)
-   An [OAuth partner application](../basics/account-management.html#partner-applications) (if you want to manage transactions on behalf of AffiniPay merchants)

## Using cURL
cUrl is a command line tool for transferring data using URL syntax. If you're system isn't already configured to use cURL, you may need to [download and install](https://curl.haxx.se/download.html) it.

Most cURL commands on this site have the same structure. Let's evaluate the following example:

<blockquote>Exchange card details for a one-time token</blockquote>
<pre><code class="json">curl -X POST -H "Content-Type:application/json" --user &lt;secret_key>: {{site.data.variables.apiurl.gateway}}/v1/charges -d '
{
    "type": "card",
    "number": "4242424242424242",
    "exp_month": 10,
    "exp_year": 2017,
    "cvv": "123",
    "name": "Dave Bowman",
    "address1": "2001 Space Odyssey Ln",
    "postal_code": "78750",
    "email": "devsupport@affinipay.com"
}'
</code></pre>

-   The <b><code>curl</code></b> command invokes the cURL program to make the request.
-   The <b><code>-X</code></b> option followed by <b><code>POST</code></b> specifies the request method or HTTP verb to use (others include <b><code>GET</code></b>, <b><code>POST</code></b>, <b><code>PUT</code></b>, <b><code>PATCH</code></b>, & <b><code>DELETE</code></b>).
-   The <b><code>-H</code></b> option specifies that the request contains custom headers, which include:
    - <b><code>"Content-Type:application/json"</code></b> since we're including JSON in the request body (can be omitted if not passing data in the request body).
    - <b><code>--user &lt;secret_key>:</code></b> HTTP Authorization, where <b><code>&lt;secret_key>:</code></b> is an AffiniPay merchant's test- or live-mode secret key. Note the trailing colon (<b><code>:</code></b>) after the <b><code>&lt;secret_key></code></b> value. Authentication will fail if you omit the trailing colon.
-   The URL representing the API endpoint you want to hit: <b><code>https://api.chargeio.com/v1/tokens</code></b>
-   The <b><code>-d</code></b> option specifies custom data we want to include in the request body, in this case JSON (must be surrounded by single quotes).

Our APIs return JSON formatted responses. Here's an example response based on the previous cURL example:

<pre><code class="json">{
  "id": "jwMpCfkzTr2EtqoOIbzMpQ",
  "created": "2017-03-10T17:46:02.034Z",
  "modified": "2017-03-10T17:46:02.034Z",
  "name": "Dave Bowman",
  "address1": "2001 Space Odyssey Ln",
  "postal_code": "78750",
  "email": "devsupport@affinipay.com",
  "type": "card",
  "number": "************4242",
  "exp_month": 10,
  "exp_year": 2017,
  "cvv": "&#42;&#42;&#42;"
}</code></pre>

## Using Postman
Postman is a free API test client available for MacOS, Windows, Linux, and Chrome. It provides a feature-rich GUI for making API calls and can be a little easier than cURL to use.

Let's launch the Postman app and make the same API request we made using cURL:

1. Select **Post** from the method drop-down menu.
2. Enter the following endpoint URL in the adjacent text box: _https://api.chargeio.com/v1/tokens_
3. Configure headers. **No Auth** should be selected in **Authorization** > **Type** by default. If not, do that now.
    -   Enter _Content-Type_ in the first **key** field and _application/json_ in the adjacent **value** field.
    -   Enter _Authorization_ in the next **key** field and _Basic_ followed by your base64-encoded secret key plus trailing colon (e.g., encode this => `<secret_key>:`). You can use an [online Base64 encoder](https://www.base64encode.org/) for this.

    <img width="90%" src="../images/postman1.png">

5. Click **Body**, click the **raw** option, and paste in the following JSON:
    <pre><code>
    {
        "type": "card",
        "number": "4242424242424242",
        "name": "Dave Bowman",
        "address1": "2001 Space Odyssey Ln",
        "postal_code": "78750",
        "email": "devsupport@affinipay.com",
        "exp_month": 10,
        "exp_year": 2017,
        "cvv": "123"
    }</code></pre>
6. Click **Send**.

    <img width="90%" src="../images/postman2.png">

This is what a successful response in Postman looks like:
<img width="90%" src="../images/postman3.png">

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#before-you-begin">Before You Begin</a></li>
      <li><a href="#using-curl">Using cURL</a></li>
      <li><a href="#using-postman">Using Postman</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
