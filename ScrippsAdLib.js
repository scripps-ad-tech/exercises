var ScrippsAdLib = {
  init: function (ads) {
    //TODO #1: Check to see if the ad "shouldRender()" and if true, call the displayAd function to render it (i.e. this.displayAd(ads[0].size, ads[0].divId))

    //TODO #2: Check to see if the ad should be lazy loaded. If true, do not load the ad unless it comes into view.
  },

  displayAd: function (size, divId) {
    googletag.cmd.push(function () {
      googletag.defineSlot('/6088/scripps/data', [300, 250], 'ad1')
        .addService(googletag.pubads())
      googletag.enableServices()
      googletag.display('ad1')
    })
  },

  shouldRender : function(ad){
    //TODO #1.1: make sure the width of the ad is not cut off
  }

}
