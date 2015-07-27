# sethfischer/pelican-bootstrap3

This is a [Bootstrap 3][1] theme for [Pelican][2], compatible with
Pelican 3.3.0 and higher. It is a fork of [DandyDev/pelican-bootstrap3][3].

This fork has a longer installation process than the original source so it may
be worth considering the use of DandyDev/pelican-bootstrap3 in the first
instance. The key differences are that this fork uses:

  * [SASS][4]
  * Bootstrap 3 built with [Compass][5] and [bootstrap-sass][6]
  * [Font Custom][7] to build Font Awesome
  * [Grunt][8] to automate the above processes
  * a custom build of jQuery
  * [webassets][9] to combine and compress assets
  * [pelican-githubprojects][10] plugin to generate GitHub repository list 

For a summary of the performance benefits gained by using these technologies
see [Optimising page speed: A case study][11].


## Installation

### Clone theme repository

```
$ git clone https://github.com/sethfischer/pelican-bootstrap3.git
```


### Install dependencies

[Install Font Custom][12]. Install [Node.js][13] then run:

```
$ cd pelican-bootstrap3
$ npm install
```


### Build

  1. Save a custom jQuery build as `static/js/jquery/jquery-custom.min.js`.
  2. Build CSS and font with the command `grunt`.


### Site requirements

The following packages must be available to your Pelican installation so should
be added to your `requirements.txt` file: 

```
pelican-githubprojects
webassets
yuicompressor
```

Edit `pelicanconf.py` to include the config variables `THEME`, and
`ASSET_BUNDLES`:


```
# pelicanconf.py

THEME = `/path/to/pelican-bootstrap3`

ASSET_BUNDLES = (
    ('css_bundle', [
        'css/bootstrap-custom.css',
        'css/font-custom.css',
        'css/sidebar.css',
        'css/style.css',
        'lib/pygments/native.css',
    ], {}),
    ('js_bundle', [
        'js/jquery/jquery-custom.min.js',
        'js/bootstrap/transition.js',
        'js/bootstrap/collapse.js',
    ], {}),
)
```


## Usage

This theme honours the following standard Pelican settings:

  * Putting feeds in the `<head>` section:
    * `FEED_ALL_ATOM`
    * `FEED_ALL_RSS`
  * Template settings:
    * `DISPLAY_PAGES_ON_MENU`
    * `DISPLAY_CATEGORIES_ON_MENU`
    * `MENUITEMS`
    * `LINKS` (Blogroll will be put in the sidebar instead of the head)
  * Analytics & Comments:
    * `GOOGLE_ANALYTICS` (classic tracking code)
    * `GOOGLE_ANALYTICS_UNIVERSAL` and `GOOGLE_ANALYTICS_UNIVERSAL_PROPERTY`
      (Universal tracking code)
    * `DISQUS_SITENAME`
    * `PIWIK_URL`, `PIWIK_SSL_URL` and `PIWIK_SITE_ID`

It uses the `tag_cloud` variable for displaying tags in the sidebar. You can
control the amount of tags shown with: `TAG_CLOUD_MAX_ITEMS`


## CSS and JavaScript assets

To include CSS and JavaScript assets edit the `ASSET_BUNDLES` variable as
specified in the site requirements above.


## Extras

### Article info

Set `SHOW_ARTICLE_AUTHOR` to True to show the author of the article at the top
of the article and in the index of articles. Set `SHOW_ARTICLE_CATEGORY` to
show the Category of each article. Set `SHOW_DATE_MODIFIED` to True to show the
article modified date next to the published date.

If the source is hosted on GitHub a link to the article history may be included
at the bottom of each article by setting the `GITHUB_REPO_URL` variable
(see below):

```
GITHUB_REPO_URL = 'https://github.com/username/repo_name'
```

A changelog may be included at the bottom of the article by using the metadata
keyword `Changelog` of which there may be multiple occurrences. The value for
`Changelog` must be formed from a date and description separated by a colon
(see below):

```
Changelog: 2014-12-17: A description of the change.
```


### Pagination

