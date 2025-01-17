function getBrowserInfo() {
  return browser.runtime.getBrowserInfo();
}

function openBugzillaForm(info) {
  const bugzillaURL = "https://bugzilla.mozilla.org/enter_bug.cgi";
  const params = new URLSearchParams({
    product: "Firefox",
    format: "guided",
    component: "General",
    op_sys: info.os,
    version: info.version
  });

  browser.tabs.create({
    url: `${bugzillaURL}?${params.toString()}`
  });
}

browser.browserAction.onClicked.addListener(() => {
  getBrowserInfo().then(openBugzillaForm);
});