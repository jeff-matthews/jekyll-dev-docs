<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>All merchants are provided with a public key and test- and live-mode secret keys to use when authenticating with the Gateway. Using the test-mode secret key, you can start using the API immediately without any worry that your charges will be passed to the payment processing networks. When you're ready to start processing payments, just switch to the live-mode secret key.</p>

      <p>All requests to the Gateway are authenticated using <a href="http://en.wikipedia.org/wiki/Basic_access_authentication">HTTP Basic Authentication</a>. To authenticate, you provide either your test- or live-mode secret key in the HTTP <span class="code-green">Authorization</span> header.</p>
    </div>
  </div>
</div>

<pre><code>curl --user secret_key: https://api.chargeio.com/...</code></pre>

<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Using the <span class="code-green">curl</span> command line tool used in the API examples, you set this header using the <span class="code-green">--user</span> flag, followed by the secret key, and then a trailing colon (:).</p>

      <p>Your secret keys provide access to sensitive operations affecting payments, and therefore must be closely guarded. These keys should never be exposed in any publicly-accessible web pages, JavaScript, etc. If you suspect your test- or live-mode secret keys have been compromised, contact your Gateway account provider immediately to reset your secret keys.</p>

      <p>In order to protect sensitive information, including your credentials and the contents of API requests and responses, the Gateway only accepts encrypted communications using HTTPS. Requests made over unsecured HTTP communications are not accepted.</p>
    </div>
  </div>
</div>
