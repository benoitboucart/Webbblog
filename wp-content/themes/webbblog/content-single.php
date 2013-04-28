<?php
/**
 * @package webbblog
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="container container-title entry-header">
        <div class="row">
            <div class="col12">

				<?php
					$categories = get_the_category();
					$separator = ' ';
					$output = '';
					if($categories){
						foreach($categories as $category) {
							$output .= '<a href="'.get_category_link( $category->term_id ).'" title="' . esc_attr( sprintf( __( "View all posts in %s" ), $category->name ) ) . '" class="tag">'.$category->cat_name.'</a>'.$separator;
						}
					echo trim($output, $separator);
					}
				?>
                
               	<h1 class="entry-title"><?php the_title(); ?></h1>
				               	
				<?php /* within same category: TRUE */ ?>
				<?php next_post_link('%link','<i class="icon-chevron-left"></i>', TRUE); ?> 
				<?php previous_post_link('%link','<i class="icon-chevron-right"></i>', TRUE); ?> 

            </div>
        </div>
    </header>
    
    
	<div class="container container-white">
	    <div class="row">

	        <div class="col12">
	            <div class="blog-meta">
					<?php webbblog_posted_on_custom(); ?>
	            </div>

	            <div class="blog-content">
					<div class="entry-content">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'webbblog' ), 'after' => '</div>' ) ); ?>
					</div><!-- .entry-content -->

					<footer class="entry-meta">
						<ul class="socialcount socialcount-large" data-url="<?php urlencode(the_permalink()); ?>" data-counts="true" data-share-text="<?php urlencode(the_title()); ?> - <?php urlencode(the_permalink()); ?>">
							<li class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=<?php urlencode(the_permalink()); ?>" title="Share on Facebook"><span class="social-icon icon-facebook"></span><span class="count">Like</span></a></li>
							<li class="twitter"><a href="https://twitter.com/intent/tweet?text=<?php urlencode(the_permalink()); ?>" title="Share on Twitter"><span class="social-icon icon-twitter"></span><span class="count">Tweet</span></a></li>
							<li class="googleplus"><a href="https://plus.google.com/share?url=<?php urlencode(the_permalink()); ?>" title="Share on Google Plus"><span class="social-icon icon-googleplus"></span><span class="count">+1</span></a></li>
						</ul>
					
						<?php
							/* translators: used between list items, there is a space after the comma */
							$category_list = get_the_category_list( __( ', ', 'webbblog' ) );

							/* translators: used between list items, there is a space after the comma */
							$tag_list = get_the_tag_list( '', __( ', ', 'webbblog' ) );

							if ( ! webbblog_categorized_blog() ) {
								// This blog only has 1 category so we just need to worry about tags in the meta text
								if ( '' != $tag_list ) {
									$meta_text = __( 'This entry was tagged %2$s. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'webbblog' );
								} else {
									$meta_text = __( 'Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'webbblog' );
								}

							} else {
								// But this blog has loads of categories so we should probably display them here
								if ( '' != $tag_list ) {
									$meta_text = __( 'This entry was posted in %1$s and tagged %2$s. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'webbblog' );
								} else {
									$meta_text = __( 'This entry was posted in %1$s. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'webbblog' );
								}

							} // end check for categories on this blog

							printf(
								$meta_text,
								$category_list,
								$tag_list,
								get_permalink(),
								the_title_attribute( 'echo=0' )
							);
						?>

						<?php edit_post_link( __( 'Edit', 'webbblog' ), '<span class="edit-link">', '</span>' ); ?>
					</footer><!-- .entry-meta -->
                </div><!--/.blog-content--> 
            </div><!--/.col12--> 
        </div><!--/.row--> 
    </div><!--/.container--> 
</article><!-- #post-## -->
