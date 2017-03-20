---
layout: default
title: "Test the Web Server OAuth Flow"
permalink: /basics/test-web-server-oauth-flow.html
---

To manually walk through the typical functions of an OAuth client, follow the steps in this section. These cURL calls require an OAuth Partner Application within the AffiniPay system, which provides the following required information:

 - Client ID
 - Client secret
 - Redirect URI

For this example, we are using an AffiniPay application and a redirect URI of <span class="code-green">http://localhost:9292/callback</span>. So, all calls will be made to the host <span class="code-green">https://secure.affinipay.com</span>.

The steps to test your web server authentication flow with cURL include:

 1. Request an <span class="code-green">&lt;authenticity_token&gt;</span>
 2. Login with user credentials
 3. Validate your identity
 4. Authorize your partner application
 5. Retrieve an <span class="code-green">&lt;authorization_code&gt;</span>
 6. Exchange the <span class="code-green">&lt;authorization_code&gt;</span> for an <span class="code-green">&lt;access_token&gt;</span>

## Request an Authenticity Token
<h4>Example request</h4>
<pre id="request-authenticity-token"><code class="curl">curl -X GET -c cookies https://secure.affinipay.com/login | grep csrf
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#request-authenticity-token" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<h4>Example response</h4>
<pre><code class="html">&lt;meta content="authenticity_token" name="csrf-param" />
&lt;meta content="/C0LJAalOoBMrfuQk0PNZlo858qUvY9OCmESyXU7bBw=" name="csrf-token" />
</code></pre>

Use the <span class="code-green">&lt;authenticity_token&gt;</span> from this response to make the next call.

## Log In with User Credentials

The following command sends you an email with a <span class="code-green">&lt;validation_code&gt;</span>, which you'll need in the next step.
<h4>Example request</h4>
<pre id="login"><code class="curl">curl -L -b cookies -c cookies https://secure.affinipay.com/login -d "user[email]=<email@address.com>" --data-urlencode "user[password]=&lt;password>" --data-urlencode "authenticity_token=/C0LJAalOoBMrfuQk0PNZlo858qUvY9OCmESyXU7bBw=" | grep csrf
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#login" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

Take note of the <span class="code-green">&lt;new_authenticity_token&gt;</span> in this response. You'll need it as well as the emailed <span class="code-green">&lt;validation_code&gt;</span> to make the next call.
<h4>Example response</h4>
<pre><code class="html">&lt;meta content="new_authenticity_token" name="csrf-param" />
&lt;meta content="z0zYrlZVdn+Cww6WKkI7jt+48FUjseA0eIE1QPgY/FQ=" name="csrf-token" />
</code></pre>

## Check Email for Validation Code

Use the <span class="code-green">&lt;validation_code&gt;</span> plus the <span class="code-green">&lt;new_authenticity_token&gt;</span> from the previous response to make the next call.

## Validate Your Web Browser

Be sure to use the <span class="code-green">&lt;new_authenticity_token&gt;</span> from the previous response and emailed <span class="code-green">&lt;validation_code&gt;</span> here.
<h4>Example request</h4>
<pre id="validate"><code class="json">curl -X PATCH -b cookies -c cookies -H "Content-Type:application/json" https://secure.affinipay.com/validate -d '
{
  "code":"&lt;validation_code>",
  "authenticity_token":"z0zYrlZVdn+Cww6WKkI7jt+48FUjseA0eIE1QPgY/FQ="
}'
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#validate" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<h4>Example response</h4>
<pre><code class="html">&lt;html>
  &lt;body>You are being &lt;a href="https://secure.affinipay.com/login">redirected&lt;/a>.&lt;/body>
&lt;/html>
</code></pre>

## Request an Authorization Code

Be sure to use your partner application client ID, secret, and redirect URI. The redirect URI must point to your web server.
<h4>Example request</h4>
<pre id="request-auth-code"><code class="json">curl -X POST -b cookies -c cookies -H "Content-Type:application/json" https://secure.affinipay.com/oauth/authorize -d '
{
  "client_id":"f3ebce5fb8d5e0d4d8339d1058d11a8e0997c9943ccbd517c6dce33ab8bbdcc6",
  "redirect_uri":"http://9b73007d.ngrok.io",
  "response_type":"code",
  "scope":"chargeio",
  "commit":"Authorize",
  "authenticity_token":"xQtfeKPQh6j1aOo7hDARQQjMEcbZjKcs4aY8Fjv3Q48="
}'</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#request-auth-code" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<h4>Example response</h4>
<pre><code class="html">&lt;html>
  &lt;body>You are being &lt;a href="http://9b73007d.ngrok.io?code=&lt;authorization_code>">redirected&lt;/a>.&lt;/body>
&lt;/html>
</code></pre>

Use the <span class="code-green">&lt;authorization_code&gt;</span> from this response to make the next call.

## Request an Access Token

Use the <span class="code-green">&lt;authorization_code&gt;</span> from the previous response to make the next call.
<h4>Example request</h4>
<pre id="request-token"><code class="json">curl -X POST https://secure.affinipay.com/oauth/token -d '
{
  "client_id":"f3ebce5fb8d5e0d4d8339d1058d11a8e0997c9943ccbd517c6dce33ab8bbdcc6",
  "client_secret":"208c5ba3c1b27646d307d91d36d91f07ba06968013d655870b7e36d5b2b69a47",
  "grant_type":"authorization_code",
  "scope":"chargeio",
  "redirect_uri":"http://localhost:9292/callback",
  "code":"&lt;authorization_code>"
}'
</code></pre>
<button id="btn" class="btn copy" data-clipboard-target="#request-token" onclick="Materialize.toast('Copied!', 2000)">Copy</button>

<h4>Example response</h4>
<pre><code class="json">{
  "access_token":"&lt;access_token>",
  "token_type":"bearer",
  "scope":"chargeio",
  "created_at":"1464986958"
}
</code></pre>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#request-an-authenticity-token">Request an Authenticity Token</a></li>
      <li><a href="#log-in-with-user-credentials">Log In with User Credentials</a></li>
      <li><a href="#check-email-for-validation-code">Check Email for Validation Code</a></li>
      <li><a href="#validate-your-web-browser">Validate Your Web Browser</a></li>
      <li><a href="#request-an-authorization-code">Request an Authorization Code</a></li>
      <li><a href="#request-an-access-token">Request an Access Token</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
