<?php
/**
 * @package webbblog
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('blog-item-list'); ?>>
    <div class="blog-meta">
		<?php webbblog_posted_on_custom(); ?>
    </div>

    <div class="blog-content">
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
        
       	<h2><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'webbblog' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
       	
        <a class="icon-chevron-right icon-readmore" href="<?php the_permalink();; ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'webbblog' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"></a>
        <!--<div class="meta-bottom">
            <a href="" class="btn-style btn-mini"><i class="icon-chevron-right"></i> Read more</a>
        </div>-->
    </div>
    
    <div class="blog-footer">
 		<?php if ( is_search() ) : // Only display Excerpts for Search ?>
		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->
		<?php else : ?>
		<div class="entry-content">
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'webbblog' ) ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'webbblog' ), 'after' => '</div>' ) ); ?>
		</div><!-- .entry-content -->
		<?php endif; ?>
<?php /*
		<footer class="entry-meta">
			<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
				<?php
					/* translators: used between list items, there is a space after the comma * /
					$categories_list = get_the_category_list( __( ', ', 'webbblog' ) );
					if ( $categories_list && webbblog_categorized_blog() ) :
				?>
				<span class="cat-links">
					<?php printf( __( 'Posted in %1$s', 'webbblog' ), $categories_list ); ?>
				</span>
				<?php endif; // End if categories ?>

				<?php
					/* translators: used between list items, there is a space after the comma * /
					$tags_list = get_the_tag_list( '', __( ', ', 'webbblog' ) );
					if ( $tags_list ) :
				?>
				<span class="sep"> | </span>
				<span class="tags-links">
					<?php printf( __( 'Tagged %1$s', 'webbblog' ), $tags_list ); ?>
				</span>
				<?php endif; /* End if $tags_list * / ?>
			<?php endif; /* End if 'post' == get_post_type() * / ?>

			<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
			<span class="sep"> | </span>
			<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'webbblog' ), __( '1 Comment', 'webbblog' ), __( '% Comments', 'webbblog' ) ); ?></span>
			<?php endif; ?>

			<?php edit_post_link( __( 'Edit', 'webbblog' ), '<span class="sep"> | </span><span class="edit-link">', '</span>' ); ?>
		</footer>
*/ ?>
    </div>
<?php /*
	<header class="entry-header">
		<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'webbblog' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php webbblog_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->
*/ ?>
</article><!-- #post-## -->
