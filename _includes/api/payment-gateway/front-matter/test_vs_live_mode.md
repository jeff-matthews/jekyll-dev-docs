<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The secret key you specify when making an API request affects how the operation is processed. The test-mode secret key only allows you to create new charges and other transactions against <span class="code-green">TEST</span> merchant bank accounts, while the live-mode secret key only works in conjunction with merchant bank accounts associated with live payment processing networks. Attempts to mix secret keys and merchant bank accounts will fail.</p>

      <p>Similarly, the secret key you provide filters the transactions you see when searching or retrieving specific transactions. The test-mode secret key only returns transactions created against <span class="code-green">TEST</span> merchant bank accounts, and the live-mode secret key only returns transactions submitted to the payment processing networks.</p>
    </div>
  </div>
</div>
