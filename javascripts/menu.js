function reset_navs() {
  $('nav-home').className = "";
  $('nav-news').className = "";
  $('nav-testimonials').className = "";
  $('nav-about').className = "";
  $('nav-prices').className = "";
  $('nav-order').className = "";
}

function set_home_current() {
  reset_navs();
  $('nav-home').className = "current";
}

function set_news_current() {
  reset_navs();
  $('nav-news').className = "current";
}

function set_testimonials_current() {
  reset_navs();
  $('nav-testimonials').className = "current";
}

function set_about_current() {
  reset_navs();
  $('nav-about').className = "current";
}

function set_order_current() {
  reset_navs();
  $('nav-order').className = "current";
}
