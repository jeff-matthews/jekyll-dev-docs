<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Payment integrations often need to know when changes occur to the objects manipulated by the API.
      For example, after a Charge is authorized, the merchant may have an external system that needs to
      know whether the Charge was later captured successfully. Webhooks address this problem by allowing
      the caller to register a URL to which the Gateway POSTs events corresponding to changes within the
      Gateway. As changes occur within the Gateway, <a href="#event" style="font-family:monospace">events</a> are created describing
      what changed. The Gateway then checks whether any webhook URLs are registered and, for each URL,
      performs an HTTP POST containing the Event data in JSON format. The Event JSON sent to the webhook
      is identical to the content retrieved using the <a href="#events">Events</a> APIs.</p>
    </div>
  </div>
</div>