Pelican-Bootstrap3 follows the standard Pagination settings of Pelican and uses
the Bootstrap3 [Pagination component](http://getbootstrap.com/components/#pagination),
but you can optionally use the Boostrap3 _Pager_ by setting `USE_PAGER` to
`True`.


### Bootstrap fluid layout

If you'd like to use the fluid container layout from Bootstrap, set the flag
`BOOTSTRAP_FLUID` to _True_.


### Site Brand

You can provide a logo for your site using `SITELOGO`. For example:
`SITELOGO = 'images/my_site_logo.png'`. You can then define the size of the
logo using `SITELOGO_SIZE`. The `width` of the `<img>` element will be set
accordingly.

By default the `SITENAME` will be shown as well. It's also possible to hide the
site name using the `HIDE_SITENAME` flag.


### Breadcrumbs

It's possible to show breadcrumbs in your site using the `DISPLAY_BREADCRUMBS`
flag. By default the article category isn't shown in the breadcrumbs, if you
wish to enable it, set the `DISPLAY_CATEGORY_IN_BREADCRUMBS` flag to _True_.


### Navbar

If you wish to use the inverse navbar from Bootstrap, set the flag
`BOOTSTRAP_NAVBAR_INVERSE` to _True_.


### Related posts

This theme has support for the
[Related Posts plugin](https://github.com/getpelican/pelican-plugins/tree/master/related_posts).
All you have to do, is enable the plugin, and the theme will do the rest.


### IPython Notebook support

This theme supports including IPython notebooks through the
[Liquid Tags plugin](https://github.com/getpelican/pelican-plugins/tree/master/liquid_tags).
If you enable the plugin, the theme will automatically include the right CSS/JS
to make the notebooks work.


### Favicon

Set the `FAVICON` option in your `pelicanconf.py`.
For example: `FAVICON = 'images/favicon.png'`


### Index page

  * If `DISPLAY_ARTICLE_INFO_ON_INDEX` is set to _True_, article info
    (date, tags) will be show under the title for each article, otherwise only
    title and summary will be shown (default). 


### Short menu labels for pages

By default, the title of a page is used both for showing the title as part of a
page's content, and, if pages in menu is enabled, as the label of the
corresponding menu item. You can choose a different label for the menu
(such as a short single word) than the page title by adding a Menulabel
metadata attribute to the page header (`Menulabel:` in markdown, `:Menulabel:`
in rst).


### About me

You can show a short blurb of text about yourself and a picture. The following
two settings are used for this:

  * Your 'About Me' paragraph will be whatever the `ABOUT_ME` variable is set
    to (raw html is allowed)
  * Your avatar can be set by pointing the `AVATAR` variable to the relevant
    picture (e.g. 'images/profile.png')


### Banner image

A banner image can be added to the theme, displayed with the `SITENAME` and an
optional subtitle. Config options are as follows:

  * Set the banner image with `BANNER = '/path/to/banner.png'`
  * Set the subtitle text with `BANNER_SUBTITLE = 'This is my subtitle'`
  * By default, the banner is only shown on the index page. To display the
    banner on all pages, set `BANNER_ALL_PAGES = True`


### Sidebar options

The following things can be displayed on the sidebar:

  * **Social links** can be provided through the `SOCIAL` variable. If it's
    empty, the section will not be shown
    * In your `pelicanconf.py` provide your social links like this:

```
SOCIAL = (('twitter', 'http://twitter.com/DaanDebie'),
          ('linkedin', 'http://www.linkedin.com/in/danieldebie'),
          ('github', 'http://github.com/DandyDev'),)
```

  * **Tags** will be shown if `DISPLAY_TAGS_ON_SIDEBAR` is set to _True_.
    Normally, tags are shown as a list.
    * Set `DISPLAY_TAGS_INLINE` to _True_, to display the tags inline (ie. as
      tagcloud)
  * **Categories** will be shown if `DISPLAY_CATEGORIES_ON_SIDEBAR` is set to
    _True_
  * **Recent Posts** will be shown if `DISPLAY_RECENT_POSTS_ON_SIDEBAR` is set
    to _True_
    * Use `RECENT_POST_COUNT` to control the amount of recent posts. Defaults
      to **5**

To remove the sidebar entirely, set `HIDE_SIDEBAR` to _True_.


### reStructuredText styles

If you're using reStructuredText for writing articles and pages, you can
include the extra CSS styles that are used by the `docutils`-generated HTML by
setting `DOCUTIL_CSS` to True. This can be done as a global setting or setting
it in the metadata of a specific article or page.


### Disqus comments

  * This theme sets identifiers for each article's comment threads. If you are
    switching from a theme that doesn't (such as the Pelican built-in default)
    this will result in existing comments getting lost. To prevent this, set
    `DISQUS_NO_ID` to _True_.
  * Set `DISQUS_ID_PREFIX_SLUG` to _True_ if you have configured your article
    URLs such that the slug alone will likely not be unique. Ignored if
    `DISQUS_NO_ID` is _True_.
  * You can also enable Disqus comments for pages. This is a per-page setting
    you can control by adding a field `comments` to you pages' metadata. Set it
    to _enabled_ to enable comments for that page. Comment-threads for pages
    will have an id that is prefixed by 'page-'.
  * To show Disqus comment counts on the index page, set `DISQUS_DISPLAY_COUNTS`
    to _True_.


### Content license

You can optionally declare a [Creative Commons license](http://creativecommons.org)
for the content of your site. It will appear in the site's footer. To enable,
use the following configuration:

  * `CC_LICENSE_DERIVATIVES` - `"yes"` if permitted, `"no"` if not permitted,
    and `"ShareAlike"` if derivatives must be shared under the same terms.
  * `CC_LICENSE_COMMERCIAL` - `"yes"` if commercial reuse is permitted, and
    `"no"` otherwise. 
  * Optionally, you can include attribution markup in the license mark by
    setting `CC_ATTR_MARKUP` to _True_.

The license choice mirrors the [Creative Commons License Chooser](http://creativecommons.org/choose/).
Source for the macro that renders the mark is based on 
http://github.com/hlapp/cc-tools.


### GitHub

The theme can show your most recently active GitHub repos in the sidebar. To
enable, provide a `GITHUB_USER`. Appearance and behaviour can be controlled
using the following variables:

  * `GITHUB_REPO_COUNT`
  * `GITHUB_SKIP_FORK`
  * `GITHUB_SHOW_USER_LINK`


### Facebook Open Graph

In order to make the Facebook like button and other social sharing options work
better, the template contains Open Graph metatags like
`<meta property="og:type" content="article"/>`. You can disable them by setting
`USE_OPEN_GRAPH` to _False_. You can use `OPEN_GRAPH_FB_APP_ID` to provide a
Facebook _app id_. You can also provide a default image that will be passed as
an Open Graph tag  by setting `OPEN_GRAPH_IMAGE` to a relative file path, which
will be prefixed by your site's base url. Optionally, you can override this
default image on a per article and per page basis, by setting the `og_image`
variable in an article or page.


### Twitter Cards

The theme supports [Summary Twitter Cards](https://dev.twitter.com/docs/cards/types/summary-card).
To activate the necessary tags set `TWITTER_CARDS` to `True`. Because
_Twitter Cards_ also use Open Graph tags to identify some of the necessary
metadata, `USE_OPEN_GRAPH` must also be set to `True` (which is the default).

You can optionally provide a `TWITTER_USERNAME` which will be used to set the
Twitter username for the site and for the content creator.

The same image options for Open Graph (see above) can be used for setting
images that appear on Twitter Cards. So if you have set an `OPEN_GRAPH_IMAGE`
and optionally `og_image` for articles and/or pages, you're good to go for
Twitter Cards as well.


### Twitter Timeline

The theme can show your twitter timeline in the sidebar. To enable, provide a
`TWITTER_USERNAME` and a `TWITTER_WIDGET_ID`.

To get a `TWITTER_WIDGET_ID`, go to: https://twitter.com/settings/widgets and
select `Create new`. You'll find the TWITTER_WIDGET_ID under the html or in the
site url:

`https://twitter.com/settings/widgets/TWITTER_WIDGET_ID/edit`


### AddThis

You can enable sharing buttons through [AddThis](http://www.addthis.com/) by
setting `ADDTHIS_PROFILE` to your AddThis profile-id. This will display a
**Tweet**, **Facebook Like** and **Google +1** button under each post.

  * AddThis automatically adds a short hashtag to the end of your URLs. This
    lets you reveal how often visitors copy your URL from their address bar to
    share. Example of URL: `http://domain.com/page.html#UF0983`. This function
    can be disabled by setting `ADDTHIS_DATA_TRACK_ADDRESSBAR` to _False_.
  * All social buttons are enabled by default. You can disable certain button
    by setting following properties to _False_: `ADDTHIS_FACEBOOK_LIKE`,
    `ADDTHIS_TWEET`, `ADDTHIS_GOOGLE_PLUSONE`.


### Tipue search

This theme has support for the
[Tipue Search plugin](https://github.com/getpelican/pelican-plugins/tree/master/tipue_search).

All you have to do, is:

  * Enable the plugin, and the theme will add a search box on the right side of
    the menu.
  * Add `DIRECT_TEMPLATES = (('search',))` in your `pelicanconf.py`.


### Footer

The footer will display a copyright message using the AUTHOR variable and the
year of the latest post. If a content license mark is enabled (see above), that
will be shown as well. 


## Live example

  * [seth.fischer.nz](http://seth.fischer.nz/)


[1]: http://getbootstrap.com/
[2]: https://github.com/getpelican/pelican
[3]: https://github.com/DandyDev/pelican-bootstrap3
[4]: http://sass-lang.com/
[5]: http://compass-style.org/
[6]: https://rubygems.org/gems/bootstrap-sass/
[7]: http://fontcustom.com/
[8]: http://gruntjs.com/
[9]: https://webassets.readthedocs.org/en/latest/
[10]: https://github.com/kura/pelican-githubprojects
[11]: http://seth.fischer.nz/optimising-page-speed-case-study.html
[12]: https://github.com/FontCustom/fontcustom/#installation
[13]: https://nodejs.org/

