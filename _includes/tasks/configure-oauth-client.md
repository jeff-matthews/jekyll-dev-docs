We recommend using an existing OAuth client as opposed to attempting to implement the OAuth specification yourself. You can likely find a client for your preferred language <a href="http://oauth.net/code/" target="&#95;blank">here</a> or you can use AffiniPay's <a href="https://github.com/affinipay/affinipay-oauth-client-php-slim" target="&#95;blank">PHP client</a>.

Minimally, configuring an OAuth client requires the client ID, client secret, and redirect URI specified in your OAuth Partner Application. You may also need the following:

 - URL for authorization redirects: <span class="code-green">https://secure.affinipay.com/oauth/authorize</span>
 - URL for access token creation: <span class="code-green">https://secure.affinipay.com/oauth/token</span>
 - Scope: <span class="code-green">chargeio</span>

### Add a Sign in with AffiniPay Button

First, add a button allowing users to log in to your application using an AffiniPay payment solution account (e.g., AffiniPay, LawPay, or CPACharge). For example:

<a class="btn-large" style="background-color: #fff; color: gray; text-transform: none; padding-left: 10px; padding-right: 10px;"><img style="vertical-align: middle; padding-right: 10px;" src="../images/sign-in-affinipay-logo.png"/>Sign in with AffiniPay</a>

<a class="btn-large" style="background-color: #fff; color: gray; text-transform: none; padding-left: 10px; padding-right: 10px;"><img style="vertical-align: middle; padding-right: 10px;" src="../images/sign-in-lawpay-logo.png"/>Sign in with LawPay</a>

<a class="btn-large" style="background-color: #fff; color: gray; text-transform: none; padding-left: 10px; padding-right: 10px;"><img style="vertical-align: middle; padding-right: 10px;" src="../images/sign-in-cpacharge-logo.png"/>Sign in with CPACharge</a>

<span class="panel-note"><b>Note:</b> Click [here](../resources/branding-guidelines.html) for branding guidelines.</span>

This button should initiate the [OAuth 2.0 Web Server Authentication](../basics/authentication.html#web-server) flow. Your OAuth client will likely provide a convenient mechanism for starting the authentication flow with <span class="code-green">https://secure.affinipay.com/oauth/authorize</span>.

### Request Authorization Code

After users log in through AffiniPay and authorize your application, the {{site.data.variables.brand.vt-api}} sends an <span class="code-green">authorization_code</span> to the **Redirect URI** you specified in your [AffiniPay OAuth Partner Application](../guides/app-dev-getting-started.html#configure-your-partner-application).

### Request Access Token

Your event handler needs to use the <span class="code-green">&lt;authorization_code&gt;</span> to request an <span class="code-green">&lt;access_token&gt;</span>. Send a <span class="api-operation">POST</span> request with the correct <a href="../reference/api.html#RequestanAccessToken" target="&#95;blank">parameters</a> to the <span class="code-green">https://secure.affinipay.com/oauth/token</span> endpoint.

You can access merchant account details after you receive an access token. You must use your AffiniPay OAuth Partner Application client ID and secret to make this call.

<span class="panel-note"><b>Note:</b> Before you can call the {{site.data.variables.brand.gateway-api}} and manage transactions on a merchant's behalf, your application must use the access token to request [gateway credentials](../guides/app-dev-getting-started.html#request-gateway-credentials).</span>
