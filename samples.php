<!-- A query designed to switch elements of a page by plain-text entries in a WordPress custom_fields 
entry for the given page, allowing several landing pages to easily share one template while varying in design. -->

<?php // In the header.php section, the three variables are dynamically defined based on what page is currently viewed.  
	// Note these could have been defined in the page data, within the WordPress administrative interface, and thus easily 
	// changed, or added, by users, but the client preferred it hardcoded like so.

		 $custom_fields = get_post_custom(); 

			if ( is_page( 138 )) {    

			    // the page is "About"
				
				$banner_img = '/wp-content/uploads/2012/11/hug.jpg';				
				$banner_head = '<span class="alt-head">Who We Are</span>';
				$banner_desc = '<br /><br />';
				echo '<img src="' . $banner_img . '" width="' . $header_image_width . '" height="' . $header_image_height . '"0px" alt="" />';

			} elseif ( is_page( 'vision-mission-values' ) || '34' == $post->post_parent ) {    

			    // the page is "Our Vision, Mission, and Values"

			    $banner_img = '/wp-content/uploads/2012/11/hug.jpg';
				$banner_head = '<span class="alt-head">Who We Are</span>';
				$banner_desc = '<br /><br />';
				echo '<img src="' . $banner_img . '" width="' . $header_image_width . '" height="' . $header_image_height . '"0px" alt="" />';

			} elseif ( is_tree( '17' ) || '17' == $post->post_parent ) {	

				// the page is "Join Us", or the parent of the page is "Join Us"

				$banner_img = '/wp-content/uploads/2012/11/renewal_a_0077-e1352166225983.jpg';
				$banner_head = 'Creating Change Together';
				$banner_desc = 'We welcome people from all walks of life to join our movement to transform care.';
				echo '<img src="' . $banner_img . '" width="' . $header_image_width . '" height="' . $header_image_height . '"0px" alt="" />';

			} elseif ( is_page( 19 ))  {	

				// the page is "Our Work"

				$banner_img = '/wp-content/uploads/2012/11/classroom.jpg';
				$banner_head = 'A New Way of Caring';
				$banner_desc = 'By integrating research, technology, and design, we inspire, empower, and sustain people who care.';	
				echo '<img src="' . $banner_img . '" width="' . $header_image_width . '" height="' . $header_image_height . '"0px" alt="" />';			
			
			} elseif ( is_home()) { 

				// the page is the homepage

			   $banner_img = '/wp-content/uploads/2012/11/bree_ann_marie.jpg';
			   $banner_head = 'Everyone Can Flourish';
			   $banner_desc = 'We mobilize talent, ideas, and resources to enhance the well-being of seniors, people with disabilities, and those who care for them. <a href="/about-us/">Learn More <img class="learn-more" src="/wp-content/uploads/2012/10/learnmorebullet.png" alt="Learn More" title="Learn More" height="11px" width="11px"></a>';
				echo '<img src="' . $banner_img . '" width="' . $header_image_width . '" height="' . $header_image_height . '"0px" alt="" />';
			}	
			
			else $banner_img = false;
			
				// the page is any other page without a defined banner_img variable
			
				echo '';
			?>


<!-- calling the above variables within the page body -->

<?php // debug testing

		 	$banner_img = $custom_fields['banner-image-path']; echo $banner_img . "<br />";

			$banner_head = $custom_fields['banner-title']; echo $banner_head . "<br />";

			$banner_desc = $custom_fields['banner-text']; echo $banner_desc. "<br />";

		?>  

					<?php get_template_part( 'content', get_post_format() ); ?>





          
		<?php // a WordPress post query dynamically modified by several parameters entered as custom fields within the page metadata.
		$custom_fields = get_post_custom();
		$my_custom_field = $custom_fields['subcat-tag'];
		foreach ( $my_custom_field as $key => $value );
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		$args=array(
		   'posts_per_page'=>5,
		   'cat'=>'-478',
		   'tag'=>$value,
		   'paged'=>$paged,
		);
		query_posts($args);if (have_posts()) : ?>
        
        
      	<?php // Standard loop, calling the above query, in the page body.
		 while (have_posts()) : the_post(); ?>
                 <div class="post" id="post-<?php the_ID(); ?>">	
                  <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
				      		<?php the_excerpt('...'); ?><br />
                            <div class="alignright-over"><p class="date"><?php the_time('n-j-Y'); ?></p></div>
			      </div>
                  <br clear="all" />
				  	<?php endwhile; ?>
               <div class="navigation">
		 	      <div class="alignleft"><?php next_posts_link('&laquo; Older Entries') ?></div>
		 	      <div class="alignright"><?php previous_posts_link('Newer Entries &raquo;') ?></div>
   			</div>
   		<?php else : ?>
   			<h2 class="center">Not Found</h2>
		       <p class="center">Sorry, but you are looking for something that isn't here.</p>
			<?php get_search_form(); ?>
   		<?php endif; ?>
		
        
        <?php // a quick snippet to automatically display all sub-pages of the current page in a formattable list.
		$children = wp_list_pages('title_li=&child_of='.$post->ID.'&echo=0'); if ($children) { ?> <ul> <?php echo $children; ?> </ul> <?php } ?>