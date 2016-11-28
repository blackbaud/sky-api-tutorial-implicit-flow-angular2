# SKY API Tutorial: Implicit Flow - Angular 2

## Overview
This tutorial demonstrates the interaction of a client application using Angular 2 with the SKY API authorization service, using the [implicit flow](https://tools.ietf.org/html/rfc6749#section-1.3.2) (or implicit grant).

## Installing Locally

### Basic Requirements:

- Familiarity with git commands
- The latest, stable version of [Git](https://git-scm.com/)
- A server such as your local machine that is capable of running [NodeJS](https://nodejs.org)

### Sky API Requirements:

- **A Blackbaud Developer Subscription Key**
    - If you have not already done so, be sure to complete the [Getting started guide](https://apidocs.sky.blackbaud.com/docs/getting-started/). This will guide you through the process of registering for a Blackbaud developer account and requesting a subscription to an API product.
    - Once approved, your subscription will contain a **Primary Key** and a **Secondary Key**.  You can use either key as the subscription key value for the `bb-api-subscription-key` request header when making calls to the API.
    - You can view your subscription keys on your [Blackbaud Developer Profile](https://developer.sky.blackbaud.com/developer).
- **A Blackbaud Developer Application ID**
    - [Register your application](https://developerapp.sky.blackbaud.com/applications) in order to obtain the **Application ID** (client ID) and **Application Secret** (client secret).
- **A Blackbaud Developer Application Redirect URI**
    - Specify one or more URIs that should be used when redirecting the user's browser back to your application after providing consent during the authorization process. The URIs must be absolute and use https (note that we do support `http://localhost:port` or `http://127.0.0.1:port` for local development).
    <br><br>For this tutorial, use `http://localhost:8080/access_token/`.


### Step 1 — Clone the files
Open Terminal/Command Prompt and type:
```
$  git clone https://github.com/blackbaud/sky-api-tutorial-implicit-flow-angular2.git
```

### Step 2 — Configure the app
Duplicate **config.json-sample** (located in the `src/data/` folder) as **config.json** and fill in the missing values (all required).
<table>
    <tr>
        <td>`SkyApiSubscriptionKey`</td>
        <td>Your [SKY API (Blackbaud) developer subscription key](https://developer.sky.blackbaud.com/developer) (primary or secondary)</td>
    </tr>
    <tr>
        <td>`SkyApiAppId`</td>
        <td>Your SKY API registered application's [Application ID](https://developerapp.sky.blackbaud.com/applications)</td>
    </tr>
</table>

### Step 3 — Start the app
Type the following in Command Prompt/Terminal:
```
npm install
npm start
```
Visit [http://localhost:8080/](http://localhost:8080).
