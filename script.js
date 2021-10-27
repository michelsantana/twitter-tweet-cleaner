// use at your own risk
// I repeate every 4 seconds
// Dependencies: [jQuery]
const userName = '';
const _ttc = {};
_ttc.enable = true;
_ttc.play = () => (_ttc.enable = true);
_ttc.stop = () => (_ttc.enable = false);

(async $ => {
  async function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  let listCards = $(`[data-testid="primaryColumn"] article [href*="/${userName}"]`);

  while (listCards.length > 0) {
    if (!_ttc.enable) {
      await wait(4);
      continue;
    }

    const profileLinkAtTweetCards = $(`[data-testid="primaryColumn"] article [href*="/${userName}"]`);
    for (const card of Array.from(profileLinkAtTweetCards)) {
      const $card = $(card);

      const profileTweetCard = $card.closest('article');
      const profileTweetCardActionMenuButton = profileTweetCard.find('[aria-label="More"]');

      $('html, body').animate({ scrollTop: profileTweetCardActionMenuButton.offset().top - 120 }, 750);

      await wait(1.75);
      profileTweetCardActionMenuButton.click();

      await wait(1.75);
      const deleteButtonAtActionMenu = $('[role="menuitem"][tabindex="0"]:contains("Delete")');
      if (deleteButtonAtActionMenu.length == 0) {
        profileTweetCardActionMenuButton.click();
        await wait(1.75);
        continue;
      }

      await wait(1);
      $(deleteButtonAtActionMenu).click();

      await wait(1);
      const deleButtonAtDialog = $('[role="dialog"] [role="button"]').eq(1);
      $(deleButtonAtDialog).click();
      break;
    }

    listCards = $(`[data-testid="primaryColumn"] article [href*="/${userName}"]`);
    await wait(4);
  }
})(jQuery);
