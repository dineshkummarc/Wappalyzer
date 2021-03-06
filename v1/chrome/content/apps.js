if ( typeof wappalyzer != 'undefined' ) {
	wappalyzer.cats = {
		 1: { name: 'CMS',                  plural: 'CMS' },
		 2: { name: 'Message Board',        plural: 'Message Boards' },
		 3: { name: 'Database manager',     plural: 'Database managers' },
		 4: { name: 'Documentation tool',   plural: 'Documentation tools' },
		 5: { name: 'Widget',               plural: 'Widgets' },
		 6: { name: 'Web shop',             plural: 'Web shops' },
		 7: { name: 'Photo gallery',        plural: 'Photo galleries' },
		 8: { name: 'Wiki',                 plural: 'Wikis' },
		 9: { name: 'Hosting panel',        plural: 'Hosting panels' },
		10: { name: 'Analytics',            plural: 'Analytics' },
		11: { name: 'Blog',                 plural: 'Blogs' },
		12: { name: 'JavaScript framework', plural: 'JavaScript frameworks' },
		13: { name: 'Issue tracker',        plural: 'Issue trackers' },
		14: { name: 'Video Player',         plural: 'Video Players' },
		15: { name: 'Comment System',       plural: 'Comment Systems' },
		16: { name: 'CAPTCHA',              plural: 'CAPTCHAs' },
		17: { name: 'Font script',          plural: 'Font scripts' },
		18: { name: 'Web framework',        plural: 'Web frameworks' },
		19: { name: 'Miscellaneous',        plural: 'Miscellaneous' },
		20: { name: 'Editor',               plural: 'Editors' },
		21: { name: 'LMS',                  plural: 'LMS' },
		22: { name: 'Web server',           plural: 'Web servers' },
		23: { name: 'Cache tool',           plural: 'Cache tools' },
		24: { name: 'Rich text editor',     plural: 'Rich text editors' },
		25: { name: 'Javascript Graphics',  plural: 'Javascript Graphics' },
		26: { name: 'Mobile framework',     plural: 'Mobile frameworks' }
	};

	wappalyzer.apps = {
		'1C-Bitrix':             { cats: { 1:  1 }, html: /<link[^>]+components\/bitrix/i, script: /1c\-bitrix/i },
		'2z Project':            { cats: { 1:  1 }, meta: { 'generator': /2z project/i } },
		'AddThis':               { cats: { 1:  5 }, script: /addthis\.com\/js/ },
		'Adobe GoLive':          { cats: { 1: 20 }, meta: { 'generator': /Adobe GoLive/i } },
		'Advanced Web Stats':    { cats: { 1: 10 }, html: /aws.src = [^<]+caphyon\-analytics/i },
		'Amiro.CMS':             { cats: { 1:  1 }, meta: { 'generator': /Amiro/i } },
		'Apache':                { cats: { 1: 22 }, headers: { 'Server': /Apache/i } },
		'Apache Tomcat':         { cats: { 1: 22 }, headers: { 'Server': /Apache-Coyote/i } },
		'Atlassian Confluence':  { cats: { 1:  8 }, html: /Powered by <a href=.http:\/\/www\.atlassian\.com\/software\/confluence/i },
		'Atlassian Jira':        { cats: { 1: 13 }, html: /Powered by <a href=.http:\/\/www\.atlassian\.com\/software\/jira/i },
		'AWStats':               { cats: { 1: 10 }, meta: { 'generator': /AWStats/i } },
		'Banshee':               { cats: { 1:  1, 2: 18 }, html: /Built upon the <a href=("|')[^>]+banshee-php\.org/i },
		'Backbone.js':           { cats: { 1: 12 }, script: /backbone.*\.js/, env: /^Backbone$/ },
		'BIGACE':                { cats: { 1:  1 }, meta: { 'generator': /BIGACE/ }, html: /Powered by <a href=("|')[^>]+BIGACE|<!--\s+Site is running BIGACE/i },
		'BigDump':               { cats: { 1:  3 }, html: /<!-- <h1>BigDump: Staggered MySQL Dump Importer/ },
		'blip.tv':               { cats: { 1: 14 }, html: /<(param|embed)[^>]+blip\.tv\/play/i },
		'Blogger':               { cats: { 1: 11 }, meta: { 'generator': /blogger/i }, url: /^(www.)?.+\.blogspot\.com/i },
		'Bugzilla':              { cats: { 1: 13 }, html: /<[^>]+(id|title|name)=("|')bugzilla/i },
		'Burning Board':         { cats: { 1:  2 }, html: /<a href=('|")[^>]+woltlab\.com.+Burning Board/i },
		'chartbeat':             { cats: { 1: 10 }, html: /function loadChartbeat\(\) {/i },
		'Chamilo':               { cats: { 1: 21 }, meta: { 'generator': /Chamilo/i }, headers: { 'X-Powered-By': /Chamilo/ } },
		'Cherokee':              { cats: { 1: 22 }, headers: { 'Server': /Cherokee/i } },
		'ClickHeat':             { cats: { 1: 10 }, script: /clickheat.*\.js/i, env: '/^clickHeatBrowser$/' },
		'ClickTale':             { cats: { 1: 10 }, html: /if\(typeof ClickTale(Tag)*==("|')function("|')\)/ },
		'Clicky':                { cats: { 1: 10 }, script: /static\.getclicky\.com/ },
		'CMS Made Simple':       { cats: { 1:  1 }, meta: { 'generator': /CMS Made Simple/i } },
		'CO2Stats':              { cats: { 1: 10 }, html: /src=("|')http:\/\/www\.co2stats\.com\/propres\.php/ },
		'comScore':              { cats: { 1: 10 }, html: /<i{1}frame[^>]* (id=("|')comscore("|')|scr=[^>]+comscore)/ },
		'Concrete5':             { cats: { 1:  1 }, meta: { 'generator': /concrete5/i } },
		'Contao':                { cats: { 1:  1 }, html: /(<!--\s+This website is powered by (TYPOlight|Contao)|<link[^>]+(typolight|contao).css)/i },
		'Contens':               { cats: { 1:  1 }, meta: { 'generator': /contens/i } },
		'ConversionLab':         { cats: { 1: 10 }, script: /conversionlab\.trackset\.com\/track\/tsend\.js/ },
		'Coppermine':            { cats: { 1:  7 }, html: /<!--Coppermine Photo Gallery/i },
		'Cotonti':               { cats: { 1:  1 }, meta: { 'generator': /Cotonti/i } },
		'cPanel':                { cats: { 1:  9 }, html: /<!-- cPanel/i },
		'Crazy Egg':             { cats: { 1: 10 }, script: /cetrk\.com\/pages\/scripts\/[0-9]+\/[0-9]+\.js/ },
		'CS Cart':               { cats: { 1:  6 }, html: /&nbsp;Powered by (<a href=.http:\/\/www\.cs\-cart\.com|CS\-Cart)/i },
		'CubeCart':              { cats: { 1:  6 }, html: /Powered by <a href=.http:\/\/www\.cubecart\.com/i },
		'cufon':                 { cats: { 1: 17 }, script: /cufon\-yui\.js/, env: /^Cufon$/ },
		'd3':                    { cats: { 1: 25 }, script: /d3(\.min)?\.js/, env: '/^d3$/' },
		'Danneo CMS':            { cats: { 1:  1 }, meta: { 'generator': /Danneo/i } },
		'DataLife Engine':       { cats: { 1:  1 }, meta: { 'generator': /DataLife Engine/i } },
		'DHTMLX':                { cats: { 1: 12 }, script: /dhtmlxcommon\.js/ },
		'DirectAdmin':           { cats: { 1:  9 }, html: /<a[^>]+>DirectAdmin<\/a> Web Control Panel/i },
		'Disqus':                { cats: { 1: 15 }, script: /disqus_url/, html: /<div[^>]+id=("|')disqus_thread("|')/ },
		'dojo':                  { cats: { 1: 12 }, script: /dojo(\.xd)?\.js/, env: /^dojo$/ },
		'Dokeos':                { cats: { 1: 21 }, meta: { 'generator': /Dokeos/i }, html: /Portal <a[^>]+>Dokeos|@import "[^"]+dokeos_blue/i, headers: { 'X-Powered-By': /Dokeos/ } },
		'DokuWiki':              { cats: { 1:  8 }, meta: { 'generator': /DokuWiki/i } },
		'DotNetNuke':            { cats: { 1:  1 }, meta: { 'generator': /DotNetNuke/i }, html: /<!\-\- by DotNetNuke Corporation/i },
		'DreamWeaver':           { cats: { 1: 20 }, html: /(<!\-\-[^>]*(InstanceBeginEditable|Dreamweaver[^>]+target|DWLayoutDefaultTable)|function MM_preloadImages\(\) {)/ },
		'Drupal':                { cats: { 1:  1 }, script: /drupal\.js/, html: /(jQuery\.extend\(Drupal\.settings, \{|Drupal\.extend\(\{ settings: \{|<link[^>]+sites\/(default|all)\/themes\/|<style[^>]+sites\/(default|all)\/(themes|modules)\/)/i, headers: { 'X-Drupal-Cache': /.*/, 'Expires': /19 Nov 1978/ }, env: /^Drupal$/ },
		'Dynamicweb':            { cats: { 1:  1 }, meta: { 'generator': /Dynamicweb/i } },
		'e107':                  { cats: { 1:  1 }, script: /e107\.js/ },
		'Exhibit':               { cats: { 1: 25 }, script: /exhibit.*\.js/, env: '/^Exhibit$/' },
		'ExtJS':                 { cats: { 1: 12 }, script: /ext\-base\.js/, env: /^Ext$/ },
		'ExpressionEngine':      { cats: { 1:  1 }, headers: { 'Set-Cookie': /exp_last_activity/ } },
		'eZ Publish':            { cats: { 1:  1 }, meta: { 'generator': /eZ Publish/i } },
		'FluxBB':                { cats: { 1:  2 }, html: /Powered by (<strong>)?<a href=("|')[^>]+fluxbb/i },
		'Flyspray':              { cats: { 1: 13 }, html: /(<a[^>]+>Powered by Flyspray|<map id=("|')projectsearchform)/ },
		'FrontPage':             { cats: { 1: 20 }, meta: { 'generator': /Microsoft FrontPage/ }, html: /<html[^>]+urn:schemas\-microsoft\-com:office:office/i },
		'Get Satisfaction':      { cats: { 1: 13 }, html: /var feedback_widget = new GSFN\.feedback_widget\(feedback_widget_options\)/ },
		'Google Analytics':      { cats: { 1: 10 }, script: /(\.google\-analytics\.com\/ga\.js|google-analytics\.com\/urchin\.js)/, env: /^gaGlobal$/ },
		'Google App Engine':     { cats: { 1: 22 }, headers: { 'Server': /Google Frontend/i } },
		'Google Font API':       { cats: { 1: 17 }, html: /<link[^>]* href=("|')http:\/\/fonts\.googleapis\.com/ },
		'Google Friend Connect': { cats: { 1:  5 }, script: /google.com\/friendconnect/ },
		'Google Maps':           { cats: { 1:  5 }, script: /(maps\.google\.com\/maps\?file=api|maps\.google\.com\/maps\/api\/staticmap)/ },
		'Graffiti CMS':          { cats: { 1:  1 }, meta: { 'generator': /Graffiti CMS/i } },
		'Gravity Insights':      { cats: { 1: 10 }, html: /gravityInsightsParams\.site_guid = '/ },
		'Hiawatha':              { cats: { 1: 22 }, headers: { 'Server': /Hiawatha/i } },
		'Highcharts':            { cats: { 1: 25 }, script: /highcharts.*\.js/, env: '/^Highcharts$/' },
		'Hotaru CMS':            { cats: { 1:  1 }, meta: { 'generator': /Hotaru CMS/i } },
		'IIS':                   { cats: { 1: 22 }, headers: { 'Server': /IIS/i } },
		'InstantCMS':            { cats: { 1:  1 }, meta: { 'generator': /InstantCMS/i } },
		'IPB':                   { cats: { 1:  2 }, script: /jscripts\/ips_/ },
		'iWeb':                  { cats: { 1: 20 }, meta: { 'generator': /iWeb/i } },
		'Jalios':                { cats: { 1:  1 }, meta: { 'generator': /Jalios/i } },
		'Javascript Infovis Toolkit': { cats: { 1: 25 }, script: /jit.*\.js/, env: '/^\$jit$/' },
		'Jo':                    { cats: { 1: 26, 2: 12 }, script: /[^a-zA-Z]jo.*\.js/i },
		'Joomla':                { cats: { 1:  1 }, meta: { 'generator': /Joomla/i }, html: /<!\-\- JoomlaWorks "K2"/i, headers: { 'X-Content-Encoded-By': /Joomla/ } },
		'jqPlot':                { cats: { 1: 25 }, script: /jqplot.*\.js/, env: '/^jQuery.jqplot$/' },
		'jQTouch':               { cats: { 1: 26 }, script: /jqtouch.*\.js/i, env:/^jQT$/ },
		'jQuery UI':             { cats: { 1: 12 }, script: /jquery\-ui.*\.js/ },
		'jQuery':                { cats: { 1: 12 }, script: /jquery.*.js/, env: /^jQuery$/ },
		'jQuery Mobile':         { cats: { 1: 26 }, script: /jquery\.mobile.*\.js/i },
		'jQuery Sparklines':     { cats: { 1: 25 }, script: /jquery\.sparkline.*\.js/i },
		'JS Charts':             { cats: { 1: 25 }, script: /jscharts.*\.js/i, env: '/^JSChart$/' },
		'JTL Shop':              { cats: { 1:  6 }, html: /(<input[^>]+name=('|")JTLSHOP|<a href=('|")jtl\.php)/i },
		'K2':                    { cats: { 1: 19 }, html: /<!\-\- JoomlaWorks "K2"/ },
		'Kampyle':               { cats: { 1: 10 }, script: /cf\.kampyle\.com\/k_button\.js/ },
		'Kentico CMS':           { cats: { 1:  1 }, meta: { 'generator': /Kentico CMS/i } },
		'Koego':                 { cats: { 1: 10 }, script: /tracking\.koego\.com\/end\/ego\.js/ },
		'Kolibri CMS':           { cats: { 1:  1 }, meta: { 'generator': /Kolibri/i } },
		'Koobi':                 { cats: { 1:  1 }, meta: { 'generator': /Koobi/i } },
		'lighttpd':              { cats: { 1: 22 }, headers: { 'Server': /lighttpd/i } },
		'LiveJournal':           { cats: { 1: 11 }, url: /^(www.)?.+\.livejournal\.com/i },
		'Lotus Domino':          { cats: { 1: 22 }, headers: { 'Server': /Lotus\-Domino/i } },
		'Magento':               { cats: { 1:  6 }, html: /var BLANK_URL = '[^>]+js\/blank\.html'/i },
		'Mambo':                 { cats: { 1:  1 }, meta: { 'generator': /Mambo/i } },
		'MantisBT':              { cats: { 1: 13 }, html: /<img[^>]+ alt=("|')Powered by Mantis Bugtracker/i },
		'MaxSite CMS':           { cats: { 1:  1 }, meta: { 'generator': /MaxSite CMS/i } },
		'MediaWiki':             { cats: { 1:  8 }, meta: { 'generator': /MediaWiki/i }, html: /(<a[^>]+>Powered by MediaWiki<\/a>|<[^>]+id=("|')t\-specialpages)/i },
		'Meebo':                 { cats: { 1:  5 }, html: /(<iframe id=("|')meebo\-iframe("|')|Meebo\('domReady'\))/ },
		'Microsoft ASP.NET':     { cats: { 1: 18 }, html: /<input[^>]+name=("|')__VIEWSTATE/, headers: { 'X-Powered-By': /ASP\.NET/, 'X-AspNet-Version': /.+/ } },
		'Microsoft SharePoint':  { cats: { 1:  1 }, meta: { 'generator': /Microsoft SharePoint/i }, headers: { 'MicrosoftSharePointTeamServices': /.*/, 'X-SharePointHealthScore': /.*/, 'SPRequestGuid': /.*/ } },
		'MiniBB':                { cats: { 1:  2 }, html: /<a href=("|')[^>]+minibb.+\s+<!--End of copyright link/i },
		'Mint':                  { cats: { 1: 10 }, script: /mint\/\?js/ },
		'Mixpanel':              { cats: { 1: 10 }, script: /api\.mixpanel\.com\/track/ },
		'MochiKit':              { cats: { 1: 12 }, script: /MochiKit\.js/, env: /^MochiKit$/ },
		'Modernizr':             { cats: { 1: 12 }, script: /modernizr.*\.js/ },
		'MODx':                  { cats: { 1:  1 }, html: /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=("|')text\/javascript("|')>var MODX_MEDIA_PATH = "media";)|<(link|script)[^>]+assets\/(templates|snippets)\//i },
		'Mollom':                { cats: { 1: 16 }, script: /mollom\.js/, html: /<img[^>]+\/.mollom\/.com/i },
		'Moodle':                { cats: { 1: 21 }, html: /(var moodleConfigFn = function\(me\)|<img[^>]+moodlelogo)/i },
		'Moogo':                 { cats: { 1:  1 }, script: /kotisivukone.js/ },
		'MooTools':              { cats: { 1: 12 }, script: /mootools.*\.js/, env: /^MooTools$/ },
		'Movable Type':          { cats: { 1:  1 }, meta: { 'generator': /Movable Type/i } },
		'MyBB':                  { cats: { 1:  2 }, html: /(<script [^>]+\s+<!--\s+lang\.no_new_posts|<a[^>]* title=("|')Powered By MyBB)/i },
		'MyBlogLog':             { cats: { 1:  5 }, script: /pub\.mybloglog\.com/i },
		'Mynetcap':              { cats: { 1:  1 }, meta: { 'generator': /Mynetcap/i } },
		'Nedstat':               { cats: { 1: 10 }, html: /sitestat\(("|')http:\/\/nl\.sitestat\.com/ },
		'Nginx':                 { cats: { 1: 22 }, headers: { 'Server': /nginx/i } },
		'NOIX':                  { cats: { 1: 19 }, html: /<[^>]+(src|href)=[^>]*(\/media\/noix)|<!\-\- NOIX/i },
		'nopCommerce':           { cats: { 1:  6 }, html: /(<!\-\-Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)/i },
		'OneStat':               { cats: { 1: 10 }, html: /var p=("|')http("|')\+\(d\.URL\.indexOf\('https:'\)==0\?'s':''\)\+("|'):\/\/stat\.onestat\.com\/stat\.aspx\?tagver/i },
		'OpenCart':              { cats: { 1:  6 }, html: /(Powered By <a href=("|')[^>]+OpenCart|route = getURLVar\(("|')route)/i },
		'openEngine':            { cats: { 1:  1 }, html: /<meta[^>]+openEngine/i },
        'OpenLayers':            { cats: { 1:  5 }, script: /openlayers/, env:/^OpenLayers$/ },
		'osCommerce':            { cats: { 1:  6 }, html: /<!-- header_eof \/\/-->|<a[^>]*(osCsid|cPath)/i },
		'osCSS':                 { cats: { 1:  6 }, html: /<body onload=("|')window\.defaultStatus='oscss templates';("|')/i },
		'PANSITE':               { cats: { 1:  1 }, meta: { 'generator': /PANSITE/i } },
		'papaya CMS':            { cats: { 1:  1 }, html: /<link[^>]*\/papaya-themes\//i },
		'PHP-Fusion':            { cats: { 1:  1 }, html: /Powered by <a href=("|')[^>]+php-fusion/i },
		'PHP-Nuke':              { cats: { 1:  2 }, meta: { 'generator': /PHP-Nuke/i }, html: /<[^>]+Powered by PHP\-Nuke/i },
		'phpBB':                 { cats: { 1:  2 }, meta: { 'copyright': /phpBB Group/ }, html: /Powered by (<a href=("|')[^>]+)?phpBB/i },
		'phpDocumentor':         { cats: { 1:  4 }, html: /<!-- Generated by phpDocumentor/ },
		'phpMyAdmin':            { cats: { 1:  3 }, html: /(var pma_absolute_uri = '|PMA_sendHeaderLocation\(|<title>phpMyAdmin<\/title>)/i },
		'phpPgAdmin':            { cats: { 1:  3 }, html: /(<title>phpPgAdmin<\/title>|<span class=("|')appname("|')>phpPgAdmin)/i },
		'Piwik':                 { cats: { 1: 10 }, html: /var piwikTracker = Piwik\.getTracker\(/i },
		'Plesk':                 { cats: { 1:  9 }, script: /common\.js\?plesk/i },
		'Plone':                 { cats: { 1:  1 }, meta: { 'generator': /Plone/i } },
		'Plura':                 { cats: { 1: 19 }, html: /<iframe src="http:\/\/pluraserver\.com/ },
		'posterous':             { cats: { 1:  1, 2: 11 }, html: /<div class=("|')posterous/i },
		'Prestashop':            { cats: { 1:  6 }, meta: { 'generator': /PrestaShop/i }, html: /Powered by <a href=("|')[^>]+PrestaShop/i },
		'Prototype':             { cats: { 1: 12 }, script: /(prototype|protoaculous)\.js/, env: /^Prototype$/ },
		'Protovis':              { cats: { 1: 25 }, script: /protovis.*\.js/, env: /^protovis$/ },
		'punBB':                 { cats: { 1:  2 }, html: /Powered by <a href=("|')[^>]+punbb/i },
		'Quantcast':             { cats: { 1: 10 }, script: /edge\.quantserve\.com\/quant\.js/, env: /^quantserve$/ },
		'Quick.Cart':            { cats: { 1:  6 }, html: /<a href="[^>]+opensolution\.org\/">Powered by/i },
		'Raphael':               { cats: { 1: 25 }, script: /raphael.*\.js/, env: /^Raphael$/ },
		'reCAPTCHA':             { cats: { 1: 16 }, script: /(api\-secure\.recaptcha\.net|recaptcha_ajax\.js)/, html: /<div[^>]+id=("|')recaptcha_image/ },
		'Reddit':                { cats: { 1:  2 }, html: /(<script[^>]+>var reddit = {|<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)/i, url: /^(www.)?reddit\.com/ },
		'Redmine':               { cats: { 1: 13 }, meta: { 'description': /Redmine/i }, html: /Powered by <a href=("|')[^>]+Redmine/i },
		'Reinvigorate':          { cats: { 1: 10 }, html: /reinvigorate\.track\("/ },
		'RequireJS':             { cats: { 1: 12 }, script: /require.*\.js/ , env: /^requirejs$/},
		'S.Builder':             { cats: { 1:  1 }, meta: { 'generator': /S\.Builder/i } },
		's9y':                   { cats: { 1:  1 }, meta: { 'generator': /Serendipity/i } },
		'script.aculo.us':       { cats: { 1: 12 }, script: /(scriptaculous|protoaculous)\.js/, env: /^Scriptaculous$/ },
		'Sencha Touch':          { cats: { 1: 26, 2: 12}, script: /sencha\-touch.*\.js/},
		'ShareThis':             { cats: { 1:  5 }, script: /w\.sharethis\.com\// },
		'sIFR':                  { cats: { 1: 17 }, script: /sifr\.js/ },
		'Site Meter':            { cats: { 1: 10 }, script: /sitemeter.com\/js\/counter\.js\?site=/ },
		'SiteCatalyst':          { cats: { 1: 10 }, html: /var s_code=s\.t\(\);if\(s_code\)document\.write\(s_code\)/i },
		'SiteEdit':              { cats: { 1:  1 }, meta: { 'generator': /SiteEdit/i } },
		'SMF':                   { cats: { 1:  2 }, html: /<script [^>]+\s+var smf_/i },
		'sNews':                 { cats: { 1:  1 }, meta: { 'generator': /sNews/ } },
		'Snoobi':                { cats: { 1: 10 }, script: /snoobi\.com\/snoop\.php/ },
		'SOBI 2':                { cats: { 1: 19 }, html: /(<!\-\- start of Sigsiu Online Business Index|<div[^>]* class=("|')sobi2)/i },
		'SPIP':                  { cats: { 1:  1 }, meta: { 'generator': /SPIP/i }, headers: { 'X-Spip-Cache': /.*/ } },
		'SQL Buddy':             { cats: { 1:  3 }, html: /(<title>SQL Buddy<\/title>|<[^>]+onclick=("|')sideMainClick\(("|')home\.php)/i },
		'Squarespace':           { cats: { 1:  1 }, html: /Squarespace\.Constants\.CURRENT_MODULE_ID/i },
		'Squiz Matrix':          { cats: { 1:  1 }, meta: { 'generator': /Squiz Matrix/ }, html: /  Running (MySource|Squiz) Matrix/i, 'X-Powered-By': /Squiz Matrix/ },
		'StatCounter':           { cats: { 1: 10 }, script: /statcounter\.com\/counter\/counter/ },
		'SWFObject':             { cats: { 1: 19 }, script: /swfobject.*\.js/i },
		'swift.engine':          { cats: { 1:  1 }, headers: { 'X-Powered-By': /swift\.engine/ } },
		'Swiftlet':              { cats: { 1:  1, 2: 18 }, meta: { 'generator': /Swiftlet/i }, html: /Powered by <a href=("|')[^>]+Swiftlet/i, headers: { 'X-Swiftlet-Cache': /.*/, 'X-Powered-By': /Swiftlet/ } },
		'Textpattern CMS':       { cats: { 1:  1 }, meta: { 'generator': /Textpattern/i } },
		'Timeline':              { cats: { 1: 25 }, script: /timeline.*\.js/, env: '/^Timeline$/' },
		'Timeplot':              { cats: { 1: 25 }, script: /timeplot.*\.js/, env: '/^Timeplot$/' },
		'TomatoCart':            { cats: { 1:  6 }, meta: { 'generator': /TomatoCart/i } },
		'Trac':                  { cats: { 1: 13 }, html: /(<a id=("|')tracpowered)/i },
		'Tumblr':                { cats: { 1: 11 }, html: /<iframe src=("|')http:\/\/www\.tumblr\.com/i, url: /^(www.)?.+\.tumblr\.com/i, headers: { 'X-Tumblr-Usec': /.*/ } },
		'Twilight CMS':          { cats: { 1:  1 }, headers: { 'X-Powered-CMS': /Twilight CMS/ } },
		'Typekit':               { cats: { 1: 17 }, script: /use.typekit.com/, env: /^Typekit$/ },
		'TypePad':               { cats: { 1: 11 }, meta: { 'generator': /typepad/i }, url: /^(www.)?.+\.typepad\.com/i },
		'TYPO3':                 { cats: { 1:  1 }, meta: { 'generator': /TYPO3/i }, html: /(<(script[^>]* src|link[^>]* href)=[^>]*fileadmin)/i, url: /\/typo3/i },
		'Ubercart':              { cats: { 1:  6 }, script: /uc_cart\/uc_cart_block\.js/ },
		'Umbraco':               { cats: { 1:  1 }, headers: { 'X-Umbraco-Version': /.+/ } },
		'Underscore.js':         { cats: { 1: 12 }, script: /underscore.*\.js/ },
		'UserRules':             { cats: { 1: 13 }, html: /var _usrp =/ , env: /^\_usrp$/ },
		'Vanilla':               { cats: { 1:  2 }, html: /<body id=("|')(DiscussionsPage|vanilla)/i, headers: { 'X-Powered-By': /Vanilla/ } },
		'Varnish':               { cats: { 1: 22 }, headers: { 'X-Varnish': /.+/, 'X-Varnish-Age': /.+/, 'X-Varnish-Cache': /.+/, 'X-Varnish-Action': /.+/, 'X-Varnish-Hostname': /.+/, 'Via': /Varnish/ } },
		'vBulletin':             { cats: { 1:  2 }, meta: { 'generator': /vBulletin/i } },
		'viennaCMS':             { cats: { 1:  1 }, html: /powered by <a href=("|')[^>]+viennacms/i },
		'Vignette':              { cats: { 1:  1 }, html: /<[^>]+?=("|')(vgn\-ext|vgnext)/i },
		'Vimeo':                 { cats: { 1: 14 }, html: /<(param|embed)[^>]+vimeo\.com\/moogaloop/i },
		'VirtueMart':            { cats: { 1:  6 }, html: /<div id=("|')vmMainPage/ },
		'VisualPath':            { cats: { 1: 10 }, script: /visualpath[^\/]*\.trackset\.it\/[^\/]+\/track\/include\.js/ },
		'Vox':                   { cats: { 1: 11 }, url: /^(www.)?.+\.vox\.com/i },
		'VP-ASP':                { cats: { 1:  6 }, script: /vs350\.js/, html: /<a[^>]+>Powered By VP\-ASP Shopping Cart<\/a>/ },
		'W3Counter':             { cats: { 1: 10 }, script: /w3counter\.com\/tracker\.js/ },
		'Web Optimizer':         { cats: { 1: 10 }, html: /<title [^>]*lang=("|')wo("|')>/ },
		'webEdition':            { cats: { 1:  1 }, meta: { 'generator': /webEdition/i, 'DC.title': /webEdition/i } },
		'WebGUI':                { cats: { 1:  1 }, meta: { 'generator': /WebGUI/i } },
		'WebPublisher':          { cats: { 1:  1 }, meta: { 'generator': /WEB\|Publisher/i } },
		'WebsiteBaker':          { cats: { 1:  1 }, meta: { 'generator': /WebsiteBaker/i } },
		'Webtrekk':              { cats: { 1: 10 }, html: /var webtrekk = new Object/ },
		'Webtrends':             { cats: { 1: 10 }, html: /<img[^>]+id=("|')DCSIMG("|')[^>]+webtrends/i },
		'Weebly':                { cats: { 1:  1 }, html: /<[^>]+class=("|')weebly/i },
		'WikkaWiki':             { cats: { 1:  8 }, meta: { 'generator': /WikkaWiki/ }, html: /Powered by <a href=("|')[^>]+WikkaWiki/i },
		'wink':                  { cats: { 1: 26, 2: 12 }, script: /(\_base\/js\/base|wink).*\.js/i, env:/^wink$/ },
		'Wolf CMS':              { cats: { 1:  1 }, html: /<a href=("|')[^>]+wolfcms.org.+Wolf CMS.+inside/i },
		'Woopra':                { cats: { 1: 10 }, script: /static\.woopra\.com/ },
		'WordPress':             { cats: { 1:  1, 2: 11 }, meta: { 'generator': /WordPress/i }, html: /<link rel=("|')stylesheet("|') [^>]+wp-content/i },
		'xajax':                 { cats: { 1: 12 }, script: /xajax_core.*\.js/i },
		'XenForo':               { cats: { 1:  2 }, html: /(jQuery\.extend\(true, XenForo|Forum software by XenForo&trade;|<!\-\-XF:branding)/ },
		'XiTi':                  { cats: { 1: 10 }, html: /<[^>]+src=("|')[^>]+xiti.com\/hit.xiti/i },
		'XMB':                   { cats: { 1:  2 }, html: /<!-- Powered by XMB/i },
		'XUI':                   { cats: { 1: 26, 2: 12 }, script: /[^a-zA-Z]xui.*\.js/i, env:/^x\$$/ },
		'XOOPS':                 { cats: { 1:  1 }, meta: { 'generator': /XOOPS/i } },
		'xtCommerce':            { cats: { 1:  6 }, meta: { 'generator': /xt:Commerce/ }, html: /<div class=("|')copyright("|')>.+<a[^>]+>xt:Commerce/i },
		'YaBB':                  { cats: { 1:  2 }, html: /Powered by <a href=("|')[^>]+yabbforum/i },
		'Yahoo! Web Analytics':  { cats: { 1: 10 }, script: /d\.yimg\.com\/mi\/ywa\.js/ },
		'Yandex.Metrika':        { cats: { 1: 10 }, script: /mc\.yandex\.ru\/metrika\/watch\.js/ },
		'YouTube':               { cats: { 1: 14 }, html: /<(param|embed)[^>]+youtube\.com\/v/i },
		'YUI Doc':               { cats: { 1:  4 }, html: /<html[^>]* yuilibrary\.com\/rdf\/[0-9.]+\/yui\.rdf/i },
		'YUI':                   { cats: { 1: 12 }, script: /\/yui\/|yui\.yahooapis\.com/, env: /^YAHOO$/ },
		'Zen Cart':              { cats: { 1:  6 }, meta: { 'generator': /Zen Cart/i } },
		'Zend':                  { cats: { 1: 18 }, headers: { 'X-Powered-By': /Zend/ } }
		};
}
