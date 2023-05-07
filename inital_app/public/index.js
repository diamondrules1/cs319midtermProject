let homePage, aboutPage, wantList, cardSearch, accountPage;

window.onload(
  homePage = document.getElementById("homePage");
  aboutPage = document.getElementById("aboutPage");
  wantList = document.getElementById("wantList");
  cardSearch = document.getElementById("cardSearch");
  accountPage = document.getElementById("accountPage");
)

function loadHomePage() { 
  homePage.removeAttribute("hidden");
  aboutPage.setAttribute("hidden", "hidden");
  wantList.setAttribute("hidden", "hidden");
  cardSearch.setAttribute("hidden", "hidden");
  accountPage.setAttribute("hidden", "hidden");
}

function loadAboutPage() { 
    homePage.removeAttribute("hidden", "hidden");
    aboutPage.setAttribute("hidden");
    wantList.setAttribute("hidden", "hidden");
    cardSearch.setAttribute("hidden", "hidden");
    accountPage.setAttribute("hidden", "hidden");
}

function loadWantList() { 
    homePage.removeAttribute("hidden", "hidden");
    aboutPage.setAttribute("hidden", "hidden");
    wantList.setAttribute("hidden");
    cardSearch.setAttribute("hidden", "hidden");
    accountPage.setAttribute("hidden", "hidden");
}

function loadCardSearch() { 
    homePage.removeAttribute("hidden", "hidden");
    aboutPage.setAttribute("hidden", "hidden");
    wantList.setAttribute("hidden", "hidden");
    cardSearch.setAttribute("hidden");
    accountPage.setAttribute("hidden", "hidden");
}

function loadAccountPage() { 
    homePage.removeAttribute("hidden", "hidden");
    aboutPage.setAttribute("hidden", "hidden");
    wantList.setAttribute("hidden", "hidden");
    cardSearch.setAttribute("hidden", "hidden");
    accountPage.setAttribute("hidden");
}
