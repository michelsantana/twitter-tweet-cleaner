// use at your own risk
// I repeate every 4 seconds
// Dependencies: [jQuery]
var userName = '';
setInterval(() => {
  setTimeout(() => {
    var profileLinkAtTweetCard = jQuery(`[data-testid="primaryColumn"] article [href*="/${userName}"]`).eq(0);
    var profileTweetCard = profileLinkAtTweetCard.closest('article');
    var profileTweetCardActionMenuButton = profileTweetCard.find('[aria-label="More"]');
    jQuery('html, body').animate({ 
      scrollTop: profileTweetCardActionMenuButton.offset().top - 120
    }, 750)
    .promise()
    // Open action menu click
    .done(() => profileTweetCardActionMenuButton.click())
  }, 1000);

  setTimeout(() => {
    var deleteButtonAtActionMenu = jQuery('[role="menuitem"][tabindex="0"]').eq(0);
    // Click on Delete
    deleteButtonAtActionMenu.click();
  }, 2000);

  setTimeout(() => {
    var dialog = jQuery('[role="dialog"]').eq(0);
    var deleButtonAtDialog = dialog.find('[role="button"]').eq(1);
    // Click to confirm
    deleButtonAtDialog.click();
  }, 3000);
}, 4000);
