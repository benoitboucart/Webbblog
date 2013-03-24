<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package webbblog
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="container container-title entry-header-page entry-header">
        <div class="row">
            <div class="col12">

               	<h1 class="entry-title"><?php the_title(); ?></h1>

            </div>
        </div>
    </header>
    
    
	<div class="container container-white">
	    <div class="row">

	        <div class="col12">
	        	<?php /*
	            <div class="blog-meta">
					<?php webbblog_posted_on_custom(); ?>
	            </div> */ ?>

	            <div class="blog-content">
					<div class="entry-content">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'webbblog' ), 'after' => '</div>' ) ); ?>
					</div><!-- .entry-content -->
					<?php edit_post_link( __( 'Edit', 'webbblog' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>

                </div><!--/.blog-content--> 
            </div><!--/.col12--> 
        </div><!--/.row--> 
    </div><!--/.container--> 
</article><!-- #post-## -->
