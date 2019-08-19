# Ad Tech Exercises

The exercises below are intentionally very open-ended to see what approach you take. Do what you think is best, and feel free to modify any of the sample code. Feel free to reach out if you have any questions.

### #1

The 1.html file contains a very basic example of how we define what ads to load on a page. Please do the following inside the ScrippsAdLib.js file:

1. Render the ads as they are defined in the ads array. Ads set to display on desktop should only be displayed on desktop. Ads set to display on mobile should only be displayed on mobile.

2. As seen on https://www.wcpo.com, we have a fixed adhesion ad at the bottom of the page that displays on top of all content. Make sure the adhesion ad on this page is displayed in a similar way.

3. Generally, we don't want to load ads unless the user is able to see them. Make sure the ads that are to be lazy loaded are only loaded when their div comes into view as the user scrolls down the page.

### #2

Create a Nodejs app that listens to incoming http requests and responds with the completed html from exercies #1. Deploy this app to Heroku or AWS.

Bonus: Inject some html into the response that outputs the client's user agent and ip address.

### Bonus

We often use A/B testing as a means to test certain features before they get distributed to all of our users. In your favorite language, create an algorithm to assign users to the following variants:
- Variant A - 50%
- Variant B - 30%
- Control - 20%

After executing your code N number of times (number of users), we should find that approximately 50% of your users were assigned to Variant A, 30% to Variant B, and 20% to Control.

### Notes / References
The ads in the sample code utilize google ad manager and google publisher tag.
