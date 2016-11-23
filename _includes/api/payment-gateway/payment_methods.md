<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Merchant systems which integrate into the Gateway to provide customer
      payment pages need the ability to collect customer credit card and banking
      information and then pass that data through their own system to the
      Gateway's transaction APIs. In order to avoid ever having to store
      sensitive card details on the Merchant systems, the Gateway provides several
      means of generating payment methods in exchange for payment details. Payment
      methods obscure the sensitive aspects of the payment details while providing
      an ID that may be used in any API that accepts card or bank details, in lieu
      of the <a href="#card" style="font-family:monospace">card</a> or <a href="#bank" style="font-family:monospace">bank</a> JSON entity.</p>

      <p>The Gateway offers two types of payment methods: saved and one-time. Saved payment
      methods offer a managed mechanism supporting multiple payments over time. Merchant
      users can save both <a href="#saved-cards">cards</a> and <a href="#saved-banks">banks</a>
      for use in any transaction API which accepts a payment method.</p>

      <p>Saved payment methods are typically integrated into a Merchant site to support
      "remembered" payment details for customers. For example, the site might allow a user to
      save credit card information for a future purchase on the site. The site exchanges the
      credit card details for a <a href="#card" style="font-family:monospace">card</a> (either directly via the API, or using
      a payment form to generate a token, and then exchanging the token for a Card). When the
      user chooses the saved payment method for a future purchase, the site need only send the
      payment request with the saved Card ID returned from the Gateway.</p>

      <p>One-time tokens are designed to simplify payment form integration with the Gateway.
      The Merchant system need only provide an HTML form which collects the necessary payment
      details. The page can then include the Gateway <a href="../guides/payment-form-getting-started.html">JavaScript library</a> that
      allows the page to interact directly with the Gateway, exchanging the payment details for
      a token. Alternatively, the Merchant page can use our redirect mechanism for a completely
      JavaScript-free interaction with the Gateway. Using either mechanism, the merchant system
      receives a one-time token which can then be safely stored and passed to the Gateway API
      when the Charge or Refund is to be performed.</p>

      <p>One-time tokens are designed for single use, after which they are deleted from the Gateway.
      Unused one-time tokens are deleted automatically 5 minutes after creation.</p>
    </div>
  </div>
</div>
