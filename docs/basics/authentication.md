---
layout: default
title: "Authentication"
permalink: /basics/authentication.html
---

AffiniPay uses the industry standard <a href="http://oauth.net/2/" target="&#95;blank">OAuth 2.0</a> to manage API authentication. There are two OAuth authentication flows that you need to know about when developing integrations:

- **Web Server** - Grants your application access to an AffiniPay merchant's account and the ability to manage transactions on a merchant's behalf.
- **Client Credentials** - Grants your application access to the {{site.data.variables.brand.vt-api}} without granting access to merchant data. Useful for [White Label Sign Up](../guides/merchant-signup.html).

## Web Server

Each of your merchant users must go through the OAuth 2.0 Web Server Authentication flow at least once before your application can perform operations on their behalf.

<span class="panel-warning"><b>Caution:</b> We recommend using an existing OAuth client rather than attempting to implement the OAuth 2.0 specification yourself. You can likely find a client for your preferred language <a href="http://oauth.net/code/" target="&#95;blank">here</a> or you can use our <a href="https://github.com/affinipay/affinipay-oauth-client-php-slim" target="&#95;blank">PHP client</a>.</span>

See the following diagram for a high-level description of the OAuth Web Server Authentication flow as it relates to AffiniPay:

<img class="center" width="100%" src="../images/oauthFlowWebServer.svg">

<span class="panel-note"><b>Note:</b> Refer to [Application Getting Started Guide](../guides/app-dev-getting-started.html) for end-to-end authentication instructions.</span>

<ol>
  <li>AffiniPay merchant users log in to your application and click <b>Connect with AffiniPay</b> to grant your application access to their AffiniPay account.</li>
  <li>The user’s browser is redirected to <span class="code-green">https://secure.affinipay.com/oauth/authorize</span> with the following required parameters:
  <ul>
   <li><span class="code-green">response_type=code</span></li>
   <li><span class="code-green">scope=chargeio</span></li>
   <li><span class="code-green">redirect_uri=&lt;your redirect uri&gt;</span></li>
   <li><span class="code-green">client_id=&lt;your client id&gt;</span></li>
  </ul>
  <p>The browser displays your application name and prompts the merchant user to authorize access to their accounts.</p>
    <p><img class="center" width="70%" src="../images/grantApplicationAccess.png"/></p>
   </li>
  <li>After granting access to your application, <span class="code-green">https://secure.affinipay.com/oauth/authorize</span> redirects them back to your web server using the URL you specify in your <a href="../guides/app-dev-getting-started.html#configure-your-partner-application">AffiniPay OAuth Partner Application</a> and includes an <span class="code-green">authorization_code</span>.</li>
  <li>Your application uses the <span class="code-green">authorization_code</span> along with the client secret to send a POST request to <span class="code-green">https://secure.affinipay.com/oauth/token</span> to retrieve an <span class="code-green">access_token</span>. The following parameters are required:
    <ul>
      <li><span class="code-green">client_id=&lt;your client id&gt;</span></li>
      <li><span class="code-green">client_secret=&lt;your client secret&gt;</span></li>
      <li><span class="code-green">grant_type=authorization_code</span></li>
      <li><span class="code-green">scope=chargeio</span></li>
      <li><span class="code-green">redirect_uri=&lt;your redirect uri&gt;</span></li>
      <li><span class="code-green">code=&lt;authorization_code&gt;</span></li>
    </ul>
    </li>
  <li>A successful response will return JSON that contains an <span class="code-green">access_token</span>.</li>

<div class="http-example http-response-example"><pre>
  {
    "access_token":"mypn6krga4nyevxs96as6p3mw564rzc33pjdsrsko0aymt3s2jl2g269lrcj0s6j",
    "token_type":"bearer",
    "scope":"chargeio",
    "created_at":"1464986958"
  }
</pre></div></ol>

### Next Steps

Now that you have an <span class="code-green">access_token</span>, you can:

- Get merchant account details through the <a href="../reference/api.html#PaymentGatewayAPI" target="&#95;blank">{{site.data.variables.brand.gateway-api}}</a>.
- [Request {{site.data.variables.brand.gateway}} Credentials](../guides/app-dev-getting-started.html#request-gateway-credentials), which allows your application to manage transactions on a merchant's behalf.

## Client Credentials

There are times when your application may need to access protected API resources that don't require a resource owner (e.g., [White Label Sign Up](../guides/merchant-signup.html)). To do so, your application must acquire an <span class="code-green">access_token</span> based on your AffiniPay OAuth Partner Application credentials.

<span class="panel-tip"><b>Tip:</b> <a href="https://github.com/doorkeeper-gem/doorkeeper" target="&#95;blank">Doorkeeper</a> is a Ruby gem that simplifies implementing OAuth flows in Rails applications.</span>

See the following diagram for a high-level description of the OAuth Client Credentials flow as it relates to AffiniPay:

<img class="center" width="100%" src="../images/oauthFlowClientCredentials.svg">

<ol>
  <li>Your application requests an <span class="code-green">access_token</span> using your OAuth Partner Application client credentials (ID and secret). For example:
<div class="http-example http-request-example"><pre>
curl -X POST https://secure.affinipay.com/oauth/token -d client_id=&lt;client_id> -d client_secret=&lt;client_secret> -d grant_type=client_credentials
</pre></div></li>
<li>The {{site.data.variables.brand.vt-api}} validates your client credentials and returns the <span class="code-green">access_token</span>:
<div class="http-example http-response-example"><pre>
{
  "access_token":"mypn6krga4nyevxs96as6p3mw564rzc33pjdsrsko0aymt3s2jl2g269lrcj0s6j",
  "token_type":"bearer",
  "scope":"chargeio",
  "created_at":"1464986958"
}
</pre></div></li>

<li>Your application can store this token and use it to access API resources that don't have an owner. For example, submitting a <a href="../guides/merchant-signup.html">new merchant application</a> to AffiniPay.</li>
</ol>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents"  style="margin-right: 10px;">
      <li><a href="#web-server">Web Server</a></li>
      <li><a href="#client-credentials">Client Credentials</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
