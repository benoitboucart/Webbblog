<?php
/**
 * The Template for displaying all single posts.
 *
 * @package webbblog
 */

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

	<div id="primary" class="content-area">
		<?php get_template_part( 'content', 'single' ); ?>
	</div><!-- #primary -->

<?php /*
	<?php // next / previous posts ?>
	<?php webbblog_content_nav( 'nav-below' ); ?>
*/ ?>

	<?php
		// If comments are open or we have at least one comment, load up the comment template
		if ( comments_open() || '0' != get_comments_number() )
			comments_template();
	?>

	<?php endwhile; // end of the loop. ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>