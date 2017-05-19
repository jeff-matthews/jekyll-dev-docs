---
layout: default
title: "Webhooks"
permalink: /guides/webhooks.html
---

Use webhooks to subscribe to AffiniPay system-generated events so your application or business systems can respond accordingly when system changes occur. For example, if you're using our API to <a href="../guides/merchant-signup.html">sign up a new merchant</a> through your application, you can set up a webhook to send an event to your server when we provision the merchant's account. In response, your server can automatically send the new merchant an email instructing them on next steps.

You can register event URLs for <a href="../reference/api.html#EventTypes168" target="&#95;blank">{{site.data.variables.brand.gateway}} events</a> and <a href="../reference/api.html#EventTypes" target="&#95;blank">{{site.data.variables.brand.oauth}} events</a>. Configuring webhooks depends on which type of event you're targeting:

- <b>{{site.data.variables.brand.gateway}} events</b> - As you might expect, these events mostly focus on the status of transactions and recurring charges on a merchant account. They'll also notify you in advance before a saved payment method expires as well as when a method has already expired.
- <b>{{site.data.variables.brand.oauth}} events</b> - These events focus exclusively on the disposition of new AffiniPay merchant applications submitted to AffiniPay as part of the <a href="../guides/merchant-signup.html">White Label Sign Up</a> work flow.

## Event Handling
Event URLs should represent endpoints you control and that are capable of handling events. AffiniPay expects HTTP status codes in response to webhooks. If your server doesn't respond with a <b>200 OK</b> message after receiving an event, AffiniPay's attempts to resend the event depend on the event type:

- <b>{{site.data.variables.brand.gateway}} events</b> - Retried up to 6 times, with an initial 1-hour delay that increases by 1 hour for each failed attempt (e.g., first attempt at time t0, second attempt at t0 + 1 hour, third attempt at t0 + 2 hours, etc).
- <b>{{site.data.variables.brand.oauth}} events</b> - Retried once every 10 minutes for a maximum of 25 attempts.

<span class="panel-warning">Events don't contain any sensitive payment details, but they may contain personally identifiable information (e.g., customer names and addresses). For this reason, we strongly recommend using the HTTPS scheme for all webhook URLs you register.</span>

## Payment Gateway Events
You can configure {{site.data.variables.brand.gateway}} webhooks through the {{site.data.variables.dashboard}} or the <a href="../reference/api.html#ConfiguringWebhooks" target="&#95;blank">{{site.data.variables.brand.gateway-api}}</a>.

To configure {{site.data.variables.brand.gateway}} webhooks through the {{site.data.variables.dashboard}}:

<ol>
  <li>Log in to <a href="https://secure.affinipay.com/login" target="&#95;blank">https://secure.affinipay.com/login</a>.<image style="cursor:pointer" class="icon-info tooltipped" src="../images/icn_information.svg" data-position="top" data-delay="50" data-tooltip="LawPay users should go to https://secure.lawpay.com/login"/></li>
  <li>Click your name in the top-right corner and click <b>Developers</b>.

    <p><img width="30%" src="../images/developers.png"></p></li>

  <li>Scroll down to the <b>Webhooks</b> section.
    <p><img width="80%" src="../images/webhooks.png"></p></li>
  <li>Specify one or more URLs where you want AffiniPay to send events and press <b>Enter</b> or <b>Return</b>.
  <p>You can specify different URLs for <a href="../basics/account-management.html#test-live-creds">test- and live-mode</a> transaction events. Changes that aren't associated with either mode are sent to both sets of URLs.</p></li>
  <li>Click <b>Save Changes</b>.</li>
</ol>

## OAuth Partner Application Events
You must configure {{site.data.variables.brand.oauth}} webhooks through the {{site.data.variables.dashboard}}.

To configure {{site.data.variables.brand.oauth}} webhooks:

<ol>
  <li>Log in to <a href="https://secure.affinipay.com/login" target="&#95;blank">https://secure.affinipay.com/login</a>.<image style="cursor:pointer" class="icon-info tooltipped" src="../images/icn_information.svg" data-position="top" data-delay="50" data-tooltip="LawPay users should go to https://secure.lawpay.com/login"/></li>
  <li>Click your name in the top-right corner and click <b>Developers</b>.

    <p><img width="30%" src="../images/developers.png"></p></li>

  <li>The <b>My Partner Applications</b> section on the right lists your OAuth applications. Locate the application you want to configure and click <b>Edit</b>.</li>
  <li>Specify where you want AffiniPay to send events in the <b>Event URL</b> field.</li>
  <li>Click <b>Save</b>.</li>
</ol>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#event-handling">Event Handling</a></li>
      <li><a href="#payment-gateway-events">Payment Gateway Events</a></li>
      <li><a href="#oauth-partner-application-events">OAuth Partner Application Events</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
