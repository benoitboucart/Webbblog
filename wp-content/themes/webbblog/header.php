<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package webbblog
 */
?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width" />
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    
    <link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,700' rel='stylesheet' type='text/css'>

<?php /*<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script> */?>

	<?php wp_head(); ?>
</head>
<?php /*
<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>
<?php echo bloginfo( 'name' ); ?>
<?php bloginfo( 'description' ); ?>
<?php _e( 'Menu', 'webbblog' ); ?>
*/ ?>

<body <?php body_class(); ?>>
    <!--[if lt IE 7]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
	<div id="bdy_container" class="hfeed site">
		<?php do_action( 'before' ); ?>
        <header class="container container-light" id="top" role="banner">
            <div class="row">
                <div class="col4">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" id="logo">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="Blog"/>
                    </a>
                </div><!--/.twelvecol--> 
                <div class="col8 collast">
                    <div class="nav_container">
                        <nav role="navigation" class="navigation-main">
							<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class'      => 'navigation') ); ?>
                            
            				<div class="screen-reader-text skip-link"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'webbblog' ); ?>"><?php _e( 'Skip to content', 'webbblog' ); ?></a></div>
                        </nav>
                    </div><!--/.nav_container--> 
                </div><!--/.twelvecol--> 
            </div><!--/.row--> 
        </header><!--/#top.container-->

        <section class="sub-navigation container-dark">
            <div class="sub-navigation-container">
                <a class="close">
                    <i class="icon icon-remove-circle"></i>
                </a>

                <nav role="navigation" class="row">
                    <div class="col12">
                        <?php wp_nav_menu( array( 'menu' => 'categories', 'menu_class'      => 'navigation clearfix') ); ?>
                    </div>
                </nav>
            </div>
        </section>

        <section class="sub-navigation container-about">
            <div class="sub-navigation-container">
                <a class="close">
                    <i class="icon icon-remove-circle"></i>
                </a>

                <nav role="navigation" class="row">
                    <div class="col12">
                        <div class="media">
                            <div class="img">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/content/me.jpg" alt="Benoît Boucart">
                            </div>
                            <div class="bd">
                                Hi there! I'm Benoît Boucart and I'm a web designer and (front-end) developer @HeetVanHetWeb. This is <a href="http://webbb.be" target="_blank">my portfolio</a>.
                                <br/>
                                Follow me on: <a href="http://dribbble.com/benske" target="_blank">@Dribbble</a>, <a href="http://twitter.com/benoitboucart" target="_blank">@Twitter</a> or <a href="https://plus.google.com/110267808390173553372" target="_blank">@Google+</a>.
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>


		<div id="main" class="site-main">
