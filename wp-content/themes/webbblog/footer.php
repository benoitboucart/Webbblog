<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package webbblog
 */
?>

	</div><!-- #main -->


    <footer id="bottom" class="container container-verydark">
        <div class="row">
            <div class="col4 col-barred">
                <h3>Latest articles</h3>
				<?php // wp_get_archives( array( 'type' => 'monthly' ) ); ?>
		
                <ul class="lined-list">		
				<?php $args = array(
				    'numberposts' => 10,
				    'offset' => 0,
				    'category' => 0,
				    'orderby' => 'post_date',
				    'order' => 'DESC',
				    'post_type' => 'post',
				    'post_status' => 'draft, publish, future, pending, private',
				    'suppress_filters' => true );

				    $recent_posts = wp_get_recent_posts( $args, $output = ARRAY_A );
					$recent_posts = wp_get_recent_posts();
					foreach( $recent_posts as $recent ){
						echo '<li><a href="' . get_permalink($recent["ID"]) . '" title="Look '.esc_attr($recent["post_title"]).'" >' .   $recent["post_title"].'</a> </li> ';
					}
				?>
                </ul>
            </div>
            <div class="col4">
                <h3>Popular this week</h3>
                
                <?php if (function_exists('wpp_get_mostpopular')) wpp_get_mostpopular(
                	"range=weekly&order_by=views&limit=10&stats_views=0&stats_comments=0&wpp_start='<ul class=\"lined-list\">'
                	"); ?>
            </div>
            <div class="col4 collast">
                <h3>Follow me</h3>
                <div class="icons">
                    <a href="http://dribbble.com/benske" target="_blank" title="Benoît Boucart Dribbble profile" class="ico sm-dribbble"></a>
                    <a href="https://twitter.com/benoitboucart" target="_blank" title="Benoît Boucart Twitter profile" class="ico sm-twitter"></a>
                    <a href="http://forrst.com/people/benoitboucart" target="_blank" title="Benoît Boucart Forrst profile" class="ico sm-forrst"></a>
                    <a href="#" target="_blank" title="Benoît Boucart Facebook profile" class="ico sm-facebook"></a>
                </div>
                
                <p>
                    Twitter: <a href="http://twitter.com/benoitboucart" target="_blank">@benoitboucart</a> 
                </p>
                <p>
                    Dribbble: <a href="http://dribbble.com/benske" target="_blank">@benske</a>
                </p>
                
				<aside id="search" class="widget widget_search">
					<?php get_search_form(); ?>
				</aside>
            </div>
        </div><!--/.row--> 
    </footer><!--/#bottom.container-->
    
    <?php /*
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<?php do_action( 'webbblog_credits' ); ?>
			<a href="http://wordpress.org/" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', 'webbblog' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'webbblog' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'webbblog' ), 'webbblog', '<a href="http://underscores.me/" rel="designer">Underscores.me</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
	*/ ?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>